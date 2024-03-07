import { App } from "components/App";
import PrivateRoute from "components/PrivateRouters";
import RestrictedRoute from "components/RestrictedRoute";
import { Task } from "components/Task/Task";
import { Home, Login, Registration } from 'pages';
import { createBrowserRouter } from "react-router-dom"

// /
// / tasks
// /login
// /register

export const tasksRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/tasks',
                element: <PrivateRoute component={Task} redirecTo='/login'/>
            },
            {
                path: '/login',
                element: <RestrictedRoute component={Login} redirecTo={'/'}/>
            },
            {
                path: '/register',
                element: <Registration component={Registration} redirecTo={'/'}/>
            }
        ]
    }
])