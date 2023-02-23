import { createBrowserRouter} from 'react-router-dom';
import { Username,Password,PageNotFound,Profile,Recovery, Register, Reset } from './Components';

 
 export const router = createBrowserRouter([
    {
      path: '/',
      element: <Username/>
    },
  
    {
      path: '/register',
      element: <Register/>
    }
  
  ])