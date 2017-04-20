(function() {
  var main = document.querySelector("main")
  var loader = document.getElementById("intro_loader")
  var loaderCta = document.getElementById("loader_cta")
  var loaderCont = document.querySelector("#intro_loader .cont")
  var imgs = document.getElementsByTagName("img")
  var loaded = 0

  var initEnter = function() {
    loader.className += " ready"
    loader_cta.textContent = "ENTER"
    loaderCont.addEventListener("click", function() {
      loader.style.display = "none"
      main.className += " active"
    })
  }

  for (var i = 0; i < imgs.length; i++) {
    var img = new Image()
    img.onload = function() {
      loaded++
      if (loaded === imgs.length) {
        initEnter()
      }
    }
    img.src = imgs[i].src
  }

})()
