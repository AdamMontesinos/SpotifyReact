import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ArtistDetail.css';


export function ArtistDetail(props) {
    const { id } = useParams();

    const [album, setAlbum] = useState();

    const getTrackInfo = async (id) => {

        //Aqui el print de cosas
        const headerObj = new Headers();
        headerObj.append('Content-Type', 'application/json');
        headerObj.append('Authorization', `Bearer ${window.localStorage.getItem("token")}`)

        const opt = { method: "GET", headers: headerObj }
        const url = `https://api.spotify.com/v1/albums/${id}`;

        let response = await fetch(url, opt);
        let data = await response.json();
        console.log(data);
        setAlbum(data)
    }

    useEffect(() => {
        getTrackInfo(id);
    }, []);

    return (
        <div>
            {
                album &&
                <>
                    <div className='padre'>
                        <div>
                            <div className='cositas'> 
                                <h1>{album.name}</h1>
                            </div>
                            <a>Data: {album.release_date}</a>
                            <br></br>
                            <a>Cançons: {album.total_tracks}</a>
                            <br></br>
                            <a>Valoració: {album.popularity}</a>
                            <div>
                                
                            </div>
                        </div>
                        <div className='imatge'>
                            <img src={album.images[0].url}></img>
                        </div>
                    </div>
                </>

            }
        </div>
    )
}