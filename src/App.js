import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import OurServices from "./pages/OurServices";

function App() {
  return (
    <Container>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Homepage />} />

            <Route path="signin" element={<SignIn />} />

            <Route path="ourservices" element={<OurServices />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    </Container>
  );
}

export default App;
