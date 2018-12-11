import React from "react";

const Card = () => {
  return (
    <div className="Section1">
      <div className="center-align">
        <div className="col s12 m6">
          <div className="card black">
            <div className="card-content white-text">
              <span className="card-title">MLMN - Hustle Flow#1</span>
              <iframe
                width="100%"
                height="200"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/540764853&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
