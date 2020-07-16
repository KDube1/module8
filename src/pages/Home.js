import React, {Fragment, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {CardMedia} from '@material-ui/core';
import {AppBar, Toolbar, IconButton, Button, Grid} from '@material-ui/core';
import ReactPlayer from 'react-player'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PeopleIcon from '@material-ui/icons/People';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {teamData} from "../teamData";
import {useHistory} from "react-router";
import {NavBar, BottomBar} from "../App";

function Home() {
    const history = useHistory();

    function changeToPlayer() {
        history.push("/players",
            {budget: teamData.budget}
        )
    }
    const [language, setLanguage] = useState(true);
    console.log("Home"+language);
    return (

        <Fragment>
            <NavBar budget={teamData.budget}/>
            <Typography variant="h1" color="textPrimary" align="center" gutterBottom>
                Build Your NBA Super Team.
            </Typography>

            <CardMedia
                component="iframe"
                height="580"
                image="https://www.youtube.com/embed/-LOluO9wJPc"
                title="Video"/>

            <br/>

            <Typography variant="h3" color="textPrimary" align="left" gutterBottom> < MonetizationOnIcon


                fontSize="large"/> {language ===true ? "Budget Wisely." : "Omlette"} </Typography>


            <br/>

            <Typography variant="h3" color="textPrimary" align="left" gutterBottom> < PeopleIcon
                fontSize="large"/> Create the Ultimate Team. </Typography>

            <br/>

            <Typography variant="h3" color="textPrimary" align="left" gutterBottom> < ShowChartIcon
                fontSize="large"/> Compare with the League. </Typography>

            <br/>

            <Grid container justify="center">
                    <Button style={{
                        height: '150px',
                        width: '400px',
                        maxWidth: '500px',
                        maxHeight: '300px',
                        minWidth: '30px',
                        minHeight: '30px'
                    }} variant="contained" color="secondary" onClick={() => changeToPlayer()}>Start Building</Button>

            </Grid>
            <br/>

        <BottomBar budget ={teamData.budget} language={language} setLanguage={setLanguage}/>
        </Fragment>


    )
}

export default Home;