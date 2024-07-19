import SimpleLightbox from 'simplelightbox'
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

const theGallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);

function createGalleryItem(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
    }).join('');
}

theGallery.insertAdjacentHTML('afterbegin', galleryMarkup);

const imageGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});