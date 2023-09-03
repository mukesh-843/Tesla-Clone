import React from 'react'
import Section from './Section';
import styled from 'styled-components';
import Header from './Header';

function Model3() {
    document.title = "Model 3 | Tesla";
  return (
    <Container>
      <Header />
      <Section
        title="Model 3"
        backgroundImage="model-3.jpeg"
        desc2a="358 mi"
        desc2b="Range(EPA est.)"
        desc1a="3.1 s"
        desc1b="0-60 mph*"
        desc3a="AWD"
        desc3b="Dual Motor"
        detailBtnText="Order Now"
      />
    </Container>
  )
}

export default Model3

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
