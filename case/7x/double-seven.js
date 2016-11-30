function startTyping() {
    var a = getQuery();
    return a && a.name && a.ta_name && a.met_time ? void $(function() {
        text = text.replace("{name}", decodeURIComponent(a.name)).replace("{ta_name}", decodeURIComponent(a.ta_name)).replace("{met_time}", a.met_time), $("#codepad").typed({
            strings: [text],
            typeSpeed: 10,
            showCursor: !1,
            callback: function() {
                setTimeout(function() {
                    // TODO window.location.href
                }, 2e3)
            }
        })
    }) : void(0)
}

function showResult() {
    var a = getQuery();
    return a && a.name && a.ta_name && a.met_time ? ($("#ta_name").text(decodeURIComponent(a.ta_name)), $("#name").text(decodeURIComponent(a.name)), void $("#days").text(calDays(a.met_time))) : void(0)
}

function calDays(a) {
    var s = new Date(a);
    return "object" == typeof s ? Math.floor((Date.now() - s.getTime()) / 864e5) : 0
}

function getQuery() {
    var a = location.search.split("?")[1];
    var template = '<div class="javascript"><h1>七夕礼物生成器</h1><fieldset><legend>你的小昵称</legend><input type="text" name="you" /></fieldset><fieldset><legend>她的小昵称</legend><input type="text" name="her" /></fieldset><fieldset><legend>相遇时间 例：2016/05/21</legend><input type="date" name="time" value="2016-05-21"/></fieldset><a href="javascript:;" class="btn">生成一下</a></div>'
    console.log(a);
    if(!a || /^nsukey/.test(a)){
        $('#codepad').html(template);

        $('.btn').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            if(!$('[name="you"]').val() || !$('[name="her"]').val() || !$('[name="time"]').val()){
                alert('至少填点东西吧！');
                return false;
            }

            window.location.href = "index.html?name=" + $('[name="you"]').val() + "&ta_name=" + $('[name="her"]').val() + "&met_time=" + $('[name="time"]').val();
        });
    }
    return a ? (a = a.split("&"), a.reduce(function(a, s) {
        var n = s.split("=");
        return a[n[0]] = n[1], a
    }, {})) : a
}
var text = '<pre class="javascript">\n  <code class="javascript">\n    <span class="co">/**</span>\n    <span class="co"> * 今天是一个特别的日子，</span>\n    <span class="co"> * 我准备了一份特别的礼物，送给特别的你</span>\n    <span class="co"> */</span>\n    Boy i = <span class="kw">new</span> Boy(<span class="st">"{name}"</span>);\n    Girl u = <span class="kw">new</span> Girl(<span class="st">"{ta_name}"</span>);\n    <span class="co">// {met_time}，我遇见了你，从此变得心神不宁</span>\n    <span class="kw">i</span>.<span class="fn">met</span>(<span class="st">u</span>);\n    <span class="co">// 幸运的是，你停留在了我身边，让我能感受到你的气息</span>\n    <span class="kw">u</span>.<span class="fn">stayed</span>();\n    <span class="co">// 从那天开始，我每天都会有几十个瞬间，忍不住想起你</span>\n    <span class="kw">i</span>.<span class="fn">miss</span>(<span class="st">u</span>);\n    <span class="co">// 我想要照顾你，想要和你在一起</span>\n    <span class="kw">i</span>.<span class="fn">takeCareOf</span>(<span class="st">u</span>);\n    <span class="co">// 我知道，说到未来，你偶尔也会犹豫</span>\n    <span class="co">// 但我会等你，哪里也不去</span>\n    <span class="kw">boolean</span> isHesitate = <span class="kw">true</span>;\n    <span class="kw">while</span> (isHesitate) {\n      <span class="kw">i</span>.<span class="fn">waitFor</span>(<span class="st">u</span>);\n      <span class="co">// 永远在一起，是一个漫长的决定</span>\n      <span class="co">// 我明白你所有的担心</span>\n      isHesitate = <span class="kw">u</span>.<span class="fn">thinkOver</span>();\n    }\n    <span class="co">// 但我仍然想要一直陪伴在你身边，直到我们都幸福地老去</span>\n    <span class="kw">i</span>.<span class="fn">staywith</span>(<span class="st">u</span>);\n    <span class="kw">i</span>.<span class="fn">liveHappilyWith</span>(<span class="st">u</span>);\n  </code>\n</pre>';
$(function() {
    $("#generate-btn").click(function() {
        var a = $("#name").val(),
            s = $("#ta_name").val(),
            n = $("#met_time").val();
        if (a && s && n && /^(19|20)\d\d-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(n)) {
            var e = new Date(n);
            e.getTime && e.getTime() < Date.now() && (location.href = "index.html?name=" + a + "&ta_name=" + s + "&met_time=" + n)
        }
    }), $("#share").click(function() { $("#modal").show() }), $("#modal").click(function() { $("#modal").hide() })
});
