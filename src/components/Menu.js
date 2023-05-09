import React from 'react';
import { loginUri } from '../spotifyKeys';
import '../styles/Menu.css';
import { TokenContext } from './Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


export function Menu(){
    function logout() {
        localStorage.clear();
        window.location.href = '/';
    }
    const[token, setToken] = useContext(TokenContext);

    return (
    <div className="navigationContainer">
        <nav>
            <ul>
                <li><Link to="/"><img className="logo" alt="logo" src={require(`../img/logo.webp`)} /></Link></li>
                <li><Link to="/search">Albums</Link></li>
                <li><Link to="/list">Songs</Link></li>
                {
                    token ?
                        <li><Link onClick={()=>logout()}>Log Out</Link></li>
                        :
                        <li><Link to={loginUri}>Log In</Link></li>
                }
            </ul>
        </nav>
        <div>
            <h1>Benvinguts a Spotify</h1>
        </div>
    </div>    
    )
}

    