import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryLists = document.querySelector(".gallery");

const cardsCreated = createGalleryCards(galleryItems);

galleryLists.insertAdjacentHTML('afterbegin', cardsCreated);

// console.log(createGalleryCards(galleryItems));

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
    }
    console.log(event.target);
    const originalImegeRef = event.target.dataset.source;
    console.log(originalImegeRef);

    const instance = basicLightbox.create(`
    <img src="${originalImegeRef}" width="800" height="600">
    `);
    instance.show();
};
