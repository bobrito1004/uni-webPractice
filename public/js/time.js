var curTime = new Date().getTime();
var loadTime = (new Date()).getTime() - curTime;
var footer = document.getElementsByTagName("footer");
var tag;
var responcetime;
window.addEventListener("load", function() {
  tag = document.getElementById("servertime");
  responcetime = tag.textContent;
  tag.textContent = "Load time: " + loadTime + "ms, server: " + responcetime;
});
// var el = document.createElement("div").appendChild(document.createElement("p").appendChild(document.createTextNode("Load time: " + loadTime + "ms, server: "+ responcetime)))
// footer[0].appendChild(el);