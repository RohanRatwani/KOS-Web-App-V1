 import Sidebar from "./components/sidebar/Sidebar";
 import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewPatient from "./pages/newPatient/NewPatient";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const loggedIn=false;
  return (

    <Router>
      
     
      <Topbar /> 

       <div className="container"> 
         <Sidebar />  
        <Switch>
        <Route exact path="/Login">
             {loggedIn ? <Redirect to="/home" /> : <Login />} 
          </Route>
          
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/NewPatient">
            <NewPatient />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;

