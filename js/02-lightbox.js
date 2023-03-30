import { galleryItems } from './gallery-items.js';
// Change code below this line
const picturesContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);

picturesContainer.insertAdjacentHTML('beforeend', picturesMarkup);


function createPicturesMarkup(galleryItems){
return galleryItems.map(({preview, original, description}) => {
return `
<li class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="return false;">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li> 
`
}).join('');
}
const gallerySimple = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

