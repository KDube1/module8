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


export function NavBar({budget}) {
    const history = useHistory();

    function changeToPlayer() {
        history.push("/players",
            {budget: budget}
        )
    }

    function changeToHome() {
        history.push("/",
            {budget: budget}
        )
    }

    function changeToTeam() {
        history.push("/team",
            {budget: budget}
        )
    }


    return (


        <AppBar position='static' color='secondary'>
            <Toolbar>
                <IconButton edge='start' aria-label='menu' onClick={() => changeToHome()}>
                    <SportsBasketballIcon/>

                </IconButton>
                <Button onClick={() => changeToHome()}>Home</Button>

                <Button onClick={() => changeToPlayer()}>Players</Button>

                <Button onClick={() => changeToTeam()}>Team</Button>

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
                        <Typography variant="subtitle1" align="left">{"Budget: $" + budget.toString()}</Typography>

                <FormControl component="fieldset">
                    <RadioGroup row aria-label="language" name="language1" value={language} onChange={changeLanguage}>
                        <FormControlLabel value={true} control={<Radio color = "default" />} label="English" />
                        <FormControlLabel value={false}  control={<Radio color = "default"/>} label="French" />
                    </RadioGroup>
                </FormControl>
        </Toolbar>
</AppBar>

);
}



