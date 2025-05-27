import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './components/Base/ErrorPage';
import Base from './components/Base/Base';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import WelcomePage from './components/WelcomePage';
import PP_edit from './components/PP/PP_edit';
import PP from './components/PP/PP';
import FooUpload from './components/FooUpload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ErrorPage />}/>
        <Route path='/' element={<WelcomePage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile_page' element={<PP />} />
        <Route path='/profile_page/edit' element={<PP_edit />} />
        <Route path='/upload' element={<FooUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
