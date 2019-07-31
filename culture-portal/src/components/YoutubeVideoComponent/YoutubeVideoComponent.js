import React from 'react';
import'./YoutubeVideoComponent.css';


const YoutubeVideoComponent = (props) => {
	console.log(props);
	// const path = `https://www.youtube.com/watch?v=${props.videoId}`;
	const path = `https://www.youtube.com/embed/${props.videoId}`
	return (
		<div className="container youtube-block">
			<h3>Youtube</h3>
		    <div className="video">
		    	<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">Смотреть видео</button>
		    </div>
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			        <iframe width="400" height="400"
						src={path}>
					</iframe>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	)
}

export default YoutubeVideoComponent;
