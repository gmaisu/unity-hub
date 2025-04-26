import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import styled from "styled-components";

import NavigationBar from "./components/Navigation/NavigationBar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog-post/BlogPost";

import AboutBackground from "./assets/bg/about.webp";
import AboutBackgroundMobile from "./assets/bg/about-mobile.webp";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${({ bgweb, bgmobile }) =>
    bgweb && bgmobile &&
    `
        background-image: url(${bgweb});
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;

        @media (max-width: 480px) {
            background-image: url(${bgmobile});
        }
    `};
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 1rem 4rem;

  @media (max-width: 480px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 390px) {
    padding: 1rem;
  }
`;

const PAGE_BACKGROUNDS = {
  "/": {
    web: AboutBackground,
    mobile: AboutBackgroundMobile,
  },
  "/about": {
    web: AboutBackground,
    mobile: AboutBackgroundMobile,
  },
};

const App = () => {
  const [bgWeb, setBgWeb] = useState(null);
  const [bgMobile, setBgMobile] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const page = PAGE_BACKGROUNDS[location.pathname];

    if (page != null && page != undefined) {
      setBgWeb(page.web);
      setBgMobile(page.mobile);
    } else {
      setBgWeb(null);
      setBgMobile(null);
    }
  }, [location.pathname]);

  return (
    <Wrapper bgweb={bgWeb} bgmobile={bgMobile}>
      <NavigationBar />
      <Content>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default App;
