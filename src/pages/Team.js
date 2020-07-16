import React, {Fragment, useState} from 'react';
import {playerData, teamData} from "../teamData";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ToggleButton from "@material-ui/lab/ToggleButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Card from "@material-ui/core/Card";
import {BottomBar, NavBar} from "../App";
import {useHistory} from "react-router";
import NothingHere from "./404";
import {Button} from "@material-ui/core";

let chosenPlayersImg = [];
let ppgArray = [];
let astArray = [];
let trbArray = [];
let nameArray = [];

function Team() {
    const history = useHistory();
    if (history.location.state === undefined) {
        return <NothingHere/>
    }

    const [budget, setBudget] = useState(history.location.state.budget)

    function changeToHome() {
        history.push("/",
            {budget: budget}
        )
    }

    function changeToPlayers() {
        history.push("/players",
            {budget: budget}
        )
    }
    return (
        <Fragment>
            <NavBar budget={budget}/>
            <Typography variant="h2" color="textSecondary" align="left" gutterBottom> My Team </Typography>
            <Grid container spacing={3}>
                <DisplayPlayers/>
            </Grid>
            <br/>


            <Typography variant="h2" color="textSecondary" align="left" gutterBottom> Totals </Typography>
            <Grid container spacing={3}>
                <DisplayTotals/>
            </Grid>


            <Typography variant="h2" color="textSecondary" align="left" gutterBottom> Player Averages </Typography>
            <Grid container spacing={3}>
                <DisplayAverages/>
            </Grid>

            <Typography variant="h2" color="textSecondary" align="left" gutterBottom> NBA Team Averages </Typography>
            <Grid container spacing={3}>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h3">111.4</Typography>
                            <Typography color="textSecondary" variant="h4"> Points</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>

                        <CardContent>
                            <Typography variant="h3">24.3</Typography>
                            <Typography color="textSecondary" variant="h4"> Assists</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h3">44.9</Typography>
                            <Typography color="textSecondary" variant="h4"> Rebounds</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container justify="center" spacing={3}>
                <Grid item>
                    <Button style={{
                        height: '80px',
                        width: '300px',

                    }} variant="contained" color="default" onClick={() => changeToPlayers()}>Back</Button>
                </Grid>
                <Grid item>
                    <Button style={{
                        height: '80px',
                        width: '300px',

                    }} variant="contained" color="default" onClick={() => changeToHome()}>Home</Button>

                </Grid>

            </Grid>
            <br/>
            <br/>


            <BottomBar budget={budget}/>
        </Fragment>

    );
}

function DisplayPlayers() {
    for (var key in playerData) {
        if (playerData.hasOwnProperty(key)) {
            if (playerData[key].selected) {
                if (!chosenPlayersImg.includes(playerData[key].src)) {
                    chosenPlayersImg.push(playerData[key].src);
                    ppgArray.push(playerData[key].PPG);
                    astArray.push(playerData[key].AST);
                    trbArray.push(playerData[key].TRB);
                    nameArray.push(playerData[key].name);
                }
            }
        }
    }

    for (let i = 0; i < chosenPlayersImg.length; i++) {
        for (var key in playerData) {
            if (playerData[key].src == chosenPlayersImg[i]) {
                if (!playerData[key].selected) {
                    chosenPlayersImg.splice(i, 1);
                    ppgArray.splice(i, 1);
                    astArray.splice(i, 1);
                    trbArray.splice(i, 1);
                    nameArray.splice(i, 1);
                }
            }
        }
    }

    return (
        chosenPlayersImg.map((URL, index) => (


            <Grid key={URL} item>
                <Card>
                    <CardHeader

                        title={nameArray[index]}
                    />
                    <CardMedia
                        style={{height: "258px"}}
                        image={chosenPlayersImg[index]}
                    />
                </Card>
            </Grid>


        )));

}

function DisplayTotals() {
    let totalPoints = 0.0;
    let totalAssists = 0.0;
    let totalRebounds = 0.0;
    for (let i = 0; i < ppgArray.length; i++) {
        totalPoints += ppgArray[i];
        totalAssists += astArray[i];
        totalRebounds += trbArray[i];
    }
    return (
        <Fragment>
            <Grid item>
                <Card>


                    <CardContent>
                        <Typography variant="h3">{Number(totalPoints).toFixed(1).toString()}</Typography>
                        <Typography color="textSecondary" variant="h4"> Points</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item>
                <Card>

                    <CardContent>
                        <Typography variant="h3">{Number(totalAssists).toFixed(1).toString()}</Typography>
                        <Typography color="textSecondary" variant="h4"> Assists</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item>
                <Card>
                    <CardContent>
                        <Typography variant="h3">{Number(totalRebounds).toFixed(1).toString()}</Typography>
                        <Typography color="textSecondary" variant="h4"> Rebounds</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Fragment>


    );

}

function DisplayAverages() {
    let totalPoints = 0.0;
    let totalAssists = 0.0;
    let totalRebounds = 0.0;
    let averagePoints = 0.0;
    let averageAssists = 0.0;
    let averageRebounds = 0.0;
    for (let i = 0; i < ppgArray.length; i++) {
        totalPoints += ppgArray[i];
        totalAssists += astArray[i];
        totalRebounds += trbArray[i];
    }
    if (ppgArray.length > 0) {
        averagePoints += (totalPoints / ppgArray.length);
        averageAssists += (totalAssists / astArray.length);
        averageRebounds += (totalRebounds / trbArray.length);
    }

    return (
        <Fragment>
            <Grid item>
                <Card>


                    <CardContent>
                        <Typography variant="h3">{Number(averagePoints).toFixed(1).toString()}</Typography>
                        <Typography color="textSecondary" variant="h4"> Points</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item>
                <Card>

                    <CardContent>
                        <Typography variant="h3">{Number(averageAssists).toFixed(1).toString()}</Typography>
                        <Typography color="textSecondary" variant="h4"> Assists</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item>
                <Card>
                    <CardContent>
                        <Typography variant="h3">{Number(averageRebounds).toFixed(1).toString()}</Typography>
                        <Typography color="textSecondary" variant="h4"> Rebounds</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Fragment>
    );

}

export default Team;