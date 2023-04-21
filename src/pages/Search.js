import React, {useContext, useState} from 'react';
import { TokenContext } from '../components/Context';
import {Menu} from '../components/Menu';
import { Link } from 'react-router-dom';
import '../styles/Search.css';
export function Search(props){

    const[token, setToken] = useContext(TokenContext)

    const[tracks, setAlbums] = useState([]);

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
        const url = `https://api.spotify.com/v1/search?q=${txtSearch}&type=album`;

        let response = await fetch(url, opt);
        let data = await response.json();
        console.log(data.albums.items);
     	setAlbums(data.albums.items);  
    }

    return (
    <div>
        <Menu />
        <form onSubmit={searchSpotify}>
            <input type="text" placeholder="Busca.." onChange={changeInput}></input>
            <button type="submit">Buscar</button>
        </form>

        {
            tracks.map((album)=>
                <Link to={`/artist-detail/${album.id}`}>
                    <div key={album.id} className="baby">
                        {album.name}
                        {album.images.url}
                    </div>
                </Link>
            )

        }
    </div>
    )
}