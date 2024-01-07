// Nodes

const shareBtn = document.querySelector('#share-btn');
const shareBox = document.querySelector('.share_container');
const shareBtnActive = document.querySelector('#share-btn-active');

// Event Listeners

shareBtn.addEventListener('click', () => {
    changeBtnStyle();

    if (shareBox.style.opacity == 0) {
        showModal()
    } else {
        hideModal()

    }
})

shareBtnActive.addEventListener('click', () => {
    changeBtnStyle();
    shareBox.style.opacity = 0;
    shareBox.style.bottom = "-30px";
    shareBox.style.padding = "0 2rem";

    
})

// Functions

function changeBtnStyle() {
    if (shareBox.style.opacity == 0) {
        shareBtn.style.backgroundColor = "#6E8098";
        shareBtn.firstElementChild.src = "./images/icon-share-hover.svg"
    } else {
        shareBtn.style.backgroundColor = "#ECF2F8";
        shareBtn.firstElementChild.src = "./images/icon-share.svg"

    }
}

function showModal() {
    if (window.innerWidth > 800) {
        shareBox.style.opacity = 1;
        shareBox.style.right = "-85px";
        shareBox.style.bottom = "65px";
    } else {
        shareBox.style.opacity = 1;
        shareBox.style.bottom = 0;
        shareBox.style.right = 0;
        shareBox.style.padding = "1.40rem 2rem";
    }
}

function hideModal() {
    shareBox.style.opacity = 0;
}