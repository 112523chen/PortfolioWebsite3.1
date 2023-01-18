import React from "react";
import { ProjectType } from "../model";
import styled from "styled-components";
import Project from "../Project/Project";

interface Props {
  projectData: ProjectType[];
  mode: string;
  className?: string;
}

const ProjectsBase = styled.div`
  min-width: 21rem;
  padding-top: 0;
  padding-right: 20%;
  padding-bottom: 0;
  padding-left: 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
`;

const ProjectsHeading = styled.div``;

const ProjectsH2 = styled.h2`
  font-size: 3rem;
  padding: 0;
  margin: 0;
`;

const ProjectsHr = styled.hr`
  margin: 0;
  margin-right: 20%;
`;

const Frame = styled.div``;

const Projects: React.FC<Props> = ({ projectData, mode, className }) => {
  return (
    <ProjectsBase>
      <ProjectsHeading>
        <ProjectsH2>Projects</ProjectsH2>
        <ProjectsHr />
      </ProjectsHeading>
      <Frame>
        {projectData.map((project) => (
          <Project project={project} key={project.id} mode={mode} />
        ))}
      </Frame>
    </ProjectsBase>
  );
};

export default Projects;
