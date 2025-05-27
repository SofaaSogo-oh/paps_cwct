import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../img/logo.png'
import { checkAuthStatus } from '../../helper/authStatus'

export const defaultNavLinks = [
    { to: "/", name: "Глава" },
    {}
];

function NavLink({ to, children }) {
    const location = useLocation();
    const isActive = location.pathname === to ? "active" : "";
    return (
        <div class={`nav-link ${isActive}`}>
            <Link to={to}>{children}</Link>
        </div>
    )
}

export default function Header() {
    return (
        <header>
            <div class="AppHeader">
                <div class="AppHeader-globalBar">
                    <Link class="AppHeader-logo" to='/'>
                        <img src={logo} alt="ReCar" height="48px" />
                    </Link>
                    <div style={{ display: "flex", justifyContent: 'space-between', width: "100%" }}>
                        <div class='nav-links'>
                            <NavLink to="/">Глава</NavLink>
                            <NavLink to="/login">Логин</NavLink>
                            <NavLink to="/404">404</NavLink>
                        </div>
                        <div class='nav-links'>
                            {checkAuthStatus() ? (
                                <NavLink to="/profile_page">Личный кабинет</NavLink>
                            ) : (
                                <>
                                    <NavLink to="/login">Вход</NavLink>
                                    <NavLink to="/register">Регистрация</NavLink>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}