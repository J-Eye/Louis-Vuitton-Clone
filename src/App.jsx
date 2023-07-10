import { BrowserRouter, Routes, Route, Navigate, useNavigate  } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/faq" element={<FAQ/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
