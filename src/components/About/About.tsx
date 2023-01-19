import React from "react";
import styled from "styled-components";

interface Props {
  mode: string;
  className?: string;
}

interface pProps {
  mode?: string;
}

const AboutBase = styled.div`
  min-width: 21rem;
  padding-top: 0;
  padding-right: 20%;
  padding-bottom: 0;
  padding-left: 20%;
  margin-block-end: 15rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
    /* margin-block: 10rem; */
  }
`;

const AboutHeading = styled.div``;

const AboutH2 = styled.h2`
  font-size: 3rem;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 24rem) {
    font-size: 2rem;
  }
`;

const AboutHr = styled.hr`
  margin: 0;
  margin-right: 20%;
`;

const AboutBio = styled.div``;

const AboutP = styled.p<pProps>`
  line-height: 2;
  max-width: 80%;
  &:nth-child(2) {
    color: ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.accent
        : props.theme.color.darkMode.accent};
  }
`;

const About: React.FC<Props> = ({ mode, className }) => {
  return (
    <AboutBase>
      <AboutHeading>
        <AboutH2>About Me</AboutH2>
        <AboutHr />
      </AboutHeading>
      <AboutBio>
        <AboutP>
          I am a third-year student at New York City College of Technology, CUNY
          and majoring in data science and interned at 2 companies in backend
          development and data analysis roles. I also am part of the 8th cohort
          of CUNY Tech Prep as a fellow and also an ambassador for CTP. I am
          passionate about learning more about this world through different
          lenses especially through data.
        </AboutP>
        <AboutP mode={mode}>
          My goal is to discover, analyze and harness — the power of 'data'.
          Data is undoubtedly the new gold of the era we live in.
        </AboutP>
        <AboutP>
          When I am not in front of a screen, I’m most likely enjoying the local
          food and wonderful weather while reading or listening to music.
        </AboutP>
      </AboutBio>
    </AboutBase>
  );
};

export default About;
