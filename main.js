// Nodes

const shareBtn = document.querySelector('#share-btn');
const shareBox = document.querySelector('.share_container');
const shareBtnActive = document.querySelector('#share-btn-active');

// Event Listeners

shareBtn.addEventListener('click', () => {
    shareBox.style.opacity = 1;
    shareBox.style.bottom = 0;
    shareBox.style.padding = "1.40rem 2rem";
})

shareBtnActive.addEventListener('click', () => {
    shareBox.style.opacity = 0;
    shareBox.style.bottom = "-30px";
    shareBox.style.padding = "0 2rem";
})