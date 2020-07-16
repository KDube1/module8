import React, {useState} from "react";

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import Home from './pages/Home';
import Players from './pages/Players';
import Team from './pages/Team';
import {teamData, playerData} from './teamData'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {useHistory} from "react-router";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";


export function NavBar({budget, language, setLanguage}) {
    const history = useHistory();

    function changeToPlayer() {
        history.push("/players",
            {
                budget: budget,
                language: language,
            }
        )
    }

    function changeToHome() {
        history.push("/",
            {
                budget: budget,
                language: language,
            }
        )
    }

    function changeToTeam() {
        history.push("/team",
            {
                budget: budget,
                language: language,
            }
        )
    }

    return (


        <AppBar position='static' color='secondary'>
            <Toolbar>
                <IconButton edge='start' aria-label='menu' onClick={() => changeToHome()}>
                    <SportsBasketballIcon/>

                </IconButton>
                <Button onClick={() => changeToHome()}>{language === "english" ? "Home" : "Page d'accueil"}</Button>

                <Button onClick={() => changeToPlayer()}>{language === "english" ? "Players" : "Joueurs"}</Button>

                <Button onClick={() => changeToTeam()}>{language === "english" ? "Team" : "Équipe"}</Button>

            </Toolbar>
        </AppBar>

    );
}

const useStyles = makeStyles(() => ({
    stayOnBottom: {
        width: '100vw',
        position: 'fixed',
        bottom: '0',
        height: "3em",
        top: "auto"
    },
}));

export function BottomBar({budget, language, setLanguage}) {


    const changeLanguage = (event) => {
        setLanguage(event.target.value);
    };
    const classes = useStyles();
    console.log(language);
    return (

        <AppBar className={classes.stayOnBottom} color='secondary'>
            <Toolbar>
                <Grid container>
                <Typography variant="subtitle1" align="left">{"Budget: $" + budget.toString()}</Typography>
                </Grid>

                <Grid container justify={"flex-end"}>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="language" name="language1" value={language}
                                    onChange={changeLanguage}>
                            <FormControlLabel value={"english"} control={<Radio color="default"/>} label="English"/>
                            <FormControlLabel value={"french"} control={<Radio color="default"/>} label="Français"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Toolbar>
        </AppBar>


    )
        ;
}



