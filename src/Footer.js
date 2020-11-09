import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {
    return (
        <div className="Footer">
        <div className="footer_left">
            <img className="footerLogo" src="https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif" alt=""></img>
            <div className="footer_songinfo">
                <h4>Spotify</h4>
                <p>The App Under Constructions</p>
            </div>
            </div>
        <div className="footer_center">
            <ShuffleIcon className="footer__green"/>
            <SkipPreviousIcon className="previous"/>
            
            <PlayCircleOutlineIcon className="play"/>
            <SkipNextIcon className="next"/>
            <RepeatIcon className="repeat"/>

            </div>
        <div className="footer_right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                <slider/>
                </Grid>
            </Grid>
            </div>


        </div>
    )
}

export default Footer
