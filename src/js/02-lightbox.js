import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryArray = galleryItems.map((item) => 
    `<li>
    <a class='gallery__link' href='${item.original}'>
    <img class = 'gallery__image'
    src = '${item.preview}'
    alt = '${item.description}'/>
    </a>
  </li>`
);

gallery.innerHTML = galleryArray.join('');

    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionType: 'attr',
        captionsData: 'bottom',
        captionDelay: 250,
        nav: false,
    });

    // const instance = basicLightbox.create(`<img src = '${event.target.dataset.source}' width="800" height="600">`);
    
   //  instance.show();

console.log(galleryItems);
