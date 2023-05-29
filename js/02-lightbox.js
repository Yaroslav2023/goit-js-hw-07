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
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    }).join("");
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250, }); 




