import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCoverImage = styled.div`
  margin: 0;
  padding: 5vh 0;
  width: 90vw;
  img {
    width: 100%;
    height: auto;
    margin: 0;
    object-fit: cover;
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
