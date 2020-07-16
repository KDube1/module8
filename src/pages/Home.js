import React, {Fragment, useEffect, useState} from 'react';
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
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

function Home() {
    const history = useHistory();
    const [language, setLanguage] = useState("english");
    console.log("Home" + language);

    function changeToPlayer() {
        history.push("/players",
            {
                budget: teamData.budget,
                language: language,
            }
        )
    }


    return (

        <Fragment>
            <NavBar budget={teamData.budget} language={language} setLanguage={language}/>
            <Typography variant="h1" color="error" align="center" gutterBottom>
                MYSUPERTEAM
            </Typography>
            <br/>
            <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                {language === "english" ? "Build Your NBA Super Team." : "Constituez votre super équipe NBA."}
            </Typography>

            <CardMedia
                component="iframe"
                height="580"
                image="https://www.youtube.com/embed/1LJdYg5JOto"
                title="Video"/>

            <br/>


                    <Typography variant="h3" color="textPrimary" align="center" gutterBottom> < MonetizationOnIcon


                        fontSize="large"/> {language === "english" ? "Budget Wisely." : "Budgétez judicieusement."}
                    </Typography>


                    <br/>

                    <Typography variant="h3" color="textPrimary" align="center" gutterBottom> < PeopleIcon
                        fontSize="large"/> {language === "english" ? "Create the Ultimate Team." : "Créer l'équipe idéale"}
                    </Typography>

                    <br/>

                    <Typography variant="h3" color="textPrimary" align="center" gutterBottom> < ShowChartIcon
                        fontSize="large"/> {language === "english" ? "Compare with the League." : "Comparez avec la Ligue."}
                    </Typography>


            <br/>

            <Grid container justify="center">
                <Button style={{
                    height: '150px',
                    width: '400px',
                    maxWidth: '500px',
                    maxHeight: '300px',
                    minWidth: '30px',
                    minHeight: '30px',
                    marginBottom: '60px'
                }} variant="contained" color="secondary" onClick={() => changeToPlayer()}>{language ==="english" ? "Start Building":"Commencer à construire"}</Button>

            </Grid>
            <br/>

            <BottomBar budget={teamData.budget} language={language} setLanguage={setLanguage}/>
        </Fragment>


    )
}

export default Home;