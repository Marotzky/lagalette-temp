let currentSlide = 0;
const slides = [
    { 
        image: "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/CAPA_CLINICA.png", 
        title: "INAUGURAÇÃO CLÍNICA BEATRIZ VILELA", 
        thumbnails: [
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/1.jpg",
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/2_ILHA_DE_FINGER_FOOD_&_BRIE_QUENTE.jpg",
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/3_BRIE_EM_MASSA_FILO_AO_MEL_E_NUTS.jpg",
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/4_FINGER_FOODS.jpg",
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/4_FINGER_FOODS.jpg",
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/5_ILHA_GASTRONÔMICA.jpg",
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/6_QUEIJOS_E_FRIOS_&_BURRATAS_COM_TOMATINHOS.jpg",
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/7_ARRANJO_DE_QUEIJOS_&_FRIOS.jpg",
            "assets/img/eventos/EVENTOS_INAUGURAÇÃO_CLÍNICA_BEATRIZ_VILELA/8_BUCHETTE_DE_CHEVRE_COM_GELEIA_DE_PIMENTA.jpg"
        ]
    },

    { 
        image: "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/CAPA_CASAMENTO_NO_CAMPO.png", 
        title: "CASAMENTO NO CAMPO", 
        thumbnails: [
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/1_CASAMENTO_NO_CAMPO.jpg",
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/2_CASAMENTO_NO_CAMPO.jpg",
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/3_CASAMENTO_NO_CAMPO.jpg",
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/4_CASAMENTO_NO_CAMPO.jpg",
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/5_CASAMENTO_NO_CAMPO.jpg",
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/6_CASAMENTO_NO_CAMPO.jpg",
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/7_CASAMENTO_NO_CAMPO.jpg",
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/8_CASAMENTO_NO_CAMPO.jpg",
            "assets/img/eventos/EVENTOS_CASAMENTO_NO_CAMPO/9_CASAMENTO_NO_CAMPO.jpg"
        ]
    },

    { 
        image: "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/CAPA_POLISHOP_COFFEES.png", 
        title: "POLISHOP COFFEES", 
        thumbnails: [
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/1_COFFEE_DA_MANHA.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/2_COFFEE_DA_MANHÃ.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/3_COFFEE_DA_MANHA.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/4_COFFEE_DA_TARDE.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/5_COFFEE_DA_TARDE.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/6_COFFEE_DA_TARDE.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/7_COFFEE_DA_TARDE.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/8_SUCO_DE_MELANCIA_&_AGUA_AROMATIZADA_KIWI_E_LIMAO_SICILIANO.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_COFFEES/9_SUCO_DE_LARANJA_&_AGUA_AROMATIZADA_DUO_DE_LIMOES_E_HORTELA.jpg"
        ]
    },

    { 
        image: "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/CAPA_POLOSHOP_ALMOÇO.png", 
        title: "POLISHOP ALMOÇOS", 
        thumbnails: [
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/1_ILHA_DE_ALMOÇO.jpg",
            { src: "assets/video/2_EVENTO_POLISHOP.mp4", thumbnail: "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/2_EVENTO_POLISHOP_thumbnail.png" },
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/3_ENTRADINHAS.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/4_ENTRADINHAS.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/5_PRATOS_QUENTES.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/6_ENTRADINHAS.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/7_ENTRADINHAS.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/8_PRATOS_QUENTES.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/9 _SROBREMESA.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/10_ENTRADINHAS_E_SALADA.jpg",
            "assets/img/eventos/EVENTOS_POLISHOP_ALMOÇOS/11_PRATOS_QUENTES.jpg"
        ]
    },

    { 
        image: "assets/img/eventos/EVENTOS_COFFEE_EM_ROSA_RICHMOND_SOLUTION/CAPA_COFFEE_EM_ROSA_RICHMOND_SOLUTION.png", 
        title: "COFFEE EM ROSA RICHMOND SOLUTION", 
        thumbnails: [
            "assets/img/eventos/EVENTOS_COFFEE_EM_ROSA_RICHMOND_SOLUTION/1_CUP_CAKES_&_DONUTS.jpg",
            { src: "assets/video/2_VÍDEO_EVENTO_ROSA.mp4", thumbnail: "assets/img/eventos/EVENTOS_COFFEE_EM_ROSA_RICHMOND_SOLUTION/2_VÍDEO_EVENTO_ROSA_thumbnail.jpg" },
            "assets/img/eventos/EVENTOS_COFFEE_EM_ROSA_RICHMOND_SOLUTION/3_ILHA_DE_GOSTOSURAS.jpg",
            "assets/img/eventos/EVENTOS_COFFEE_EM_ROSA_RICHMOND_SOLUTION/4_SALADINHAS_DE_FRUTAS.jpg",
            "assets/img/eventos/EVENTOS_COFFEE_EM_ROSA_RICHMOND_SOLUTION/5_MINI_SANDUICHE.jpg",
            "assets/img/eventos/EVENTOS_COFFEE_EM_ROSA_RICHMOND_SOLUTION/6_VERRINES_DE_BRIGADEIRO_&_CUP_CAKES.jpg",
            "assets/img/eventos/EVENTOS_COFFEE_EM_ROSA_RICHMOND_SOLUTION/7_BEBIDAS.jpg"
        ]
    },

    { 
        image: "assets/img/eventos/EVENTOS_BV/CAPA_CHOPP_GERMÂNIA.png", 
        title: "BANCO VOTORANTIM", 
        thumbnails: [
            "assets/img/eventos/EVENTOS_BV/1_ILHA_DE_FINGER_FOODS.jpg",
            "assets/img/eventos/EVENTOS_BV/2_VERRINE_TABULE_&_BRIE_COM_DAMASCO_E_AMÊNDOAS.jpg",
            "assets/img/eventos/EVENTOS_BV/3_COCKTAIL_DE FINGER_FOODS.jpg",
            "assets/img/eventos/EVENTOS_BV/4_COCKTAIL_DE FINGER_FOODS.jpg",
            "assets/img/eventos/EVENTOS_BV/5_COCKTAIL_DE FINGER_FOODS.jpg",
            "assets/img/eventos/EVENTOS_BV/6_COCKTAIL_DE FINGER_FOODS.jpg",
            "assets/img/eventos/EVENTOS_BV/7_EVENTO_LGBT.jpg",
            "assets/img/eventos/EVENTOS_BV/8_EVENTO_LGBT.png",
            "assets/img/eventos/EVENTOS_BV/9_FESTA_JUNINA.jpg",
            "assets/img/eventos/EVENTOS_BV/10_FESTA_JUNINA.jpg"
        ]
    },


];

