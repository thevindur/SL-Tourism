var fontSize;
function variationFontSize(){
    var changes = document.getElementById("fontSizeValue").value;
    var contentChange = document.getElementById("sellingGoods");
    contentChange.style.fontSize = changes+"px";
    fontSize = changes;
    document.getElementById("sizeValue").innerHTML =fontSize;
    
    
}