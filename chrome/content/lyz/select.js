function onLoad() {
    var dic = window.arguments[0].inn.items;
    var type = window.arguments[0].inn.type;
    for (var i=0;i<dic.length;i++){
	document.getElementById("lyz-listbox").appendItem(dic[i][type],dic[i][type]);
    }
}

function onOK() {
    window.arguments[0].out = {item:document.getElementById("lyz-listbox").value};
    return true;
}

function onCancel() {
    window.arguments[0].out = null;
    return true;
}
