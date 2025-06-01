import React from "react";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";

import NavigationBar from "./components/Navigation/NavigationBar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Reservation, {
  ReservationVerificationRedirect,
} from "./pages/reservation/Reservation";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog-post/BlogPost";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  position: relative;
`;

const App = () => {
  return (
    <Wrapper>
      <NavigationBar />
      <Content>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route
            path="/reservation/verify/:verifyKey"
            element={<ReservationVerificationRedirect />}
          />
        </Routes>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default App;
