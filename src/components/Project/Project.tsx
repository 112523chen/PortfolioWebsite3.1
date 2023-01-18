import React from "react";
import { ProjectType } from "../model";
import styled from "styled-components";

interface Props {
  project: ProjectType;
  mode: string;
}

interface ProjectModeProps {
  mode: string;
}

const ProjectBase = styled.div`
  -webkit-padding-after: 5rem;
  padding-block-end: 5rem;
`;

const ProjectTitle = styled.div`
  font-weight: bolder;
  font-style: italic;
  font-size: 1.2rem;
`;

const ProjectH3 = styled.h3``;

const ProjectDetails = styled.div`
  max-width: 80%;
`;

const Projectp = styled.p``;

const ProjectSkills = styled.div`
  margin-bottom: 1.5rem;
`;

const ProjectUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`;

const ProjectLI = styled.li<ProjectModeProps>`
  margin-right: 1rem;
  border: 1px solid
    ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.accent
        : props.theme.color.darkMode.accent};
  border-radius: 3px;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.color.lightMode.accent
      : props.theme.color.darkMode.accent};
  font-size: 0.8rem;
  padding-top: 3px;
  padding-right: 7px;
  padding-bottom: 1px;
  padding-left: 7px;
  box-shadow: inset 0 0 0 0
    ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.accent
        : props.theme.color.darkMode.accent};
  transition: color 0.2s linear, box-shadow 0.5s linear;
  -webkit-margin-after: 0.5rem;
  margin-block-end: 0.5rem;
  &:hover {
    box-shadow: inset 200px 0 0 0
      ${(props) =>
        props.mode === "light"
          ? props.theme.color.lightMode.accent
          : props.theme.color.darkMode.accent};
    color: #fff;
  }
`;

const ProjectLinkButton = styled.div<ProjectModeProps>`
  flex: 50%;
  background-color: ${(props) =>
    props.mode === "light" ? "#3395ff" : "#00c896"};
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: 10%;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 0
    ${(props) => (props.mode === "light" ? "#2468b3" : "#008c69")};
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;

const ProjectLink = styled.a<ProjectModeProps>`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.hover
        : props.theme.color.darkMode.hover};
  }
`;

const Project: React.FC<Props> = ({ project, mode }) => {
  return (
    <ProjectBase>
      <ProjectTitle>
        <ProjectH3>{project.title}</ProjectH3>
      </ProjectTitle>
      <ProjectDetails>
        <Projectp>{project.details}</Projectp>
      </ProjectDetails>
      <ProjectSkills>
        <ProjectUL>
          {project.skills.map((skill, index) => (
            <ProjectLI mode={mode} key={index}>
              {skill}
            </ProjectLI>
          ))}
        </ProjectUL>
      </ProjectSkills>
      <ProjectLinkButton mode={mode}>
        <ProjectLink
          mode={mode}
          title={
            project.isRepo === false && project.isWebApp === true
              ? "Project Web App"
              : project.isRepo === false && project.isWebApp === false
              ? "Project Web Page"
              : "Project Github Repo"
          }
          target="_blank"
          href={project.link}
        >
          {project.isRepo === false && project.isWebApp === true
            ? "Web App"
            : project.isRepo === false && project.isWebApp === false
            ? "Web Page"
            : "Github Repo"}
        </ProjectLink>
      </ProjectLinkButton>
    </ProjectBase>
  );
};

export default Project;
