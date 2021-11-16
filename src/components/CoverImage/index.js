import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCoverImage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 5vh 5vw;
  text-decoration: none;

  img {
    width: auto;
    max-width: 100%;
    max-height: 80vh;
    margin: 0;
    object-fit: cover;
  }
`;

const CoverImage = (props) => {
  return (
    <StyledCoverImage>
      <h2 className="cover-image-title">{props.alt}</h2>
      <img src={props.image} alt={props.alt} />
    </StyledCoverImage>
  );
};

CoverImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default CoverImage;
