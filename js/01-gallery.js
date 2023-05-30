import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryLists = document.querySelector(".gallery");

const cardsCreated = createGalleryCards(galleryItems);

galleryLists.insertAdjacentHTML('afterbegin', cardsCreated);

function createGalleryCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    }).join("");
};

galleryLists.addEventListener('click', onImegesClick);

function onImegesClick (event) {
    event.preventDefault();
    
    if(!event.target.classList.contains('gallery__image')) {
        return;
    };

    const originalImegeRef = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${originalImegeRef}" width="800" height="600">
    `, { 
        onShow: onShowCallBack,
        onclose: onCloseCallBack, });

        instance.show();


    function onShowCallBack () {
        window.addEventListener('keydown', (evt) => {if(evt.code !== 'Escape') {   
            return;};
            instance.close();});
    };
    
    function onCloseCallBack () {
        window.removeEventListener('keydown');
    }   
};     