function updateThumbnails() {
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');
    thumbnailGallery.innerHTML = '';  // Limpa a galeria atual

    slides[currentSlide].thumbnails.forEach(thumbnail => {
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('thumbnail');

        if (typeof thumbnail === 'object' && thumbnail.src) {
            // Define a imagem de miniatura específica para o vídeo
            const videoThumbnail = document.createElement('img');
            videoThumbnail.src = thumbnail.thumbnail;
            thumbnailDiv.onclick = function() { openModalVideo(thumbnail.src); };
            thumbnailDiv.appendChild(videoThumbnail);

        } else {
            // Caso seja imagem normal
            thumbnailDiv.onclick = function() { openModal(thumbnail); };

            const thumbnailImg = document.createElement('img');
            thumbnailImg.src = thumbnail;
            thumbnailDiv.appendChild(thumbnailImg);
        }

        thumbnailGallery.appendChild(thumbnailDiv);
    });
}


function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var modalVideo = document.getElementById("modalVideo");

    modal.style.display = "block";
    
    // Esconde o vídeo e exibe a imagem
    modalVideo.style.display = "none";
    modalImg.style.display = "block";
    modalImg.src = imageSrc;
}

function openModalVideo(videoSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var modalVideo = document.getElementById("modalVideo");

    modal.style.display = "block";
    
    // Esconde a imagem e exibe o vídeo
    modalImg.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.src = videoSrc;
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const eventImage = document.querySelector('.event-image');
    const eventTitle = document.querySelector('.event-title');
    
    eventImage.src = slides[currentSlide].image;
    eventTitle.textContent = slides[currentSlide].title;

    updateThumbnails();
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.getElementById("modalVideo").pause();  
    document.getElementById("modalVideo").src = "";  
}

window.onload = function() {
    changeSlide(0);
    updateThumbnails();
};