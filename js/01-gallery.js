import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMurkup(item) {
  return item
    .map(
      item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join('');
}

const addGalleryMurkup = createGalleryMurkup(galleryItems);

galleryEl.innerHTML = addGalleryMurkup;

galleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1280">`
  );
  instance.show();

  galleryEl.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
