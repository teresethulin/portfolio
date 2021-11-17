import React from 'react';
import PropTypes from 'prop-types';

const CoverImage = (props) => {
  return (
    <div className="project-wrapper">
      <h1 className="cover-image-title">{props.alt}</h1>
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

CoverImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default CoverImage;
