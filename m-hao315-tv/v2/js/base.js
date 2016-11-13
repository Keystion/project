var WIN = window,
    DOC = document,
    Util ={
        setLoad: function(a) {
            var a = $(a);
            return a.hasClass("_load_inited") || a.addClass("_load_inited").append($('<i class="ui_loading"><u></u><u></u><u></u></i>')), a;
        }
    }
        
var IsHistorySupport = "pushState" in history,
    Channel = {
        isResfresh: !1,
        isSportsChannel: !1,
        ajaxObj: null,
        pageSize: 20,
        currentPage: 1,
        searchAlias: [],
        searchKeys: {},
        elChannelListWrap: null,
        elItemListWrap: null,
        elLoadMore: null,
        elItemList: null,
        currentURL: null,
        //channelAPI: API_URL + "search2/album.json",
        channelAPI: "json.json",

        //channelAPI: "http://m.tv.sohu.com" + API_URL + "search2/album.json",
        channelDomain: "",
        channeledMap: {
            101: "1002",
            106: "1003",
            100: "1004",
            115: "1005",
            122: "1006",
            112: "1007",
            9004: "1008",
            107: "1009",
            121: "1010",
            165: "1014",
            166: "1014",
            167: "1014",
            168: "1014"
        },
        init: function() {
            Channel.elChannelListWrap = $(".channel_page .channel_list_wrap"), Channel.elItemListWrap = $(".xm-item-block"), Channel.elItemList = $(".item_list", Channel.elItemListWrap);
            var a = $(".filter_handle").on("click", Channel.onFilterHandleClick);
            if (a.length > 0) {
                Channel.getSearchKeys();
                var b = Channel.searchAlias.join(" ");
                $(".filter_handle b").html(b || "筛选"), 
                Channel.elCategoryListWrap = $(".category_list_wrap"), 
                Channel.elFilterButton = $(".button", Channel.elCategoryListWrap).on("click", Channel.onFilterButtonClick), $("a[search_key]").each(function(a, b) {
                    b.setAttribute("href", "#" + b.getAttribute("href"))
                }).on("click", Channel.onSearchItemClick)
            }
            //Channel.elChannelListWrap.length > 0 && (Channel.elLoadMore = $(".more", Channel.elChannelListWrap).on("click", Channel.loadMore), IsHistorySupport && $(window).on("popstate", Channel.updatePage)
        },
        updatePage: function() {
            if (!(Channel.elChannelListWrap.length < 1)) {
                if (null === Channel.currentURL)
                    return void(Channel.currentURL = location.href);
                var a = (location.pathname.match(/\/[^\/]+\/(.+)/), URL.getQueryData(location.search));
                if (Channel.isSportsChannel && !a.cat) {
                    var b = $(".row[search_name=cat] a").eq(0);
                    if (b.length > 0) {
                        var c = b.attr("search_key").split("/");
                        alert(c);
                        c.length > 0 && (a.cat = c[1])
                    }
                }
                Channel.currentPage = 1, Channel.searchKeys = $.extend({}, a), Channel.updateFilterItemsBySearchKey(), Channel.updateChannelList(!0)
            }
        },
        updateURL: function() {
            if (IsHistorySupport) {
                var a, b, c, d = [],
                    f = e = location.pathname;
                    //f = e[0];
                for (a in Channel.searchKeys)
                    b = Channel.searchKeys[a], "" !== b && d.push(a + "=" + Channel.searchKeys[a]);
                    c = (location.origin || "") + f + "?" + d.join("&") + "&page=1", c !== location.href && (history.pushState(null, DOC.title, c), Channel.currentURL = c)
            }
        },
        onFilterHandleClick: function() {
            var a = $(".m-filter"),
                b = Channel.elCategoryListWrap;
            if (a.hasClass("filter_open"))
                 b.css({
                     "-webkit-transform": ""
                 }), a.removeClass("filter_open"), Channel.elFilterButton.addClass("white_button"), Channel.updateFilterItemsBySearchKey();
             else {
                 a.addClass("filter_open");
                 var c = b.height() + 80;
                 b.css({
                     top: -c,
                     "-webkit-transform": "translate3d(0," + c + "px,0)"
                 })
             }
        },
        updateFilterItemsBySearchKey: function() {
            var a = $(".filter_wrap");
            $("a", a).removeClass("c"); {
                var b = $.extend({
                    o: "-1"
                }, Channel.searchKeys);
                $("div[search_name]", a).each(function(a, c) {
                    var d, e = $(c),
                        f = e.attr("search_name");
                    d = f + "/" + (b[f] || ""), $('a[search_key="' + d + '"]').addClass("c")
                })
            }
        },
        getSearchKeys: function() {
            var a = {},
                b = [];
            return $(".c[search_key]").each(function(c, d) {
                var e = $(d),
                    f = e.attr("search_key"),
                    g = f.split("/");
                a[g[0]] = g[1], "" !== g[1] && "o" !== g[0] && b.push(e.html().replace(/<.*>/, ""))
            }), Channel.searchAlias = b, Channel.searchKeys = $.extend({}, a), a
        },
         setLoadingEl: function(a) {
             Channel.elLoading && Channel.elLoading.removeClass("loading"), Channel.elLoading = a
         },
        onSearchItemClick: function() {
            var a = $(this),
                b = a.hasClass("o");
            return a.hasClass("c") || ($(".c", a.parent()).removeClass("c"), a.addClass("c"), b || Channel.elFilterButton.removeClass("white_button")), (WIN.innerWidth >= 768 || b) && (Channel.setLoadingEl(a), Channel.currentPage = 1, Channel.updateChannelList()), !1
        },
        onFilterButtonClick: function() {
            var a = $(this);
            return a.hasClass("white_button") || (Channel.setLoadingEl($(".filter_handle em")), Channel.currentPage = 1, Channel.updateChannelList(), Channel.onFilterHandleClick()), !1
        },
        loadMore: function() {
            return Channel.setLoadingEl(Channel.elLoadMore), Channel.currentPage++, Channel.updateChannelList(), !1
        },
        updateChannelList: function(a) {
            var b = Channel.getSearchKeys();
            var f = Channel.channelAPI + "?" + $.param(b);
            Channel.elLoading && Util.setLoad(Channel.elLoading.addClass("loading")), $.ajax({
                url: f + "&page=1",
                type: "get",
                dataType: "json",
                success: function(a) {
                    Channel.elLoading && Channel.elLoading.removeClass("loading"), Channel.updateChannelListLoaded(a)
                }
            }), a || Channel.updateURL()
        },
        updateChannelListLoaded: function(a) {
            var a = a.data || a,
                b = a && a.videos,
                c = b && b.length || 0,
                d = [],
                f = $(DOC.body).attr("cate_code");
            if (f) {
                var g = Channel.channeledMap[f];
                if (g)
                    var h = "12" + g + (Channel.currentPage > 1 ? "0200" : "0100")
            }
            if ($(".filter_handle b").html("筛选"), DOC.title = ($(".channel_nav .c").html() || ""), c > 0) {
                for (var j, k = 0; a.count > k; k++) {
                    j = b[k];
                    d.push("<li>",'<a href="'+j.url+'">','<img src="'+j.pic+'" alt="">','<p class="title">',j.title+"("+k+")","</p>","</a>","</li>");
                };
                Channel.elChannelListWrap.removeClass("blank_list").toggleClass("has_more", a.count > Channel.currentPage * Channel.pageSize)
            } else
                Channel.elChannelListWrap.addClass("blank_list").removeClass("has_more");
            d = '<ul class="' + Channel.elItemList.attr("class") + '">' + d.join("") + "</ul>",
            1 == Channel.currentPage ? Channel.elItemListWrap.html(d) : Channel.elItemListWrap.append('<h1 class="cate_title">第' + Channel.currentPage + "页</h1>" + d)
        }
    };
$(document).ready(function() {
    Channel.init();
	
    for(var i=0; i<5;i++){
		var row1 = $(".row[search_name=index]"),
			row2 = $(".row[search_name=suource]"),
			row3 = $(".row[search_name=area]"),
			row4 = $(".row[search_name=money]"),
			row5 = $(".row[search_name=nature]");
		//var oH = rows[i].height();
		//alert(oH);
		
	}
});
function commentshow(index,suource,area,money,nature,page){
    //alert(page);
    $.ajax({
        type:"get",
        url:"json.json?index="+index+"&suource="+suource+"&area="+area+"&money="+money+"&nature="+nature+"&page="+page,
        dataType:'json',
        success: function(a){
			var a = a.data || a,
                b = a && a.videos,
                c = b && b.length || 0,
                d = [],
				html="";
			$(".GetMore").parent("li").remove();
			for (var j, k = 0; 20 > k; k++) {
				j = b[k];
				d.push("<li>",'<a href="'+j.url+'">','<img src="'+j.pic+'" alt="">','<p class="title">',j.title+"("+k+")","</p>","</a>","</li>");
			};
			html = d.join("");
			$(".item_list").append(html);
        }
        
    });
}
