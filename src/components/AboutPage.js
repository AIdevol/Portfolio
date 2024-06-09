import React, { lazy } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

// assets
import caspar from "../assets/images/Caspar.png";

//components
import { DarkTheme } from "./Themes";
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(-50px) translateX(-40px)}
100% { transform: translateY(-10px)}
`;

const Caspar = styled(motion.div)`
  position: absolute;
  width: 60vw;
  animation: ${float} 5s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        key="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <ParticleComponent theme="dark" />

        <Caspar
          initial={{ right: "-50%", top: "70%", opacity: 0 }}
          animate={{ right: "-15%", top: "30%", opacity: 1 }}
          transition={{ duration: 4, delay: 0.5 }}
        >
          <img src={caspar} alt="caspar" />
        </Caspar>

        <div style={{ flexGrow: 1}}>
        <Main>
        I'm a Fullstack developer based in India, passionate about crafting elegant solutions for modern web and mobile applications. With a keen eye for detail and a focus on user experience, I specialize in creating simple yet beautiful websites and apps that captivate and delight users.
          <br />
          <br/>
          My journey into software development began with a fascination for technology and a desire to build things that make a difference. Over the years, I've honed my skills in frontend and backend development, mastering a variety of technologies and frameworks along the way.

          <br />

          -Thank you

        </Main>
        </div>
        <BigTitle text="ABOUT" top="2rem" right="2rem" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
