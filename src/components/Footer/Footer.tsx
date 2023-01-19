import React from "react";
import styled from "styled-components";

interface Props {
  mode: string;
}

interface LinkModeProps {
  mode: string;
}

const FooterBase = styled.footer`
  min-width: 21rem;
  padding: 0 1rem;
  display: flex;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
    display: inline-block;
  }
`;

const Left = styled.div`
  width: 0;
`;

const Middle = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const P = styled.p``;

const Right = styled.div`
  margin-left: auto;
  margin-right: 0;
  @media only screen and (max-width: 24rem) {
    margin: 0 11%;
  }
`;

const UL = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  @media only screen and (max-width: 24rem) {
    justify-content: center;
  }
`;

const LI = styled.li`
  padding-right: 1rem;
  @media only screen and (max-width: 24rem) {
    margin-bottom: 1.5rem;
  }
`;

const Link = styled.a<LinkModeProps>`
  text-decoration: none;
  padding: 0.2rem 0.2rem 0;
  color: ${(props) => (props.mode === "light" ? "black" : "#e7e7e7")};
  border-bottom: 1px solid
    ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.accent
        : props.theme.color.darkMode.accent};
  box-shadow: inset 0 0 0 0
    ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.accent
        : props.theme.color.darkMode.accent};
  transition: color 0.3s linear, box-shadow 2s linear;
  &:hover {
    color: #fff;
    box-shadow: inset 0 -200px 0 0 ${(props) => (props.mode === "light" ? props.theme.color.lightMode.accent : props.theme.color.darkMode.accent)};
  }
  &:active {
    color: ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.active
        : props.theme.color.darkMode.active};
  }
`;

const Footer: React.FC<Props> = ({ mode }) => {
  return (
    <FooterBase>
      <Left></Left>
      <Middle>
        <P>Design & Built by Alex Chen</P>
      </Middle>
      <Right>
        <UL>
          <LI>
            <Link
              target="_blank"
              mode={mode}
              href="mailto:itsalexchen@gmail.com"
            >
              Email
            </Link>
          </LI>
          <LI>
            <Link
              target="_blank"
              mode={mode}
              href="https://github.com/112523chen"
            >
              GitHub
            </Link>
          </LI>
          <LI>
            <Link
              target="_blank"
              mode={mode}
              href="https://www.linkedin.com/in/alex-chen-112523chen/"
            >
              LinkedIn
            </Link>
          </LI>
          <LI>
            <Link target="_blank" mode={mode} href="/AlexChenResume.pdf">
              Resume
            </Link>
          </LI>
        </UL>
      </Right>
    </FooterBase>
  );
};

export default Footer;
