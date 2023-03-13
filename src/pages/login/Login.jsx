import './login.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { FaPaw } from 'react-icons/fa'


const Login = () => {
    const [inputs, setInputs] = useState({
        username:"",
        password:""
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]:e.target.value }))
    };

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            await login(inputs);
            navigate('/')
        }   catch(err) {
            setErr(err.response.data)
        }      
    };
    const paw = <FaPaw />

    return ( 
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <h1>{paw}</h1>
                    <p>
                    Welcome to the worlds first social media for pets.
                    Here you can sign-up your fur baby for its own social media page and share stories, pictures, leave comments and help your fur baby grow its own social network.
                    </p>
                    <span>Don't have an account</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type='text' placeholder='Username' name='username' onChange={handleChange}/>
                        <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;