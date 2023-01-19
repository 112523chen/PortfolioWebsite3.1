import React from "react";
import styled from "styled-components";
import { CS_Coursework, DS_Coursework } from "../../assets/data/courswork.json";

interface Props {
  mode: string;
  className?: string;
}

interface SectionHeadingProps {
  mode: string;
}

const CourseworkBase = styled.div`
  min-width: 21rem;
  padding-top: 0;
  padding-right: 20%;
  padding-bottom: 0;
  padding-left: 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
`;

const CourseworkHeading = styled.div``;

const CourseworkH2 = styled.h2`
  font-size: 3rem;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 24rem) {
    font-size: 2rem;
  }
`;

const CourseworkHr = styled.hr`
  margin: 0;
  margin-right: 20%;
`;

const CourseworkCourse = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const CourseworkSectionHeading = styled.div<SectionHeadingProps>`
  font-size: 2rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.color.lightMode.accent
      : props.theme.color.darkMode.accent};
`;

const CourseworkCS = styled.div`
  margin-right: 1rem;
`;

const CourseworkDS = styled.div`
  margin-left: 1rem;
`;

const Courseworkp = styled.p`
  font-size: 1.1rem;
`;

const Coursework: React.FC<Props> = ({ mode }) => {
  return (
    <CourseworkBase>
      <CourseworkHeading>
        <CourseworkH2>Relevant Coursework</CourseworkH2>
        <CourseworkHr />
      </CourseworkHeading>
      <CourseworkCourse>
        <CourseworkCS>
          <CourseworkSectionHeading mode={mode}>
            Computer Science
          </CourseworkSectionHeading>
          {CS_Coursework.map((course, index) => (
            <Courseworkp key={index}>{course}</Courseworkp>
          ))}
        </CourseworkCS>
        <CourseworkDS>
          <CourseworkSectionHeading mode={mode}>
            Data Science
          </CourseworkSectionHeading>
          {DS_Coursework.map((course, index) => (
            <Courseworkp key={index}>{course}</Courseworkp>
          ))}
        </CourseworkDS>
      </CourseworkCourse>
    </CourseworkBase>
  );
};

export default Coursework;
