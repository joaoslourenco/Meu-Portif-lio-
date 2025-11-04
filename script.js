function mascara_telefone(){

    var tel = document.getElementById("telefone").value

    if (tel[0] != "(") {
        if (tel[0] != undefined){
            document.getElementById("telefone").value = "(" + tel[0]
        }
    }

    if (tel[3] != ")") {
        if (tel[3] != undefined) {
            document.getElementById("telefone").value = tel.slice(0,3) + ") " + tel[3]
        }
    }

    if (tel[4] != " ") {
        if (tel[4] != undefined) {
            document.getElementById("telefone").value = tel.slice(0,4) + " " + tel[4]
        }
    }

    if (tel[6] != " ") {
        if (tel[6] != undefined) {
            document.getElementById("telefone").value = tel.slice(0,6) + " " + tel[6]
        }
    }

    if (tel[11] != "-") {
        if (tel[11] != undefined) {
            document.getElementById("telefone").value = tel.slice(0,11) + "-" + tel[11]
        }
    }

}


function configurarModal(botaoAbrirId, modalId, botaoFecharId) {
  const btnAbrir = document.getElementById(botaoAbrirId);
  const modal = document.getElementById(modalId);
  const btnFechar = document.getElementById(botaoFecharId);

  if (btnAbrir && modal && btnFechar) {
    btnAbrir.addEventListener("click", () => {
      modal.showModal();
      document.body.style.overflow = "hidden";
    });

    btnFechar.addEventListener("click", () => {
      modal.close();
      document.body.style.overflow = "";
    });
  }
}

configurarModal("abrirModal1", "modal1", "fecharModal1");
configurarModal("abrirModal2", "modal2", "fecharModal2");
configurarModal("abrirModal3", "modal3", "fecharModal3");
configurarModal("abrirModal4", "modal4", "fecharModal4");



const meuToggle = document.getElementById("checkbox");

meuToggle.addEventListener('change', () => {
    document.documentElement.classList.toggle('darkmode');});