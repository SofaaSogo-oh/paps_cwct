import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken'); 
    return !!token;
};

export const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token);
};

export const clearAuthToken = () => {
    localStorage.removeItem('authToken');
};

export const useAuthCheck = (isAuth = true) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (isAuth === checkAuthStatus()) navigate("/");
    }, [navigate]);
  };