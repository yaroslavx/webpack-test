import getSomeMmm from './getSomeMmm';
import './styles/main.scss';
import image from './assets/image.png';

const someImage = document.querySelector('#imageId');
someImage.src = image;

document
  .querySelector('#cuteBtn')
  .addEventListener('click', () => getSomeMmm());
