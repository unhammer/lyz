function onLoad() {
    document.getElementById("lyxserver").value = window.arguments[0].inn.lyxserver;
    document.getElementById("citekey").value = window.arguments[0].inn.citekey;

    var translators = window.arguments[0].inn.translators;
    
    var formatMenu = document.getElementById("format-menu");
    var formatPopup = document.getElementById("format-popup");

    // add styles to format popup
    var index = 0;
    for(var t in translators) {
	if(translators[t].target == "bib") {
    	    var itemNode = document.createElement("menuitem");
    	    itemNode.setAttribute("label", translators[t].label);
    	    formatPopup.appendChild(itemNode);
	    
	    // select last selected translator
	    if(translators[t].translatorID == window.arguments[0].inn.selectedTranslator) {
		formatMenu.selectedIndex = index;
	    }
	    if(translators[t].translatorID == '9cb70025-a888-4a29-a210-93ec52da40d4') {
		defaultIndex = index; // plain BibTeX
	    }
	    index++;
	}
    }
    // select plain BibTeX as default:
    if(formatMenu.selectedIndex == -1) {
	formatMenu.selectedIndex = defaultIndex;
    }
}

function onOK() {
    var index = document.getElementById("format-menu").selectedIndex;
    window.arguments[0].out = {lyxserver:document.getElementById("lyxserver").value,
			       citekey:document.getElementById("citekey").value,
			       selectedTranslator:window.arguments[0].inn.translators[index].translatorID};
    return true;
}
