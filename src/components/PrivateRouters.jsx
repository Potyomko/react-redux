import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

const PrivateRoute = ({component: Component, redirecTo }) => {

const isLoggIn = useSelector(selectIsLoggedIn)
const isRefreshing = useSelector(selectIsRefreshing)

const isAuthenticated = isLoggIn && isRefreshing

return isAuthenticated ? <Component /> : <Navigate to={redirecTo} />;
};
export default PrivateRoute;