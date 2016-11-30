var validateRule = {

    "visitorName":{

        "datatype":"nickname",

        "nullmsg":"请输入您的姓名",

        "errormsg":"仅支持1-12位中文、字母、数字、下划线或减号",

        "ignore":"ignore",

        "necessary":"necessary"

    },

    "visitorMobile":{

        "datatype":"phone",

        "nullmsg":"请输入您经常使用的手机号",

        "errormsg":"手机号码有误或者格式不正确，请重新输入",

        "ignore":"ignore",

        "necessary":"necessary"

    },

    "visitorEmail":{

        "datatype":"email",

        "nullmsg":"请输入您的常用邮箱",

        "errormsg":"您输入的邮箱格式不正确，请重新输入",

        "ignore":"ignore",

        "maxLen":"100",

        "lenmsg":"您输入的内容超过100字"



    },

    "visitorAddr":{

        "datatype":"len",

        "nullmsg":"",

        "errormsg":"您输入字数超过40字",

        "ignore":"ignore",

        "maxLen":"40",

        "lenmsg":"您输入字数超过40字"



    },

    "messageTitle":{

        "datatype":"len",

        "nullmsg":"",

        "errormsg":"您输入字数超过40字",

        "ignore":"ignore",

        "maxLen":"40",

        "lenmsg":"您输入字数超过40字"



    },

    "joinLocation":{

        "datatype":"len",

        "nullmsg":"",

        "errormsg":"您输入字数超过40字",

        "ignore":"ignore",

        "maxLen":"40",

        "lenmsg":"您输入字数超过40字"

    },

    "investorArea":{

        "datatype":"len",

        "nullmsg":"",

        "errormsg":"您输入字数超过40字",

        "ignore":"ignore",

        "maxLen":"40",

        "lenmsg":"您输入字数超过40字"



    },

    "visitorZipcode":{

        "datatype":"zip",

        "nullmsg":"",

        "errormsg":"请输入正确的邮政编码，为6位数字",

        "ignore":"ignore"



    },

    "visitorIcq":{

        "datatype":"qqmsn",

        "nullmsg":"",

        "errormsg":"请输入正确的QQ或者MSN号",

        "ignore":"ignore",

        "maxLen":"100",

        "lenmsg":"您输入的内容超过100字"



    },

    "visitorPhone":{

        "datatype":"tel",

        "nullmsg":"",

        "errormsg":"请输入正确的电话号码",

        "ignore":"ignore"



    },



    "investorMode":{

        "datatype":"",

        "nullmsg":"",

        "errormsg":"",

        "ignore":"ignore"



    },

    "investmentAmount":{

        "datatype":"",

        "nullmsg":"",

        "errormsg":"",

        "ignore":"ignore"



    },

    "visitorStatus":{

        "datatype":"",

        "nullmsg":"",

        "errormsg":"",

        "ignore":"ignore"



    },

    "visitedTime":{

        "datatype":"",

        "nullmsg":"",

        "errormsg":"",

        "ignore":"ignore"



    },



    "verifiCode":{

        "datatype":"",

        "nullmsg":"",

        "errormsg":"",

        "necessary":"necessary"



    },

    "messageContent":{

        "datatype":"msg",

        "nullmsg":"",

        "errormsg":"",

        "necessary":"necessary"

    }



};

var datatype = {

    "nickname":/^[\u4E00-\u9FA5\uf900-\ufa2d\w-]{1,12}$/,

    "phone":/^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|18[0-9]{9}$/,

    "email":/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,

    "zip":/^[0-9]{6}$/,

    "len":/.{1,40}/,

    "qq":/^[0-9]{5,15}$/,

    "tel":/^(0[0-9]{2,3})?([0-9]{7,8})?$/

    //"tel":/^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/

}



/**

 * 解析留言模板

 * @param res

 */

