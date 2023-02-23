// import logo from './logo.svg';
import { FaSun, FaMoon } from 'react-icons/fa';
import './index.css';
import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router';
// import { Username,PageNotFound, Password, Profile, Register, Recovery, Reset } from './Components';
// root routes

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Root Route</div>
//   },

//   {
//     path: '/register',
//     element: <div>Register Route</div>
//   }

// ])

export default function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add("dark")
  //   } else {
  //     document.documentElement.classList.remove("dark")
  //   }
  }, [theme])
  function handleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className="App  ease-in-out duration-700  before:absolute inset-0 min-h-screen dark:bg-black dark:text-silver pb-8">
      <div className='text-left fixed
       top-2.5 right-7 rounded-full mr-1 px-0'>
        <button
          className='btn hover:border-tahiti'
          onClick={handleTheme}
        >
          {theme === 'dark' ? <FaSun className='text-silver' /> : <FaMoon className='text-black' />}

        </button>
      </div>
      <RouterProvider router={router}/>
    </main>
  );
}


