import {Routes, Route} from "react-router-dom"
import SignUp from "./components/SignUp"
import PrivateComponent from './components/PrivateComponent';
import Login from "./components/Login";
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/updateProduct';


export default function Rout(){
    return (
        <Routes>

        <Route element={<PrivateComponent /> }>
        <Route path="/" element={<ProductList />}/>
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/logout" element={<h1>Logout Component</h1>} />
        <Route path="/profile" element={<h1>ProfileComponent</h1>} />
        </Route>

        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} />
        </Routes>
    )
}