import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { Username,PageNotFound, Password, Profile, Register, Recovery, Reset, Test } from '../Components';

 export const router = createBrowserRouter([
  {
    path: '/',
    element: <Username/>
  },

  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/password',
    element: <Password/>
  },
  {
    path: '/profile',
    element: <Test/>
  },
  {
    path: '/recovery',
    element: <Recovery/>
  },
  {
    path: '/reset',
    element: <Reset/>
  },
  {
    path: '/*',
    element: <PageNotFound/>
  },

])

// export default function router() {
//   return (
//     <div><Register/></div>
//   )
// }
