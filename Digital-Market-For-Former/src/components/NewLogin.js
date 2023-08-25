import './style.css'
import {Link,useNavigate} from 'react-router-dom';
import {useState } from "react"

import axios from 'axios';

function NewLogin() {
       
    let [logindetails, setlogindetails] = useState({ email: "", password: ""})

    const navigate = useNavigate();


    const loginValidation = (event) => {
        event.preventDefault();
        if (logindetails.email === '' || logindetails.password === '') {
            alert('Please fill all fields');
            return;
        } else {
            console.log('sending request using axios');
            axios.post('http://localhost:8080/customers/signin', logindetails)
            .then(response => {
                sessionStorage.setItem('userData', JSON.stringify(response.data));
                console.log('Login Successful', response.data);
                navigate('/homepage');
            })
            .catch(error => {
                console.log('Error:', error);
            });
        }
     
     }

    return (
        <div>
            <br></br>
             <h1>Welcome to AgriMarket Connect</h1>
             
             <br></br>
            <form >
                {/* <!-- Headings for the form --> */}
                <div className="headingsContainer">
                    <h3>Sign in</h3>
                    <p>Sign in with your username and password</p>
                </div>
        
                {/* <!-- Main container for all inputs --> */}
                <div className="mainContainer">
                    {/* <!-- Username --> */}
                    <label for="username">Your Emailid</label>
                    <input type="text" placeholder="Enter Your Emailid" name="username" value={logindetails.email} onChange={(event) => { setlogindetails({ ...logindetails, email: event.target.value }) }} required />

                    <br />

                    {/* <!-- Password --> */}
                    <label for="pswrd">Your password</label>
                    <input type="password" placeholder="Enter Password" name="pswrd" value={logindetails.password} onChange={(event) => { setlogindetails({ ...logindetails, password: event.target.value }) }} required />

                    {/* <!-- sub container for the checkbox and forgot password link --> */}
                    <div className="subcontainer">
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                        <p className="forgotpsd"> <a href="#">Forgot Password?</a></p>
                    </div>



                    <button type="submit"  className="btn btn-primary" onClick={(loginValidation)}>Login</button>

                    {/* <!-- Sign up link --> */}
                    <p className="register">Not a member?
                    <Link to="/registration">
                       
                        <button type="button" className="btn btn-primary">Register</button>
                        </Link>
                        </p>

                </div>
            </form>
        </div>
    );


}

export default NewLogin;
