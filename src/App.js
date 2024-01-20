import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Assessment from './components/Assessment/Assessment';
import Result from './components/Result/Result';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/Assessment" element={<Assessment />} />
                <Route path="/Result" element={<Result />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
// npm install react-router-dom
// component router v4 and element router v6