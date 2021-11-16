import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCoverImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: 0;
  padding-bottom: 5vh;
  img {
    width: auto;
    height: 80vh;
    margin: 0;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      max-width: 50vw;
    }
  }
`;

const CoverImage = (props) => {
  return (
    <StyledCoverImage>
      <img src={props.image} alt={props.alt} />
    </StyledCoverImage>
  );
};

CoverImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default CoverImage;
