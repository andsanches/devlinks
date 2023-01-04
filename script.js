function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpeg")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito de óculos, sorrindo, com fundo azul e rosa"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.jpeg")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, com fundo azul e rosa"
    )
  }
}
