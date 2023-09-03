import React from "react";
import Section from "./Section";
import styled from "styled-components";
import Header from "./Header";
function ModelX() {
    document.title = "Model X | Tesla";
  return (
    <Container>
      <Header />
      <Section
        title="Model X"
        description="Plaid"
        backgroundImage="model-x.jpg"
        desc1a="333 mi"
        desc1b="Range(EPA est.)"
        desc2a="2.5 s"
        desc2b="0-60 mph*"
        desc3a="9.9 s"
        desc3b="1/4 Mile"
        desc4a="1,020 hp"
        desc4b="Peak Power"
        detailBtnText="Order Now"
      />
    </Container>
  );
}

export default ModelX;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