function getMsgBoardTemplet(res) {

    var msgTopic = '<div class="ui-msg"><h3>' + res.title + '</h3>' +

        '<h4>' + res.subTitle + '</h4></div>' +

        '<form class="ui-form" name="leaveMsg"  id="J_msgForm">' +



        '<fieldset><legend>leave message</legend>';



    var item = "<div class='ui-form-inner'><div class='ui-form-inner-box'>";

    for (var i = 0; i < res.messageFields.length; i++) {

        var paramName = res.messageFields[i].paramName;

        item += '<div class="ui-form-item"><p class="ui-form-explain"></p><div class="ui-form-item-border fn-clear">';

        if (res.messageFields[i].fieldType == "text") {

            item += '<label for="' + paramName + '"';

        } else {

            item += '<label';

        }

        item += ' class="ui-label">';

        if (res.messageFields[i].isRequired == 1) {

            item += '<em class="ui-form-required">*</em>';

        }

        item += res.messageFields[i].fieldName + '</label>';



        if (res.messageFields[i].fieldType == "text") {

            if (paramName == "messageTitle") {

                item += '<span class="ui-other-info">关于</span><input class="ui-input ui-input-text"';



            } else {

                item += '<input class="ui-input"';

            }

            if (validateRule[paramName].maxLen) {



                item += 'value="" type="' + res.messageFields[i].fieldType + '" id="' + paramName + '" maxLen="' + validateRule[paramName].maxLen + '" lenmsg="' + validateRule[paramName].lenmsg;

            } else {

                item += 'value="" type="' + res.messageFields[i].fieldType + '" id="' + paramName;



            }



            if (res.messageFields[i].isRequired == 1) {

                item += '" necessary="' + validateRule[paramName].necessary;

            }



            if (res.messageFields[i].isRequired == 0) {

                item += '" ignore="' + validateRule[paramName].ignore;

            }

            item += '" datatype="' + validateRule[paramName].datatype + '" nullmsg="' + validateRule[paramName].nullmsg + '" errormsg="' + validateRule[paramName].errormsg;

            item += '" name="' + paramName;

            if (paramName == "visitorZipcode") {

                item += '" maxlength= "6';

            }

            if (paramName == "visitorAddr" || paramName == "investorArea" || paramName == "joinLocation") {

                item += '" maxlength="41';

            }

            if (paramName == "messageTitle") {

                item += '" maxlength= "41';

            }

            item += '" /></div>';

        }

        if (res.messageFields[i].fieldType == "checkbox") {

            item += '<div class="ui-form-item-inner">';

            if (res.messageFields[i].messageFieldValues) {

                for (var k = 0; k < res.messageFields[i].messageFieldValues.length; k++) {

                    var chekcboxitem = res.messageFields[i].messageFieldValues[k].fieldValue;

                    item += '<input class="ui-checkbox" type="checkbox"  value="' + chekcboxitem + '"name="' + paramName + '" id="' + paramName + k + '" />';

                    item += '<label for="' + paramName + k + '" class="ui-checkbox-label">' + chekcboxitem + '</label>';

                }

            }

            item += '</div>';

        }

        if (res.messageFields[i].fieldType == "radio") {

            item += '<div class="ui-form-item-inner">';

            if (res.messageFields[i].messageFieldValues) {

                for (var l = 0; l < res.messageFields[i].messageFieldValues.length; l++) {

                    var radioitem = res.messageFields[i].messageFieldValues[l].fieldValue;

                    item += '<input class="ui-radio" type="radio" value="' + radioitem + '" name="' + paramName + '" id="' + paramName + l;

                    if (l == 1) {

                        item += '" checked="true';

                    }

                    item += '" />';

                    item += '<label for="' + paramName + l + '" class="ui-radio-label">' + radioitem + '</label>';

                }

            }

            item += '</div>';

        }

        if (res.messageFields[i].fieldType == "select") {

            item += '<div class="ui-form-item-inner">';

            item += '<select class="ui-select ui-select-amount" name="' + paramName + '">';

            if (res.messageFields[i].messageFieldValues) {

                for (var j = 0; j < res.messageFields[i].messageFieldValues.length; j++) {

                    var options = res.messageFields[i].messageFieldValues[j].fieldValue;

                    item += '<option value="' + options + '">' + options + '</option>';

                }

            }

            item += '</select> ';

            item += '</div>';

        }

        if (res.messageFields[i].fieldType == "textarea") {

            item += '<textarea class="ui-textarea" name="' + paramName + '" value="" id="' + paramName + '" necessary="' + validateRule[paramName].necessary + '"></textarea>';

            item += '<ul class="ui-list preinstall-msg" id="J_preinstallMsg">';

            if (res.messageTemplates) {

                for (var j = 0; j < res.messageTemplates.length; j++) {

                    var msgTem = res.messageTemplates[j].templateContent;

                    item += ' <li class="ui-list-item">' + msgTem + '</li>'

                }

            }

            item += '</ul>';

            if ($.browser.version == 6.0) {

                item += '<iframe id="J_iframeIe6" width="250" scrolling="no" frameborder="0" src="#" style="position:absolute;left:15px; z-index: -1; display:none;"></iframe>'

            }

        }

        item += '</div>';

    }

         item+='</div></div>';

    var formAction = '<div class="ui-form-item ui-form-last fn-clear">' +

        '<div class="ui-button ui-submit-btn" id="J_msgSubmit">提交留言</div>' +

        '<div class="ui-button ui-reset-btn fn-hide" id="J_msgReset" >reset</div>' +

        '<input type="reset" name="reset" class="fn-hide" value="reset" id="J_formReset" />' +

        '<div id="J_formLoading" class="ui-form-loading fn-hide">正在提交...</div>' +

        '<div id="J_formJump" class="ui-page-jump fn-hide">页面正在跳转...</div>' +

        '<div id="J_sysTip" class="ui-systip fn-hide">页面正在跳转</div>' +

        '</div>' +

        '</fieldset>' +

        '</form>';

    var html = msgTopic + item + formAction;

    $(html).appendTo($("#J_uiGrid"));

    $("#J_msgSubmit").hover(function(){

        $(this).addClass("ui-submit-btn-hover");

    },function(){

        $(this).removeClass("ui-submit-btn-hover");

    });

}





