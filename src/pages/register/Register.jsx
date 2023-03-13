import './register.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:""
    });

    const [err, setErr] = useState(null);
    // const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]:e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:8800/api/auth/register", inputs)
            // navigate('/')
        }catch(err){
            setErr(err.response.data);
        }
    };

    return ( 
        <div className='register'>
            <div className='card'>
                <div className='left'>
                    <h1>Pawbook</h1>
                    <p>
                    Welcome to the worlds first social media for pets.
                    Here you can sign-up your fur baby for its own social media page and share stories, pictures, leave comments and help your fur baby grow its own social network.
                    </p>
                    <span>Do you have an account</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
                <div className='right'>
                    <h1>Register</h1>
                    <form>
                        <input type='text' placeholder='Username' name="username" onChange={handleChange}/>
                        <input type='email' placeholder='Email' name="email" onChange={handleChange}/>
                        <input type='password' placeholder='Password' name="password" onChange={handleChange}/>
                        <input type='text' placeholder='Name' name="name" onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;