import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryArray = galleryItems.map((item) => 
    `<li>
    <a class='gallery__link' href='${item.original}'>
    <img class = 'gallery__image'
    src = '${item.preview}'
    data-source = '${item.original}'
    alt = '${item.description}'/>
    </a>
  </li>`
);

gallery.innerHTML = galleryArray.join('');

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`<img src = '${event.target.dataset.source}' width="800" height="600">`);
    
    instance.show();
});

console.log(galleryItems);
