function checkForm(flag) {

    if (document.getElementById("text_trueName2").value == "请输入姓名") {
        alert('请输入您的真实中文姓名');
        document.getElementById("text_trueName2").focus();
        return false;
    }

    if (document.getElementById('text_trueName2').value == "") {
        alert('请输入您的中文姓名');
        document.getElementById('text_trueName2').focus();
        return false;
    }
    if (!isChineseSrting(document.getElementById('text_trueName2').value)) {
        alert('姓名必须为中文！');
        document.getElementById('text_trueName2').focus();
        return false;
    }

    if (document.getElementById('text_trueName2').value.length > 4) {
        alert('姓名字数在1～4内');
        document.getElementById('text_trueName2').focus();
        return false;
    }

    if (document.getElementById('text_mobile2').value == "请输入手机") {
        alert('手机不能为空！');
        document.getElementById('text_mobile2').focus();
        return false;
    }

    if (document.getElementById('text_mobile2').value == "" || document.getElementById('text_mobile2').value == "请输入手机") {
        alert('手机不能为空！');
        document.getElementById('text_mobile2').focus();
        return false;
    }

    if (document.getElementById('text_mobile2').value.length != 11) {
        alert('手机为11位数字！');
        document.getElementById('text_mobile2').focus();
        return false;
    }

    var Letters = "0123456789０１２３４５６７８９"; // 手机格式判断
    for (i = 0; i < document.getElementById('text_mobile2').value.length; i++) {
        var CheckChar = document.getElementById('text_mobile2').value.charAt(i);
        if (Letters.indexOf(CheckChar) == -1) {
            alert("手机格式不对！");
            document.getElementById('text_mobile2').focus();
            return false;
        }
    }

    if ((document.getElementById('text_content2').value == "")) {
        alert('留言内容不能为空！');
        document.getElementById('text_content2').focus();
        return false;
    }
    if (document.getElementById('text_content2').value.length > 300) {
        alert('留言内容不能大于300个字符！');
        document.getElementById('text_content2').focus();
        return false;
	}

    return true;
}
function checkName() {

    if (document.getElementById("text_trueName2").value == "请输入姓名") {
        document.getElementById('nameok').innerHTML = '<img src="images/error.jpg">';
        return false;
    }

    if (document.getElementById('text_trueName2').value == "") {
        document.getElementById('nameok').innerHTML = '<img src="images/error.jpg">';
        return false;
    }
    if (!isChineseSrting(document.getElementById('text_trueName2').value)) {
        document.getElementById('nameok').innerHTML = '<img src="images/error.jpg">';
        return false;
    }

    if (document.getElementById('text_trueName2').value.length > 4) {
        document.getElementById('nameok').innerHTML = '<img src="images/error.jpg">';
        return false;
    }
    document.getElementById('nameok').innerHTML = '<img src="images/ok.jpg">';
}

function checkTel() {

    if (document.getElementById('text_mobile2').value == "请输入手机") {
        document.getElementById('telok').innerHTML = '<img src="images/error.jpg">';
        return false;
    }

    if (document.getElementById('text_mobile2').value == "" || document.getElementById('text_mobile2').value == "请输入手机") {
        document.getElementById('telok').innerHTML = '<img src="images/error.jpg">';
        return false;
    }

    if (document.getElementById('text_mobile2').value.length != 11) {
        document.getElementById('telok').innerHTML = '<img src="images/error.jpg">';
        return false;
    }

    var Letters = "0123456789０１２３４５６７８９"; // 手机格式判断
    for (i = 0; i < document.getElementById('text_mobile2').value.length; i++) {
        var CheckChar = document.getElementById('text_mobile2').value.charAt(i);
        if (Letters.indexOf(CheckChar) == -1) {
            document.getElementById('telok').innerHTML = '<img src="images/error.jpg">';
            return false;
        }
    }

    document.getElementById('telok').innerHTML = '<img src="images/ok.jpg">';
}

