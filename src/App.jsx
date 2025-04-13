import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

import styled from "styled-components";

import NavigationBar from "./components/Navigation/NavigationBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";

import store from "./app/store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${({ bg }) =>
    bg &&
    `
        background-image: url(/src/assets/bg/${bg}.webp);
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;

        @media (max-width: 480px) {
            background-image: url(/src/assets/bg/${bg}-mobile.webp);
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

const App = () => {
  const [bg, setBg] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setBg("about");
    } else {
      setBg("");
    }
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <Wrapper bg={bg}>
        <NavigationBar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Content>
        <Footer />
      </Wrapper>
    </Provider>
  );
};

export default App;
