import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrder from './components/ManageOrder/ManageOrder';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service';
import './index.css';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/order' element={<Service />} />
          <Route path='/manageOrder' element={<ManageOrder />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
