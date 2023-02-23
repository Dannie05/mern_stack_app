import Avatar from '../assets/Avatar.png'
import Profile from '../assets/facebook.jpg'
import style from '../styles/utilStyles.module.css'
import { Link } from 'react-router-dom'
import {Toaster} from 'react-hot-toast';
import {useFormik}  from 'formik';


export default function Username() {
  return (
    <div className={`container `}>
      <div className="flex h-screen items-center justify-center ">
<div className='bg-clr-bg p-1 rounded-2xl hello'>


        <div className={`${style.glass} dark:bg-black bg-white`}>

          <div className="title flex items-center flex-col text-center">
            <h4 className='text-5xl font-medium '> Hello world</h4>
            <span className='py-4 text-xl  text-center text-gray-600'>Explore more by connecting with us
            </span>
          </div>

          <form action="" className='py-1 z-10 form'>
            <div className='profile flex justify-center py-4'>
              <img src={Avatar} alt="" width={100} className={style.profile_img} />
            </div>

            <div className={`textbox flex flex-col items-center gap-6 `}>
              <input type="text" placeholder='username' className={`min-w-full ${style.textbox}`} />
              <button type='submit' className={style.btn}>Let's go</button>
            </div>

            <div className="text-center ">
              <span>Not a member? <Link to="/register" className='font-bold text-red-600'>Register Now</Link></span>
            </div>

          </form>
        </div>
</div>
      </div>
    </div>
  )
}
