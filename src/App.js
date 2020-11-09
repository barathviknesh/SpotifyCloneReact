import React, {useEffect , useState} from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
import {getTokenFromUrl} from "./spotify";

import SpotifyWebApi from "spotify-web-api-js";

const spotify =new SpotifyWebApi();


function App() {

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
  const _token = hash.access_token;

  if(_token){
    setToken(_token);

    dispatch({
      type: "SET_TOKEN",
      token: _token,
    })

    spotify.setAccessToken(_token);
    spotify.getMe().then((user) => {
      
    dispatch({
      type: 'SET_USER',
      user: user

    });   
  });

  spotify.getUserPlaylists().then((playlists) => {
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: playlists,
    });
    console.log("play", playlists);
  });

  spotify.getPlaylist("37i9dQZEVXcPKIuikQJJeF").then((response)=>{
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: response,
    })
  })
}
    console.log("here is the token :", token);

  },[]);

 
  console.log("ur details",user);

  console.log("ur token",token);

  return (
    <div className="app">
  {token ? <Player spotify={spotify} /> : <Login/>}
  </div>
  );

};
export default App;
