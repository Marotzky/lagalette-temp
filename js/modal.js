const modals = document.querySelectorAll('.modal');
const openModalTriggers = document.querySelectorAll('[id^="openModal"]');
const closeBtns = document.querySelectorAll('.close-btn');
const arrows = document.querySelectorAll('.arrow');

let currentIndex = 0;

// Abrir modal
openModalTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
        currentIndex = 0; // Reseta o índice para o início ao abrir o modal
        modals[index].style.display = 'block';
        updateModalContent(modals[index], currentIndex);
    });
});

// Fechar modal
closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const modal = modals[index];
        modal.style.display = 'none';
        
        // Pausar o vídeo ao fechar o modal
        const video = modal.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0; // Reiniciar o vídeo para o início
        }
    });
});

// Navegar entre os itens com as setas
arrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        const mediaItems = modal.querySelectorAll('.modal-media img, .modal-media video');
        const direction = e.target.classList.contains('left-arrow') ? -1 : 1;

        // Pausar o vídeo antes de mudar de slide, se estiver reproduzindo
        const currentVideo = modal.querySelector('video');
        if (currentVideo) {
            currentVideo.pause();
            currentVideo.currentTime = 0; // Reiniciar o vídeo
        }

        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = mediaItems.length - 1; // Volta para o último item
        } else if (currentIndex >= mediaItems.length) {
            currentIndex = 0; // Vai para o primeiro item
        }

        updateModalContent(modal, currentIndex);
    });
});

// Atualiza o conteúdo do modal com base no índice atual
function updateModalContent(modal, index) {
    const mediaItems = modal.querySelectorAll('.modal-media img, .modal-media video');
    mediaItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none'; // Exibe apenas o item atual
    });
}

function updateModalContent(modal, index) {
    const mediaItems = modal.querySelectorAll('.modal-media img, .modal-media video');
    const descriptions = modal.querySelectorAll('.modal-media .description');
    
    mediaItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none'; // Exibe apenas o item atual
    });

    descriptions.forEach((desc, i) => {
        desc.style.display = i === index ? 'block' : 'none'; // Exibe apenas a descrição correspondente
    });
}
