import React from 'react';
import './navbar.css';
import Logo from './Images/logo.png';
import {Link}  from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { FiLogIn } from "react-icons/fi";
import { SiTestrail } from "react-icons/si";
import { SiSpeedtest } from "react-icons/si";

const Navbar = () => {
    return (
        <>
        <div className='title'>
            <div className='title logo'>
                <img src={Logo} alt="Mental Health"/>
            </div>
            <div className='title name'>Mental Health</div>
        </div>
        <div className='navbar'>
            <div className='zone left'>Logo</div>
            <div className='zone right'><Link style={{textDecoration:'none',color:'black'}} to="/"><div className='icons'><FaHome /></div><div>Home</div></Link></div>
            <div className='zone right'><Link style={{textDecoration:'none',color:'black'}} to="/Assessment"><div className='icons'><SiTestrail /><div>Assessment</div></div></Link></div>
            <div className='zone right'><Link style={{textDecoration:'none',color:'black'}} to="/Result"><div className='icons'><SiSpeedtest /></div><div>Result</div></Link></div>
            <div className='zone right'><Link style={{textDecoration:'none',color:'black'}} to="/Contact"><div className='icons'><GrContact /></div><div>Contact</div></Link></div>
            <div className='zone right'><Link style={{textDecoration:'none',color:'black'}} to="/Login"><div className='icons'><FiLogIn /></div><div>Login</div></Link></div>
        </div>
        </>
    );
}

export default Navbar;