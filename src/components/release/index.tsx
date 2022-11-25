import React from 'react';
import './index.css';

interface IReleaseProps {
    art: string;
    date: string;
    format: string;
    media: string[];
    title: string;
    trackList: string[];
}

const Release: React.FC<IReleaseProps> = (props: IReleaseProps) => {
    const {
        art,
        date,
        format,
        media,
        title,
        trackList,
    } = props;

    // @ts-ignore
    return (
      <div className="release-container">
          <div className="left-column">
              <div className="album-art">
                  <img src={art} alt={title} />
              </div>
              <div className="date-format-media-title-section">
                  <div>
                      <span>Title:</span>
                      <p>{title}</p>
                  </div>
                  <div>
                      <span>Release Date:</span>
                      <p>{date}</p>
                  </div>
                  <div>
                      <span>Media:</span>
                      <ul>{ media.map(mediaType => (<li key={`${title}-${mediaType}`}>{mediaType}</li>)) }</ul>
                  </div>
              </div>
          </div>
          <div className="right-column"></div>
      </div>
    );
};

export default Release;
