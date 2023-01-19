import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import DisplayButton from "./components/DisplayButton/DisplayButton";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { projectData } from "./assets/data/projectData.json";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  const colorState = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";

  const [mode, setMode] = useState<string>(colorState);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <DisplayButton mode={mode} setMode={setMode} /> */}
        <DisplayButton mode={mode} setMode={setMode} />
        <Main
          projectData={projectData}
          mode={mode}
          isMobileDevice={isMobileDevice}
        />
        {/* <Footer mode={mode} /> */}
        <Footer mode={mode} />
      </div>
    </ThemeProvider>
  );
};

export default App;
