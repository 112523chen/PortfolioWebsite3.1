import React from "react";
import styled from "styled-components";

type Props = {
  mode: string;
  className?: string;
};

interface LegendProps {
  mode: string;
}

const SkillsetBase = styled.div`
  min-width: 21rem;
  padding-top: 0;
  padding-right: 20%;
  padding-bottom: 0;
  padding-left: 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
    margin-block: 10rem;
  }
`;

const SkillsetHeading = styled.div``;

const SkillsetH2 = styled.h2`
  font-size: 3rem;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 24rem) {
    font-size: 2rem;
  }
`;

const SkillsetHr = styled.hr`
  margin: 0;
  margin-right: 20%;
`;

const Frame = styled.div``;

const SkillGroup = styled.div``;

const Skillsetp = styled.p`
  line-height: 1.6rem;
  max-width: 80%;
`;

const SkillLegend = styled.span<LegendProps>`
  font-weight: 900;
  font-size: 1.1rem;
  margin-right: 0.2rem;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.color.lightMode.accent
      : props.theme.color.darkMode.accent};
`;

const Skillset: React.FC<Props> = ({ mode }) => {
  return (
    <SkillsetBase>
      <SkillsetHeading>
        <SkillsetH2>Skills</SkillsetH2>
        <SkillsetHr />
      </SkillsetHeading>
      <Frame>
        <SkillGroup>
          <Skillsetp>
            <SkillLegend mode={mode}>Languages:</SkillLegend>
            Python, SQL, HTML, CSS, JavaScript, TypeScript, Java, Sass, Bash, R
          </Skillsetp>
        </SkillGroup>
        <SkillGroup>
          <Skillsetp>
            <SkillLegend mode={mode}>Libraries:</SkillLegend>
            Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, NLTK, Redux, SciPy
          </Skillsetp>
        </SkillGroup>
        <SkillGroup>
          <Skillsetp>
            <SkillLegend mode={mode}>Frameworks:</SkillLegend>
            Streamlit, React, Bootstrap, Node, Mocha, Jest, Express
          </Skillsetp>
        </SkillGroup>
        <SkillGroup>
          <Skillsetp>
            <SkillLegend mode={mode}>Tools:</SkillLegend>
            Git, GitHub, Jupyter Notebooks, Excel, Data Studio, Tableau, Figma
          </Skillsetp>
        </SkillGroup>
      </Frame>
    </SkillsetBase>
  );
};

export default Skillset;
