import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryCardSet = galleryItems.map(createGalleryCard).join("");

galleryRef.insertAdjacentHTML("afterbegin", galleryCardSet);

function createGalleryCard({ preview, original, description }) {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
