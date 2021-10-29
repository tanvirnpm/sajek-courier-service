import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import AddANewService from "./Components/AddANewService/AddANewService";
import Home from "./Components/Home/Home";
import MyOrders from "./Components/MyOrders/MyOrders";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Shared/Login/Login";
import PrivateRoute from "./Functions/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState({
    logged: false
  })
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loggedUser.logged ? (
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
