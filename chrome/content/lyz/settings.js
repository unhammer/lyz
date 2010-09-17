function onLoad() {
    document.getElementById("lyxserver").value = window.arguments[0].inn.lyxserver;
    document.getElementById("citekey").value = window.arguments[0].inn.citekey;
    document.getElementById("translator").value = window.arguments[0].inn.translator;
}

function onOK() {
    window.arguments[0].out = {lyxserver:document.getElementById("lyxserver").value,
			       citekey:document.getElementById("citekey").value,
			       translator:document.getElementById("translator").value};
    return true;
}
