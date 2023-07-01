import {} from 'react';
import config from '../gitprofile.config';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import { Project } from './components/Projects/project/Project';
import { AllProjects } from './components/Projects/all-projects';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/projects/:id" element={<Project config={config} />} />
          <Route path="/projects/" element={<AllProjects config={config} />} />
          <Route path="/" element={<Home config={config} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
