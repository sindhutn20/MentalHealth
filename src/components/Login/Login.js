import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
const Login = () => {
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
    
        const handleRegisterClick = () => {
          container.classList.add("active");
        };
    
        const handleLoginClick = () => {
          container.classList.remove("active");
        };
    
        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);
    
        return () => {
          registerBtn.removeEventListener('click', handleRegisterClick);
          loginBtn.removeEventListener('click', handleLoginClick);
        };
      }, []);
    return (
        <div className='body'>
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form>
                <h1>Create Account</h1>
                <span>use your email for registeration</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <span style={{fontsize:'16px'}}>use your email password</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <Link to='/Forget' style={{textDecoration:'none',color:'black'}}><h3 style={{fontweight:'lighter'}}>Forget Your Password?</h3></Link>
                <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" id="login">Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button className="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}
export default Login;