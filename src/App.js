import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import OrdersList from "./pages/ordersList/OrdersList";
import Order from "./pages/order/Order";



function App() {
  const { currentUser } = useSelector((state) => state.user);
  const admin = currentUser?.isAdmin || "";
  return (
    <Router>
       {!admin && <Redirect to="/login" />}
      <Switch>
      <Route exact path="/login">
          {admin ? <Redirect to="/" /> : <Login />}
        </Route>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
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
              <Route path="/orders">
                <OrdersList />
              </Route>
              <Route exact path="/order/:orderId">
              <Order />
            </Route>  
            </div>
          </>
      </Switch>
    </Router>
  );
}

export default App;