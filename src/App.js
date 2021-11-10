import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Booking from './components/Booking/Booking';
import AddService from './components/AddService/AddService';
import MyBookings from './components/MyBookings/MyBookings';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings/ManageAllBookings';

function App() {

  return (
    <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/addService' element={<AddService/>} />
          <Route 
              path='/book/:id' element={
                <PrivateRoute>
                  <Booking/>
                </PrivateRoute>
                }
              />
          <Route 
              path='/myBookings' element={
                <PrivateRoute> 
                  <MyBookings/>
                </PrivateRoute>
                } 
              />
          <Route 
              path='/manageBookings' element={
                <PrivateRoute> 
                  <ManageAllBookings/>
                </PrivateRoute>
                } 
              />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
