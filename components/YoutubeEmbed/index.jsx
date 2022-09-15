import React from 'react';

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="1279"
        height="720"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
