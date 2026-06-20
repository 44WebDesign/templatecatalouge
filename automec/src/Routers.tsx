import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home1 from './pages/homePages/Home1';
import Home2 from './pages/homePages/Home2';
import About from './pages/innerPages/About';
import Services from './pages/innerPages/Services';
import ServiceDetails from './pages/innerPages/ServiceDetails';
import Projects from './pages/innerPages/Projects';
import ProjectDetails from './pages/innerPages/ProjectDetails';
import Blog from './pages/innerPages/Blog';
import BlogDetails from './pages/innerPages/BlogDetails';
import Contact from './pages/innerPages/Contact';
import Team from "./pages/innerPages/Team";
import TeamDetails from "./pages/innerPages/TeamDetails";
const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />}></Route>
                <Route path='/home-2' element={<Home2 />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/service-details/:id' element={<ServiceDetails />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/project-details/:id' element={<ProjectDetails />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='blog-details/:id' element={<BlogDetails />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/team' element={<Team />}></Route>
                <Route path='/team-details/:id' element={<TeamDetails />}></Route>
            </Routes>
        </>
    );
};

export default Routers;