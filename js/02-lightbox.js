import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const crateGallerySet = galleryItems.map(createGalleryItem).join('');

galleryEl.insertAdjacentHTML('afterbegin', crateGallerySet);

function createGalleryItem({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
