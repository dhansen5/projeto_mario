const botaoTrailer = document.querySelector(".botao-trailer"); // Seleciona a class botao-trailer
const botaoFecharModal = document.querySelector(".fechar-modal"); // Seleciona a class fechar-modal
const video = document.getElementById("video"); // Seleciona elemento pelo id "video"
const modal = document.querySelector(".modal"); // Seleciona a class modal
const linkDoVideo = video.src; // Seleciona a propriedade "src" do elemento com id "video"

function alternarModal() {
  modal.classList.toggle("aberto"); // Adiciona ou remove "aberto" da clas "modal" Ex: Modal -> modal aberto / modal aberto -> modal
}

botaoTrailer.addEventListener("click", () => {
  //  Quando o botaoTrailer receber um "click", executa:
  alternarModal(); //  a função alternarModal();
  video.setAttribute("src", linkDoVideo); //  seta o valor do atributo "src" com o valor de "linkDoVideo"
});

botaoFecharModal.addEventListener("click", () => {
  // Quando o botaoFecharModal receber um "click", executa:
  alternarModal(); // a função alternarModal();
  video.setAttribute("src", ""); // seta o valor do atributo "src" para "vazio"
});
