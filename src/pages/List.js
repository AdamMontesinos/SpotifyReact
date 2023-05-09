import React, {useContext, useState} from 'react';
import { TokenContext } from '../components/Context';
import {Menu} from '../components/Menu';
import { Link } from 'react-router-dom';

export function List(props){

    const[token, setToken] = useContext(TokenContext)

    const[tracks, setTracks] = useState([]);

    const[txtSearch, setTextSearch] = useState("");

    const changeInput= (e) =>{
        setTextSearch(e.target.value);
    }

    const searchSpotify = async (e) =>{
        e.preventDefault();
        
        //Aqui el print de cosas
        const headerObj = new Headers();
        headerObj.append('Content-Type', 'application/json');
        headerObj.append('Authorization', `Bearer ${window.localStorage.getItem("token")}`)

        const opt = {method: "GET", headers: headerObj}
        const url = `https://api.spotify.com/v1/search?q=${txtSearch}&type=track`;

        let response = await fetch(url, opt);
        let data = await response.json();
        console.log(data.tracks.items);
     	setTracks(data.tracks.items);  
    }

    return (
    <div>
        <Menu />
        <form onSubmit={searchSpotify}>
            <input type="text" placeholder="Busca Canción..." onChange={changeInput}></input>
            <button type="submit">Buscar</button>
        </form>

        {
            tracks.map((track)=>
                <Link to={`${track.preview_url}`}>
                     <div key={track.id} className="baby">
                        {track.name}
                    </div>
                </Link>
            )

        }
    </div>
    )
}