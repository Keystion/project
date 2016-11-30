/// <reference path="jquery-1.3.2-vsdoc2.js" />

$(document).ready(function() {
    $("#selProvince").change(function() {
        FillAddress("#selCity", $("#selProvince").val(), "2");
        if ($("#selProvince").get(0).selectedIndex != 0) {
            $("#txtAddress").val($("#selProvince").find("option:selected").text());
        }
        else {
            $("#txtAddress").val("");
        }
    });

    $("#selCity").change(function() {
        FillAddress("#selXian", $("#selCity").val(), "3");
        var province = $("#selProvince").find("option:selected").text();
        var city = $("#selCity").find("option:selected").text();

        if ($("#selCity").get(0).selectedIndex != 0) {
            $("#txtAddress").val(province + city);
        }
        else {
            $("#txtAddress").val(province);
        }
        if (city == "市辖区" || city == "县" || city == "市") {
            $("#txtAddress").val(province);
        }
    });

    $("#selXian").change(function() {
        var province = $("#selProvince").find("option:selected").text();
        var city = $("#selCity").find("option:selected").text();
        var xian = $("#selXian").find("option:selected").text();
        if ($("#selXian").get(0).selectedIndex != 0) {
            $("#txtAddress").val(province + city + xian);
        }
        else {
            $("#txtAddress").val(province + city);
        }
        if (city == "市辖区" || city == "县" || city == "市") {
            $("#txtAddress").val(province + xian);
        }
    });
    
    
});


function FillAddress(drpName, rootId, type) {

    var addName;
    $(drpName).empty();
    var option = "<option value='0'>---请选择---</option>";

    if (rootId != "0") {
        $(option).appendTo(drpName);
        $.each(areaArr, function(i, n) {
            if (n.ssid == rootId) {
                addName = n.name.replace("自治区", "");
                addName = addName.replace("特别行政区", "");
                addName = addName.replace("壮族", "");
                addName = addName.replace("回族", "");
                addName = addName.replace("维吾尔", "");
                var option = "<option value='" + n.id + "'>" + addName + "</option>";
                $(option).appendTo(drpName);
            }
        });
    }
    else {
        $(option).appendTo("#selCity");
    }

    InitialSelect(type);
}

function InitialSelect(type) {
    var option = "<option value='0'>---请选择---</option>";
    if (type == 1) {
        $("#selCity").empty();
        $(option).appendTo("#selCity");
        $("#selXian").empty();
        $(option).appendTo("#selXian");
        return;
    }
    if (type == 2) {
        $("#selXian").empty();
        $(option).appendTo("#selXian");
        return;
    }
}