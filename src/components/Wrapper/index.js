import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: auto;
  margin: 0;
  padding: 5vh 5vw;
  padding-top: calc(70px + 5vh);
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
`;

export default Wrapper;
