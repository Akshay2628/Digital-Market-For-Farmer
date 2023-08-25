import React, { useState } from 'react' 
import { Link } from 'react-router-dom' 

 
 
function Login() { 
   /*  const [values, setValues] = useState({ 
        email: '', 
        password: '' 
    }) 
    const [errors, setErrors] = useState({}) 
    const handleInputChange = (event) => { 
        const { name, value } = event.target; 
        setValues((prevCredentials) => ({ 
            ...prevCredentials, 
            [name]: value 
        })); 
    }; 
    const handleSubmit = async (event) => { 
        event.preventDefault(); 
        setErrors(Validation(values)); 
        console.log(values); 
        try { 
            const response = await fetch('/api/login', { 
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json' 
                }, 
                body: JSON.stringify(values) 
            }); 
 
            if (response.ok) { 
                // Handle successful login 
                console.log('Logged in successfully'); 
            } else { 
                // Handle login error 
                console.error('Login failed'); 
            } 
        } catch (error) { 
            console.error('An error occurred during login', error); 
        } 
    };  */
 
    return ( 
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
            <div className='bg-white p-3 rounded w-25'> 
                <h2>Sign-In</h2> 
                <form action="" > 
                    <div className='mb-3'> 
                        <label htmlFor="email"><strong>Email</strong></label> 
                        <input type="email" placeholder='Enter Email' name="email" 
                             className='form-control rounded-0' /> 
                       
                    </div> 
                    <div className='mb-3'> 
                        <label htmlFor="password"><strong>Password</strong></label> 
                        <input type="password" placeholder='Enter Password' name='password' 
                           className='form-control rounded-0' /> 
                        
                    </div> 
                    <button type='button' className='btn btn-success w-100 rounded-0'>Log in</button> 
                    <p></p> 
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link> 
 
 
                </form> 
            </div> 
        </div> 
    ) 
} 
 
export default Login
