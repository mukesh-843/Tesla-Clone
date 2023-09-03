import React from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImage,
  leftBtnText,
  rightBtnText,
  desc1a,
  desc1b,
  desc2a,
  desc2b,
  desc3a,
  desc3b,
  desc4a,
  desc4b,
  detailBtnText,
}) {
  return (
    <SectionContainer bgImg={backgroundImage}>
      <Fade bottom>
        <TextItem>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextItem>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            {leftBtnText && <LeftButton>{leftBtnText}</LeftButton>}
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DetailsGroup>
            <DetailsButtonGroups>
              <Wrap>
                <DescA>
                  <h1>{desc1a}</h1>
                </DescA>
                <DescB>
                  <p>{desc1b}</p>
                </DescB>
              </Wrap>
              <Wrap>
                <DescA>
                  <h1>{desc2a}</h1>
                </DescA>
                <DescB>
                  <p>{desc2b}</p>
                </DescB>
              </Wrap>
              <Wrap>
                <DescA>
                  <h1>{desc3a}</h1>
                </DescA>
                <DescB>
                  <p>{desc3b}</p>
                </DescB>
              </Wrap>
              <SmallScreen>
                {desc4a && (
                  <Wrap>
                    <DescA>
                      <h1>{desc4a}</h1>
                    </DescA>

                    <DescB>
                      <p>{desc4b}</p>
                    </DescB>
                  </Wrap>
                )}
              </SmallScreen>
            </DetailsButtonGroups>
            {detailBtnText && <OrderNow>{detailBtnText}</OrderNow>}
          </DetailsGroup>
        </Fade>
        <Arrow src="/images/down-arrow.svg" />
      </Buttons>
    </SectionContainer>
  );
}

export default Section;

const animate = keyframes`
  0%,20%,50%,80%,100%{transform:translateY(0);}
  40%{transform:translateY(5px);}
  60%{transform:translateY(3px);}
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
const Arrow = styled.img`
  height: 40px;
  animation-name: ${animate};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-bottom: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 400px;
  }
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const TextItem = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-image: url("/images/model-s.jpg"); */
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const SmallScreen = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrap = styled.div`
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 120px;
  }
`;
const DescA = styled.div`
  h1 {
    text-spacing: 1px;
    font-size: 30px;
    font-weight: 500;
    color: white;
  }
  @media (max-width: 768px) {
    h1 {
      text-spacing: 1px;
      font-size: 20px;
      font-weight: 500;
      color: white;
    }
  }
`;
const DescB = styled.div`
  p {
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    justify-content: center;
    margin-top: 5px;
  }
  @media (max-width: 768px) {
    p {
      color: white;
      font-size: 10px;
      letter-spacing: 1px;
      justify-content: center;
      margin-top: 5px;
    }
  }
`;
const DetailsButtonGroups = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: center;
  cursor: pointer;
`;

const DetailsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OrderNow = styled.div`
  height: 40px;
  width: 200px;
  font-size: 14px;
  color: white;
  border: 4px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 400px;
  }
`;
