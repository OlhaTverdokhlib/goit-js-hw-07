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
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li> 
`
}).join('');
}

picturesContainer.addEventListener('click', onPuctureClick);

function onPuctureClick(evt){
    if(!evt.target.classList.contains('gallery__image')){
        return;
    }
    const instance = basicLightbox.create(`
    <div class="modal">
        <img
        class="gallery__image"
        src="${evt.target.dataset.source}"
        /img>
    </div>
`)
instance.show()

picturesContainer.addEventListener("keydown", evt => {
    if(evt.code === "Escape"){
        instance.close()
        
    }
    
})

}

