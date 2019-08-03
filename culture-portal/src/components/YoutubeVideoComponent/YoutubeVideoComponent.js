import React from "react";
import i18next from "i18next";
import "./YoutubeVideoComponent.css";

const YoutubeVideoComponent = props => {
  const path = `https://www.youtube.com/embed/${props.videoId}`;
  return (
    <div className="container youtube-block" id="youtube-video">
      <div className="row">
        <div className="col">
          <h3>Youtube</h3>
          <div className="video">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              {i18next.t('Watch-video')}
            </button>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {i18next.t(`${props.author.path}:${props.author.name}`)}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" className="close-button">
                      <i className="fa fa-close" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <iframe
                    title="this is a unique title"
                    src={path}
                  />
                </div>
                <div className="modal-footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoComponent;
