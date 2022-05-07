import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddItem from './Pages/Items/AddItem/AddItem';
import ManageItems from './Pages/Items/ManageItems/ManageItems';
import MyItems from './Pages/Items/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageInventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/addItems' element={<AddItem></AddItem>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
