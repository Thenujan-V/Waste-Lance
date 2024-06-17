import React from 'react';
import { loginStyle } from '../Components/Style';

function LoginPage() {
  return (
    <div className='login'>
        <div className="container-fluid d-flex loginPage">
        <div className="row flex-grow-1">
            <div className="col-md-6 d-none d-md-flex bg-image">
                
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="login-form">
                <h2 className='text-center'>Let's you in</h2>
                <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn">Login</button>
                </form>
                <div className="mt-3 links">
                <a href="#" className="d-block mt-3">Forgot Password?</a>
                <p>Don't have an account?<a href="/register-options" className="/register-options"> Sign Up</a></p>
                </div>
            </div>
            </div>
        </div>
        </div>    
    </div>
  );
}

export default LoginPage;
