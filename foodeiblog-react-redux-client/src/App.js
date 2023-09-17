import { Provider } from 'react-redux';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { store } from './Redux/Store';
import { routes } from './Router/Router';

function App() {
  return (
    <div className="max-w-7xl mx-auto"> 
   { <Provider store={store}>
        <RouterProvider router={routes} />
        <Toaster />
      </Provider>}
     
    </div>
  );
}

export default App;
