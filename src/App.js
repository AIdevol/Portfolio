import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { LightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";
import Loading from "./subComponents/Loading";
import "./App.css";

// Components
const AboutPage = lazy(() => import("./components/AboutPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const Main = lazy(() => import("./components/Main"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <Suspense fallback={<Loading />}>
          {/* for frame-motion animation on page change */}
          <AnimatePresence mode ='wait'>
            <Routes location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/skills" element={<MySkillsPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
