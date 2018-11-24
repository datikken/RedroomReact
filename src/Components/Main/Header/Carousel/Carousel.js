import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Vinyl1 from "../../../../assets/Vinyl1.jpg";
import Vinyl2 from "../../../../assets/Vinyl2.jpg";
import Vinyl3 from "../../../../assets/Vinyl3.jpg";

class NpmReactCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} emulateTouch={true} infiniteLoop={true} showStatus={false}>
        <div>
          <img src={Vinyl2} />
        </div>
        <div>
          <img src={Vinyl1} />
        </div>
        <div>
          <img src={Vinyl3} />
        </div>
      </Carousel>
    );
  }
}

export default NpmReactCarousel;
