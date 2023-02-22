import { useState } from 'react';
import '../index.css';
import Blogger from './Blogger';

const Home = () => {
    const [name, setName] = useState({ surname: true });
    const [status, setStatus] = useState('very rich man');
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur', author: 'Daniel' },
        { id: 2, title: 'Mali meets Canada', snippet: 'Lorem ipsum dolor sit amet consectetur', author: 'Mark' },
        { id: 3, title: 'How to defeat self', snippet: 'Lorem ipsum dolor sit amet consectetur', author: 'Daniel' },
    ]);

    const handleClick = () => {
        setName(!names.surname);
        setStatus('also wealthy')
    }

    let names = name.surname ? "Dangote" : "Folake";

    const handleClickAgain = (name, ev) => {
        console.log('hello ' + name, ev.timeStamp);
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=> blog.id !== id)
        setBlogs(newBlogs);
    }

    function formatDate(date) {
        if (date < 10) {
            return "0" + date            
        }        
    }

    function formatDay(day) {
        switch (day) {
            case 2:
                return 'Monday'
                break;
            case 3:
                return 'Tuesday'
                break;
            case 4:
                return 'Wednesday'
                break;
            case 5:
                return 'Thursday'
                break;
            case 6:
                return 'Friday'
                break;
            case 7:
                return 'Saturday'
                break;

            default:
                return 'Sunday'
                break;
        }
    }

    function formatMonth(month) {
        switch (month) {
            case 2:
                return "February"                
                break;
            case 3:
                return "March"                
                break;
            case 4:
                return "April"                
                break;
            case 5:
                return "May"                
                break;
            case 6:
                return "June"                
                break;
            case 7:
                return "July"                
                break;
            case 8:
                return "August"                
                break;
            case 9:
                return "September"                
                break;
            case 10:
                return "October"                
                break;
            case 11:
                return "November"                
                break;
            case 12:
                return "December"                
                break;
        
            default:
                return "January"
                break;
        }
        
    }

    function getDate() {
        const date = new Date();
        const today = formatDay(date.getDay());
        const todate= formatDate(date.getDate());
        const month = formatMonth(date.getMonth());
        const year= date.getFullYear();
        let display = document.querySelector('p.display');
        display.innerHTML=`${today}, ${todate} ${month}, ${year}`; 
        // let display=`${today}, ${todate} ${month}, ${year}`;
    }

setInterval(getDate, 1000);

    return (
        <div className="Home">
            <h2>Home</h2>
            <p>{names} is {status}</p><br />
            <p className='display'></p>
            <div>

                {/* {blogs.map((item)=>(
                <div className="preview" key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.snippet}</p><br />
                </div>
               ))} */}

                <Blogger blogs={blogs} title='All blogs' handleDelete={handleDelete} />
                {/* <Blogger blogs = {blogs.filter((blog)=> blog.author=== 'Daniel')} title ="Daniel's Blogs"/> */}

            </div>

            {/* <button onClick={handleClick}>Click</button>
            <button onClick={ (ev)=>handleClickAgain('Peter', ev)}
            >Click me</button> */}

        </div>
    )
}

export default Home