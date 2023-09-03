import React from "react";
import Section from "./Section";
import styled from "styled-components";
import Header from "./Header";

function ModelY() {
  document.title = "Model Y | Tesla";
  return (
    <Container>
      <Header />
      <Section
        title="Model Y"
        backgroundImage="model-y.jpg"
        desc1a="76 cu ft"
        desc1b="Cargo Space"
        desc2a="330 mi"
        desc2b="Range (EPA est.)"
        desc3a="AWD"
        desc3b="Dual Motor"
        detailBtnText="Order Now"
      />
    </Container>
  );
}

export default ModelY;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
