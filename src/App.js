import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className='relative bg-slate-900'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
