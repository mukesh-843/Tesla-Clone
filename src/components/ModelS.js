import React from "react";
import Section from "./Section";
import styled from "styled-components";
import Header from "./Header";

function ModelS() {
  document.title = "Model S | Tesla";
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        description="Plaid"
        backgroundImage="model-s.jpg"
        desc1a="396 mi"
        desc1b="Range(EPA est.)"
        desc2a="1.99 s"
        desc2b="0-60 mph*"
        desc3a="200 mph"
        desc3b="Top Speed*"
        desc4a="1,020 hp"
        desc4b="Peak Power"
        detailBtnText="Order Now"
      />
    </Container>
  );
}

export default ModelS;
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
