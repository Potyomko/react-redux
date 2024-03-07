import React from 'react';
 import ReactDOM from 'react-dom/client';
 import { App } from 'components/App';
 import { Provider} from "react-redux";
 import { persistor, store } from "./redux/tasks/store";
import { RouterProvider } from 'react-router-dom';
import { tasksRouter } from './redux/tasks/tasksRouter';
import { PersistGate } from 'redux-persist/integration/react';
console.log(store);
 ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
     <RouterProvider router={tasksRouter}>
         <App /> 
     </RouterProvider>
       </Provider>
       </PersistGate>
   </React.StrictMode>
 );