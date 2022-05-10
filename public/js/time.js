const curTime = new Date().getTime();
window.addEventListener("load", function() {
  let tag = document.getElementById("servertime");
  let responseTime = tag.textContent;
  const loadTime = (new Date()).getTime() - curTime;
  tag.textContent = "Load time: " + loadTime + "ms, server: " + responseTime;
});
// var el = document.createElement("div").appendChild(document.createElement("p").appendChild(document.createTextNode("Load time: " + loadTime + "ms, server: "+ responcetime)))
// footer[0].appendChild(el);