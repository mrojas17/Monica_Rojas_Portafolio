import { Route, Routes, useLocation } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";
import SocialLinks from "./components/SocialLinks";
import GeneralFooter from "./components/GeneralFooter";
import HomePage from "./components/pages/HomePage";
import AllProjectsPage from "./components/pages/AllProjectsPage";
import AllTechsPage from "./components/pages/AllTechsPage";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  const location = useLocation();

  const isErrorPage = location.pathname !== "/" &&
                      location.pathname !== "/projects" &&
                      location.pathname !== "/technologies";

  return (
    <>
      <ParticlesBackground />

      {!isErrorPage && <SocialLinks />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/technologies" element={<AllTechsPage />} />
        <Route path="/not-available" element={<ErrorPage />} />
      </Routes>

      {!isErrorPage && <GeneralFooter />}
    </>
  );
}

export default App;