function checkFormTop(flag) {

    if (document.getElementById("text_trueName").value == "请输入姓名") {
        alert('请输入您的真实中文姓名');
        document.getElementById("text_trueName").focus();
        return false;
    }

    if (document.getElementById('text_trueName').value == "") {
        alert('请输入您的中文姓名');
        document.getElementById('text_trueName').focus();
        return false;
    }
    if (!isChineseSrting(document.getElementById('text_trueName').value)) {
        alert('姓名必须为中文！');
        document.getElementById('text_trueName').focus();
        return false;
    }

    if (document.getElementById('text_trueName').value.length > 4) {
        alert('姓名字数在1～4内');
        document.getElementById('text_trueName').focus();
        return false;
    }

    if (document.getElementById('text_mobile').value == "请输入手机") {
        alert('手机不能为空！');
        document.getElementById('text_mobile').focus();
        return false;
    }

    if (document.getElementById('text_mobile').value == "" || document.getElementById('text_mobile').value == "请输入手机") {
        alert('手机不能为空！');
        document.getElementById('text_mobile').focus();
        return false;
    }

    if (document.getElementById('text_mobile').value.length != 11) {
        alert('手机为11位数字！');
        document.getElementById('text_mobile').focus();
        return false;
    }

    var Letters = "0123456789０１２３４５６７８９"; // 手机格式判断
    for (i = 0; i < document.getElementById('text_mobile').value.length; i++) {
        var CheckChar = document.getElementById('text_mobile').value.charAt(i);
        if (Letters.indexOf(CheckChar) == -1) {
            alert("手机格式不对！");
            document.getElementById('text_mobile').focus();
            return false;
        }
    }

    if ((document.getElementById('text_content').value == "")) {
        alert('留言内容不能为空！');
        document.getElementById('text_content').focus();
        return false;
    }
    if (document.getElementById('text_content').value.length > 300) {
        alert('留言内容不能大于300个字符！');
        document.getElementById('text_content').focus();
        return false;
    }

    return true;
}

function sel(theinput) {
    if (document.getElementById("text_content2").value != "") document.getElementById("text_content2").value += "\n" + theinput
    else document.getElementById("text_content2").value = theinput
}
function sel2(theinput) {
    if (document.getElementById("text_content2").value != "") document.getElementById("text_content2").value += "\n" + theinput
    else document.getElementById("text_content2").value = theinput
}
function clrTA(obj, str) {
    if (obj.value == str) {
        obj.value = "";
        obj.className = 'op';
    } else obj.className = 'op';
}
function inTA(obj, str, f) {
    if (f == true || (f == null && obj.value == "")) {
        obj.value = str;
        obj.className = 'op';
    } else obj.className = 'op';
} //判断是否全部是中文字符，是的话，返回true, or false;
function isChineseSrting(s) {
    for (var i = 0; i < s.length; i++) {
        //判断是否为中文
        var c = s.charCodeAt(i);
        if (c < 0X4E00 || c > 0X9FA5) return false;
    }
    return true;
}

function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return document.cookie.substring(offset, endstr);
}

function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    var j = 0;
    while (i < clen) {
        j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i === 0) {
            break;
        }
    }
    return '';
}
var sTureName = decodeURIComponent(getCookie('sTrueName'));
if (sTureName == '') {
    sTureName = '请输入姓名';
}
var stelephone = decodeURIComponent(getCookie('stelephone'));
if (stelephone == '') {
    stelephone = '请输入手机';
}
var smobile = decodeURIComponent(getCookie('smobile'));
if (smobile == '') {
    smobile = '请输入手机';
}

document.getElementById("text_trueName2").value = sTureName;
document.getElementById("text_mobile2").value = stelephone;
document.getElementById("text_address2").value = decodeURIComponent(getCookie('saddress'));
document.getElementById("text_telephone2").value = '';
document.getElementById("text_trueName").value = sTureName;
document.getElementById("text_mobile").value = stelephone;