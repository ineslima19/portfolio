
/* =====================================
   LIGHTBOX - EDITORIAL E DESIGN GRÁFICO
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");
    const lightboxImagem = document.getElementById("lightbox-imagem");
    const botaoFechar = document.querySelector(".lightbox-fechar");

    const imagens = document.querySelectorAll(
        ".editorial-gallery img, .design-gallery img"
    );

    if (!lightbox || !lightboxImagem || !botaoFechar) return;

    let imagemAnteriormenteFocada = null;

    // ABRIR IMAGEM
    imagens.forEach((imagem) => {

        imagem.setAttribute("tabindex", "0");
        imagem.setAttribute("role", "button");
        imagem.setAttribute("aria-label",
            "Ampliar " + (imagem.alt || "imagem")
        );

        function abrirImagem() {
            imagemAnteriormenteFocada = imagem;
            lightboxImagem.src = imagem.currentSrc || imagem.src;
            lightboxImagem.alt = imagem.alt;

            lightbox.classList.add("ativo");
            document.body.style.overflow = "hidden";
            botaoFechar.focus();
        }

        imagem.addEventListener("click", abrirImagem);

        imagem.addEventListener("keydown", (evento) => {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                abrirImagem();
            }
        });
    });

    // FECHAR IMAGEM
    function fecharImagem() {
        lightbox.classList.remove("ativo");
        lightboxImagem.removeAttribute("src");
        document.body.style.overflow = "";

        if (imagemAnteriormenteFocada) {
            imagemAnteriormenteFocada.focus();
        }
    }

    botaoFechar.addEventListener("click", fecharImagem);

    // FECHAR AO CLICAR FORA DA IMAGEM
    lightbox.addEventListener("click", (evento) => {
        if (evento.target === lightbox) {
            fecharImagem();
        }
    });

    // FECHAR COM ESC
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" &&
            lightbox.classList.contains("ativo")) {
            fecharImagem();
        }
    });

});
