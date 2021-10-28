import React, { useContext } from 'react';
import { BrowserRouter as Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    console.log(loggedUser.logged)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
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

export default PrivateRoute;