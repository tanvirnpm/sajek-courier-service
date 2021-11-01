import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import AddANewService from "./Components/AddANewService/AddANewService";
import Home from "./Components/Home/Home";
import ManageAllOrders from "./Components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Components/MyOrders/MyOrders";
import NotFound from "./Components/NotFound/NotFound";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import Login from "./Components/Shared/Login/Login";

export const UserContext = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState({})
  useEffect(() => {
    const getLocalStorageUser = JSON.parse(localStorage.getItem("loginUser"));
    // console.log(getLocalStorageUser);
    getLocalStorageUser && setLoggedUser(getLocalStorageUser)
  }, []);
  // console.log('logged user form local storage', loggedUser.email)
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loggedUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/my-orders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/add-a-new-service">
            <AddANewService />
          </PrivateRoute>
          <PrivateRoute path="/manage-all-orders">
            <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute path="/order/details/:id">
            <OrderDetails />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
