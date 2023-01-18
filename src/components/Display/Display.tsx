import React from "react";
import { phrases } from "../../assets/data/phrases.json";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";

interface Props {
  mode: string;
  isMobileDevice: boolean;
}

interface DisplayModeProps {
  mode: string;
}

const DisplayBase = styled.div`
  min-width: 21rem;
  padding-top: 0;
  padding-right: 20%;
  padding-bottom: 9;
  padding-left: 20%;
  -webkit-margin-before: 15%;
  margin-block-start: 15%;
  -webkit-margin-after: 35rem;
  margin-block-end: 35rem;
`;

const Name = styled.h1`
  font-size: 6rem;
  margin-bottom: 0rem;
`;

const DisplayHeadline = styled.div`
  font-family: "Inconsolata";
  font-size: 1.125rem;
  margin: 1rem 0;
`;

const DisplayMobileHeadline = styled.div``;

const DisplayMobileWord = styled.div`
  max-width: 45rem;
  min-width: 25rem;
  font-size: 2rem;
`;

const TypeWriterContainer = styled.div<DisplayModeProps>`
  height: 3rem;
  font-size: 3rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.color.lightMode.accent
      : props.theme.color.darkMode.accent};
`;

const DisplayStory = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 1.125rem;
  margin: 1rem 0;
`;

const Story = styled.p`
    max-width: 36rem;
  font-size: 1.15rem;
}`;

const Keywords = styled.span<DisplayModeProps>`
  margin: 0 0.2rem;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.color.lightMode.accent
      : props.theme.color.darkMode.accent};
`;

const Display: React.FC<Props> = ({ mode, isMobileDevice }) => {
  return (
    <DisplayBase>
      <Name>Alex Chen</Name>
      <DisplayHeadline>
        <DisplayMobileHeadline>
          {isMobileDevice ? (
            <DisplayMobileWord>
              Aspiring Data Scientist | Data Science Fellow @ CUNY Tech Prep
            </DisplayMobileWord>
          ) : (
            <TypeWriterContainer mode={mode}>
              <Typewriter words={phrases} loop={0} cursor={true} />
            </TypeWriterContainer>
          )}
        </DisplayMobileHeadline>
      </DisplayHeadline>
      <DisplayStory>
        <Story>
          I am a<Keywords mode={mode}>data science</Keywords>
          student studying at
          <Keywords mode={mode}>New York City College of Technology</Keywords>
          while also studying
          <Keywords mode={mode}>web development</Keywords>
          in my free time who is eager to tell stories from data.
        </Story>
      </DisplayStory>
    </DisplayBase>
  );
};

export default Display;
