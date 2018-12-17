import React, { Component } from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import img1 from "../../../../assets/img1.png";
import img2 from "../../../../assets/img2.png";
import img3 from "../../../../assets/img3.png";
import img4 from "../../../../assets/img4.png";
import img5 from "../../../../assets/img5.png";
import img6 from "../../../../assets/img6.png";
import img7 from "../../../../assets/img7.png";

class DemoCarousel extends Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" lazyLoad={true} loop={true} margin={10} items={3}>
        <div class="item">
          <img src={img1}/>
        </div>
        <div class="item">
        <img src={img2}/>
        </div>
        <div class="item">
        <img src={img3}/>
        </div>
        <div class="item">
        <img src={img4}/>
        </div>
        <div class="item">
        <img src={img5}/>
        </div>
        <div class="item">
        <img src={img6}/>
        </div>
        <div class="item">
        <img src={img7}/>
        </div>
      </OwlCarousel>
    );
  }
}

export default DemoCarousel;
