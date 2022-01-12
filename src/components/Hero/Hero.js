import React from "react";

import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./Hero.elements";
import "./style.css";

function Hero() {
  return (
    <>
      <div className="hero-bg">
        <InfoSec lightBg="true">
          <Container>
            <InfoRow imgStart="">
              <InfoColumn>
                <TextWrapper>
                  <TopLine lightTopLine="true">Welcome To</TopLine>
                  <Heading lightText="true">Apopaclyptic Pigs</Heading>
                  <Subtitle lightTextDesc="true">
                    It's 2069, a nuclear war erupted ending life as we know it.
                    A mutation caused by radiation mutated pigs are now they
                    rule the world
                  </Subtitle>
                  <a href="https://mintapopaclypticpigs.vercel.app/">
                    <Button big fontBig primary="true">
                      Mint Your Pig
                    </Button>
                  </a>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                {/* <ImgWrapper start="">
                <Img style={{ width: "" }} src={bg} alt={alt} />
              </ImgWrapper> */}
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </div>
    </>
  );
}

export default Hero;
