import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/Navigation/NavigationBar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

import styled from "styled-components";

const Container = styled.nav`
    background-color: #eeeeee;
`;

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <NavigationBar />
            <Container>
              <div>
                <h1>Tes</h1>
              </div>
            </Container>
        </Container>
    );
}

export default App;
