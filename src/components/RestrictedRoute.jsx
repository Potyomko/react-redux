import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({component: Component, redirecTo }) => {

    const isAuthenticated = useSelector(selectIsLoggedIn)
    
return isAuthenticated ? <Navigate to={redirecTo} /> : <Component />;
};
export default RestrictedRoute;