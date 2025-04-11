import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import NavigationBar from "./components/Navigation/NavigationBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.div`
    flex-grow: 1;
    padding: 1rem 4rem;
`;

function App() {
    return (
        <Wrapper>
            <NavigationBar />
            <Content>
                <Routes>
                    <Route path="/" element={<Contact />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/services" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Home />} />
                </Routes>
            </Content>
            <Footer />
        </Wrapper>
    );
}

export default App;
