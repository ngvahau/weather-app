import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
// import Headers from '../compoment/header';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='GoogleAuth'>
      {!isLoggedIn && (
        <GoogleLogin
          onSuccess={credentialResponse => {
            const decode = jwtDecode(credentialResponse?.credential);
            console.log(decode);
            setUser(decode); // Lưu thông tin người dùng
            setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
            // navigate('/');
            
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        
      )}
      {user && 
            <div>
                <h3>{user.name}</h3>
            </div>
        }
    </div>
  );
};

export default Login;
