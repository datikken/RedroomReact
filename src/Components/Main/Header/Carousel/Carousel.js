import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} interval={1250} stopOnHover={true} swipeable={true} centerMode={true}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
        <div>
          <img src={img7} />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