/**

 * 验证表单并提交表单

 * @param platfromCode

 */

function validateForm(platfromCode) {

    var msgForm = $("#J_msgForm");

    var preMsg = $("#J_preinstallMsg");

    var txtarea = $("#messageContent");

    // 提交

    $("#J_msgSubmit").bind("click", ajaxMsgSubmit);
    //重置表单
    $("#J_msgReset").bind("click", function () {
        $("#J_formReset").click();
    })
    /**
     * ajax 提交表单
     * @return {Boolean}
     */
    function ajaxMsgSubmit() {
        msgForm.find("[datatype]").trigger("blur");
        identMsg();
        var errLen = msgForm.find(".ui-input-error").length;
        if (errLen == 0) {
            ajaxSub();
        } else {
            return false;
        }
    }
    //提交
    function ajaxSub() {
        var formObj = serializeForm($("#J_msgForm").get(0), true);
        var proId=$("#projectId").val();
        $.ajax({
            type:"post",
            data:formObj,
            url:pageGvar.postUrl + platfromCode + '/add',
            beforeSend:function () {
                $("#J_msgSubmit").unbind("click");
            },
            success:function (dataMsg) {
                if(dataMsg.code==0){
                    $("#J_formJump").show();
                    var platForm = {
						"3GT":"http://m.shengyijie.net/newhome/success",
						"HTZCY":"http://hao.touzicy.com/leaveword/success",
                       	"875N":"http://xm.875.cn/project/gusebook/success?lwId="+dataMsg.msg+"&proId="+proId,
                        "875O":"http://www.875.cn/ajax_do/success",
                        "SYJ":"http://www.shengyijie.net/leaveword/success.html",
                        "YHH":"http://baidu.yehehe.com/gusebook/leaveword/success",
                        "GGCY":"http://baidu.gogocy.com/leaveword/success",
                        "TZCY":"http://www.touzicy.com/leaveword/success",
                        "GFC":"http://www.gofacai.com/leaveword/success",
                        "GTZ":"http://baidu.gotouzi.com/leaveword/success",
                        "TZG":"http://www.touzigo.com/leaveword/success",
                        "YHZ":"http://www.cyzhinan.com/projects/messageSuccess",
                        "3G875":"http://m.875.cn/home/success",
                        "3G875S":"http://m.875.cn/projects/success?vt=2",
					    "875VD":"http://video.875.cn/leaveword/success",
					    "3G":"http://m.shengyijie.net/home/leaveWordSuc",
                        "875FM":"http://xm.875.cn/project/gusebook/success?lwId="+dataMsg.msg+"&proId="+proId,
                        "3GGGCY":"http://m.gogocy.com/home/success",
                        "3GGFC":"http://m.gofacai.com/home/success",
                        "3GYHH":"http://m.yehehe.com/home/success",
                        "3GGTZ":"http://m.gotouzi.com/home/success",
                        "3GTZG":"http://m.touzigo.com/home/success",
                        "3GTZCY":"http://m.touzicy.com/home/success"
                    }
                    if (window.top != window.self) {
                        window.top.location.href = platForm[platfromCode];
                    }
                }else{
                    if(dataMsg.code==41){
                        $("#J_sysTip").show().text("您已提交过留言...");
                    }else{
                        $("#J_sysTip").show().text("系统错误，请稍后再试...");
                    }
                }
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {
                $("#J_formLoading").hide();
                var sysTips = "系统错误，请稍后再试"
                jAlert(sysTips, "系统提示", function () {
                    $("#J_msgReset").triggerHandler("click");
                })
            },
            complete:function (XHR, TS) {
                $("#J_msgSubmit").bind("click", ajaxMsgSubmit);
                $("#J_formJump").hide();
            }
        })
    }

    // 绑定失去焦点验证
    msgForm.find("[datatype]").live("blur", function () {
        var $this = $(this);
        var val = $this.val();
        var explain = $this.parent().siblings(".ui-form-explain");
        var rules = $this.attr("datatype");
        var nullmsg = $this.attr("nullmsg");
        var errormsg = $this.attr("errormsg");
        var lenmsg, maxLen;
        if ($(this).attr("lenmsg")) {
            lenmsg = $(this).attr("lenmsg");
        }
        if ($this.attr("maxlen")) {
            maxLen = $this.attr("maxlen");
        }
        switch (rules) {
            case "nickname":
                if ($this.attr("necessary") && val == "") {
                    $(this).addClass("ui-input-error");
                    explain.addClass("ui-explain-error").text(nullmsg);
                    return false;
                }
                if (datatype.nickname.test(val)) {
                    regsus();
                } else {
                    regerr();
                }
                break;
            case "phone":
                if ($this.attr("necessary") && val == "") {
                    $(this).addClass("ui-input-error");
                    explain.addClass("ui-explain-error").text(nullmsg);
                    return false;
                }
                if (datatype.phone.test(val)) {
                    regsus();
                } else {
                    regerr();
                }
                break;
            case "email":
                if (val != "") {
                    if (datatype.email.test(val)) {
                        regsus();
                        valMaxLen();
                    } else {
                        regerr();
                    }
                } else {
                    regsus();
                }
                break;
            case "zip":
                if (val != "") {
                    if (datatype.zip.test(val)) {
                        regsus();
                    } else {
                        regerr();
                    }
                } else {
                    regsus();
                }
                break;
            case "len":
                if (val != "") {
                    if (datatype.len.test(val)) {
                        regsus();
                        valMaxLen();
                    } else {
                        regerr();
                    }
                } else {
                    regsus();
                }
                break;
            case "qqmsn":
                if (val != "") {
                    if (datatype.qq.test(val) || datatype.email.test(val)) {
                        regsus();
                        valMaxLen();
                    } else {
                        regerr();
                    }
                } else {
                    regsus();
                }
                break;

            case "tel":

                if (val != "") {

                    if (datatype.tel.test(val)) {

                        if (val.length == 7 || val.length == 8 || val.length == 11) {

                            regsus();

                        } else {

                            regerr();

                        }

                    } else {

                        regerr();

                    }

                } else {

                    regsus();

                }

                break;

            default:

                return false;

        }

        function regsus() {

            $this.removeClass("ui-input-error");

            explain.removeClass("ui-explain-error").text("");

            return true;

        }



        function regerr() {

            $this.addClass("ui-input-error");

            explain.addClass("ui-explain-error").text(errormsg);

            return false;

        }



        function valMaxLen() {

            if (val.length > maxLen) {

                $this.addClass("ui-input-error");

                explain.addClass("ui-explain-error").text(lenmsg);

                return false;

            }

        }

    })



    /**

     * 对留言特别处理

     * @return {Boolean}

     */

    function identMsg() {

        var textareaMsg = $("#messageContent");

        var valMsg = $.trim(textareaMsg.val());

        if (valMsg == "") {

            textareaMsg.addClass("ui-input-error");

            textareaMsg.parents(".ui-form-item-border ").siblings(".ui-form-explain").addClass("ui-explain-error").text("留言内容不能为空");

            return false;

        } else {

            var reg = /[\s\S]*/;

            var msgLen = valMsg.length;

            if (reg.test(valMsg)) {

                if (msgLen <= 200) {

                    textareaMsg.removeClass("ui-input-error");

                    textareaMsg.parents(".ui-form-item-border ").siblings(".ui-form-explain").removeClass("ui-explain-error").text("");

                } else {

                    textareaMsg.addClass("ui-input-error");

                    textareaMsg.parents(".ui-form-item-border ").siblings(".ui-form-explain").addClass("ui-explain-error").text("您输入的内容超过200字");

                    return false;

                }

            }

        }

    }



    $("#messageContent").bind("focus", function() {

        $(this).removeClass("ui-input-error");

        $(this).parents(".ui-form-item-border ").siblings(".ui-form-explain").removeClass("ui-explain-error").text("");

    });

    //处理预设留言模板,点击隐藏与显示

    $(document).click(function (event) {

        if (event.target.nodeName == "TEXTAREA") {

            var msgHeight = preMsg.outerHeight();

            preMsg.css({"top":-msgHeight+20}).show();

        } else {

            preMsg.hide();

        }

    })

    // 用户输入时隐藏预设留言

    txtarea.keydown(function () {

        preMsg.hide();

    })

    // 获取点击的预设留言

    $(".ui-list-item").live("click", function () {

        var msgcnt = txtarea.val();

        var txt = $(this).text();

        if (msgcnt.indexOf(txt) > -1) {

            preMsg.hide();

            return false;

        }



        msgcnt = txt;

        txtarea.val(msgcnt);

        preMsg.hide();

        identMsg();

    })

    $(".ui-list-item").hover(function () {

        $(this).css({"background-color":"#f0ab00"});

    }, function () {

        $(this).css({"background-color":"#eeeeee"});

    });

}



/**

 * 模拟"确认"对话框

 * @param sContent

 * @param sTitle

 * @param callBack

 */

function jAlert(sContent, sTitle, callBack) {

    var layer = "<div id='alert-layer'></div>" +

        "<div id='alert-container'><div class='alert-box'><div id='alert-title'>" + sTitle + "<div id='alert-close' title='Close'></div></div><div id='alert-content'>" + sContent + "</div><div class='alert-button'><button id='alert-button'>确认</button></div></div></div>";

    $(layer).appendTo("body");

    var bcw = document.documentElement.clientWidth,

        bch = document.documentElement.clientHeight,

        bsh = document.documentElement.scrollHeight,

        aw = $("#alert-container").width(),

        ah = $("#alert-container").height();

    if ($.browser.msie) {

        if ($.browser.version == 6.0) {

            $("#alert-layer").css("height", bsh - 129);

        }

    } else {

        $("#alert-layer").css("height", bsh);

    }



    $("#alert-container").css({

        "top":(bch - ah) / 2,

        "left":(bcw - aw) / 2

    });

    $("#alert-button").bind("click", function () {

        $("#alert-container").remove();

        $("#alert-layer").remove();

        if (callBack) {

            callBack();

        }

    })

}



function serializeForm(form,flag){

    var isBase64 = flag;

    if (!form || form.nodeName !== "FORM") {

        return;

    }

    var i, j, q = [];

    for (i = form.elements.length - 1; i >= 0; i = i - 1) {

        if (form.elements[i].name === "") {

            continue;

        }

        switch (form.elements[i].nodeName) {

            case 'INPUT':

                switch (form.elements[i].type) {

                    case 'text':

                    case 'hidden':

                    case 'password':

                        if (isBase64) {

                            q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].value)));

                        }else {

                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));

                        }



                        break;

                    case 'button':

                    case 'reset':

                    case 'submit':

                        break;

                    case 'checkbox':

                    case 'radio':

                        if (form.elements[i].checked) {

                            if (isBase64) {

                                q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].value)));

                            }else {

                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));

                            }

                        }

                        break;

                    case 'file':

                        break;

                }

                break;

            case 'TEXTAREA':

                if (isBase64) {

                    q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].value)));

                } else {

                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));

                }

                break;

            case 'SELECT':

                switch (form.elements[i].type) {

                    case 'select-one':

                        if (isBase64) {

                            q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].value)));

                        } else {

                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));

                        }



                        break;

                    case 'select-multiple':

                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {

                            if (form.elements[i].options[j].selected) {



                                if(isBase64){

                                    q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].options[j].value)));

                                } else{

                                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));

                                }

                            }

                        }

                        break;

                }

                break;

            case 'BUTTON':

                switch (form.elements[i].type) {

                    case 'reset':

                    case 'submit':

                    case 'button':

                        break;

                }

                break;

        }

    }

    return q.join("&");

}



function encoded(input) {

    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    var output = "";

    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;

    var i = 0;

    input = _utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);

        chr2 = input.charCodeAt(i++);

        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;

        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);

        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);

        enc4 = chr3 & 63;

        if (isNaN(chr2)) {

            enc3 = enc4 = 64;

        } else if (isNaN(chr3)) {

            enc4 = 64;

        }

        output = output +

            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +

            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

    }

    return output;

}



function _utf8_encode(string) {

    string = string.replace(/\r\n/g, "\n");

    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {

            utftext += String.fromCharCode(c);

        } else if ((c > 127) && (c < 2048)) {

            utftext += String.fromCharCode((c >> 6) | 192);

            utftext += String.fromCharCode((c & 63) | 128);

        } else {

            utftext += String.fromCharCode((c >> 12) | 224);

            utftext += String.fromCharCode(((c >> 6) & 63) | 128);

            utftext += String.fromCharCode((c & 63) | 128);

        }



    }

    return utftext;

}

