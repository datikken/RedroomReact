import React from 'react';
import M from 'materialize-css';
import image1 from '../../../../../src/assets/image.jpg';
import image2 from '../../../../../src/assets/image2.jpg';
import image3 from '../../../../../src/assets/image3.jpg';

const Carousel = () => {
  return (
    <div class="carousel">
    <a class="carousel-item" href="#one!"><img src={image1}/></a>
    <a class="carousel-item" href="#two!"><img src={image2}/></a>
    <a class="carousel-item" href="#three!"><img src={image3}/></a>
  </div>
  )
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, 3);
});


export default Carousel;