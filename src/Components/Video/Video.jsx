import React from "react";
import "./video.css";
function Video() {
  return (
    <div className="video-section ">
      <div className="work pt-3 pb-3 pb-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 mb-3 mb-md-0">
              <iframe
                width="1200px"
                height="315"
                src="https://www.youtube.com/embed/5YFnoGRDQjw?si=buok3h8qFW_6l3nN"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
