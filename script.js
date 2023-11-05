function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#Profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Cosmic Dark Lux.png")
  } else {
    img.setAttribute("src", "./assets/Cosmic Lux.png")
  }
}
