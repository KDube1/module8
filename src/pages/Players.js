import React, {Fragment, useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Button, Grid} from '@material-ui/core';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {teamData, playerData} from '../teamData';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {BottomBar, NavBar, setBudget} from "../App";
import {useHistory} from "react-router";
import NothingHere from "./404";
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

import * as reactDOM from "react-dom";
import {width} from "@material-ui/system";

function Players() {

    const history = useHistory();
    if (history.location.state === undefined) {
        return <NothingHere/>
    }

    const [language, setLanguage] = useState(history.location.state.language);



    const [budget, setBudget] = useState(history.location.state.budget)
    function changeToHome() {
        history.push("/",
            {budget: budget,
            language:language}
        )
    }

    function changeToTeam() {
        history.push("/team",
            {budget: budget,
            language:language}
        )
    }

    const [lowryselected, setLowrySelected] = useState(playerData["lowry"].selected);
    const [curryselected, setCurrySelected] = useState(playerData["curry"].selected);
    const [lillardselected, setLillardSelected] = useState(playerData["lillard"].selected);
    const [simmonsselected, setSimmonsSelected] = useState(playerData["simmons"].selected);
    const [hardenselected, setHardenSelected] = useState(playerData["harden"].selected);
    const [doncicselected, setDoncicSelected] = useState(playerData["doncic"].selected);
    const [bookerselected, setBookerSelected] = useState(playerData["booker"].selected);
    const [mitchellselected, setMitchellSelected] = useState(playerData["mitchell"].selected);
    const [lebronselected, setLebronSelected] = useState(playerData["lebron"].selected);
    const [tatumselected, setTatumSelected] = useState(playerData["tatum"].selected);
    const [kawhiselected, setKawhiSelected] = useState(playerData["kawhi"].selected);
    const [butlerselected, setButlerSelected] = useState(playerData["butler"].selected);
    const [siakamselected, setSiakamSelected] = useState(playerData["siakam"].selected);
    const [giannisselected, setGiannisSelected] = useState(playerData["giannis"].selected);
    const [zionselected, setZionSelected] = useState(playerData["zion"].selected);
    const [davisselected, setDavisSelected] = useState(playerData["davis"].selected);
    const [loveselected, setLoveSelected] = useState(playerData["love"].selected);
    const [jokicselected, setJokicSelected] = useState(playerData["jokic"].selected);
    const [embiidselected, setEmbiidSelected] = useState(playerData["embiid"].selected);
    const [bamselected, setBamSelected] = useState(playerData["bam"].selected);

    const selectedArray = [setLowrySelected, setCurrySelected, setLillardSelected, setSimmonsSelected,
    setHardenSelected,setDoncicSelected,setBookerSelected,setMitchellSelected,
    setLebronSelected,setTatumSelected,setKawhiSelected,setButlerSelected,
    setSiakamSelected,setGiannisSelected,setZionSelected,setDavisSelected,
    setLoveSelected,setJokicSelected,setEmbiidSelected,setBamSelected];

    const playerNames = ["lowry", "curry", "lillard", "simmons",
        "harden", "doncic", "booker", "mitchell",
        "lebron", "tatum", "kawhi","butler",
    "siakam", "giannis", "zion", "davis",
    "love", "jokic", "embiid", "bam"];

    const [alert, toggleAlert] = useState(false);
    const [selectedtoast, toggleSelectedToast] = useState(false);
    const [removedtoast, toggleRemovedToast] = useState(false);


    function togglePlayer(playerName) {

        if (!playerData[playerName].selected) {
            if (budget - playerData[playerName].value >= 0) {
                setBudget(budget + -1 * playerData[playerName].value);
                teamData.budget = teamData.budget + -1 * playerData[playerName].value;
                playerData[playerName].selected = !playerData[playerName].selected;
                const index = playerNames.indexOf(playerName);
                selectedArray[index](true);
                toggleSelectedToast(true);
            } else {
                toggleAlert(true);
                const index = playerNames.indexOf(playerName);
                selectedArray[index](false);

            }
        } else {
            setBudget(budget + playerData[playerName].value);
            teamData.budget = teamData.budget + playerData[playerName].value;
            playerData[playerName].selected = !playerData[playerName].selected;
            const index = playerNames.indexOf(playerName);
            selectedArray[index](false);
            toggleRemovedToast(true);

        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        toggleAlert(false);
        toggleSelectedToast(false);
        toggleRemovedToast(false);
    }

    return (

        <Fragment>

            <NavBar budget={budget} language={language} setLanguage={setLanguage}/>
            <Snackbar open={alert} autoHideDuration={1200} onClose={handleClose}>
                <Alert  variant={"filled"} onClose={handleClose} severity="error">
                    Error! Over Budget!
                </Alert>
            </Snackbar>

            <Snackbar open={selectedtoast} autoHideDuration={1200} onClose={handleClose}>
                <Alert variant={"filled"} onClose={handleClose} severity="success">
                    Player Added!
                </Alert>
            </Snackbar>

            <Snackbar open={removedtoast} autoHideDuration={1200} onClose={handleClose}>
                <Alert variant={"filled"} onClose={handleClose} severity="info">
                    Player Removed!
                </Alert>
            </Snackbar>
            <br/>
            <Typography  variant="h3" color="textSecondary" align="left" gutterBottom> {language === "english" ? "Point guards" : "Menuer"} </Typography>
            <Grid container justify="flex-start" spacing={3}>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Kyle Lowry"
                            subheader="#7, Raptors"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.lowry.src}
                            title="Lowry"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $20
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={lowryselected}
                            >
                                <CheckCircleIcon onClick={() => togglePlayer('lowry')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Stephen Curry"
                            subheader="#30, Warriors"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.curry.src}
                            title="Curry"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $35
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={curryselected}>
                                <CheckCircleIcon onClick={() => togglePlayer('curry')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>

                </Grid>

                <Grid item>
                    <Card>
                        <CardHeader

                            title="Damian Lillard"
                            subheader="#0, Trail Blazers"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.lillard.src}
                            title="Lillard"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $30
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={lillardselected}
                               >
                                <CheckCircleIcon onClick={() => togglePlayer('lillard')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>

                </Grid>

                <Grid item>
                    <Card>
                        <CardHeader

                            title="Ben Simmons"
                            subheader="#25, Sixers"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.simmons.src}
                            title="Simmons"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $15
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={simmonsselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('simmons')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>

                </Grid>
            </Grid>
            <br/>
            <Typography variant="h3" color="textSecondary" align="left" gutterBottom> {language === "english"?"Shooting Guards": "Arrière"} </Typography>
            <Grid container justify="flex-start" spacing={3}>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="James Harden"
                            subheader="#13, Rockets"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.harden.src}
                            title="Harden"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $40
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={hardenselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('harden')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Luka Dončić"
                            subheader="#77, Mavericks"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.doncic.src}
                            title="doncic"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $35
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={doncicselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('doncic')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>

                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Devin Booker"
                            subheader="#1, Suns"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.booker.src}
                            title="Booker"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $25
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={bookerselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('booker')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>

                </Grid>

                <Grid item>
                    <Card>
                        <CardHeader

                            title="Donovan Mitchell"
                            subheader="#45, Jazz"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.mitchell.src}
                            title="Mitchell"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $20
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={mitchellselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('mitchell')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>

                </Grid>
            </Grid>

            <br/>
            <Typography variant="h3" color="textSecondary" align="left" gutterBottom> {language === "english" ?"Small Forwards":" Ailier"} </Typography>

            <Grid container justify="flex-start" spacing={3}>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Lebron James"
                            subheader="#23, Lakers"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.lebron.src}
                            title="Lebron"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $40
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={lebronselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('lebron')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Jayson Tatum"
                            subheader="#0, Celtics"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.tatum.src}
                            title="Tatum"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $20
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={tatumselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('tatum')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Kawhi Leonard"
                            subheader="#2, Clippers"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.kawhi.src}
                            title="Kawhi"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $35
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={kawhiselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('kawhi')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>


                <Grid item>
                    <Card>
                        <CardHeader

                            title="Jimmy Butler"
                            subheader="#22, Heat"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.butler.src}
                            title="Butler"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $20
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={butlerselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('butler')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
            <br/>
            <Typography variant="h3" color="textSecondary" align="left" gutterBottom> {language === "english"?"Power Fowards": "Ailier fort"} </Typography>
            <Grid container justify="flex-start" spacing={3}>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Pascal Siakam"
                            subheader="#43, Raptors"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.siakam.src}
                            title="Siakam"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $25
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={siakamselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('siakam')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Giannis A."
                            subheader="#34, Bucks"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.giannis.src}
                            title="Giannis"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $45
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={giannisselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('giannis')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Zion Williamson"
                            subheader="#1, Pelicans"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.zion.src}
                            title="Zion"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $15
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={zionselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('zion')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Anthony Davis"
                            subheader="#3, Lakers"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.davis.src}
                            title="Davis"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $30
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={davisselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('davis')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
            <br/>
            <Typography variant="h3" color="textSecondary" align="left" gutterBottom> {language ==="english"? "Centers":"Pivot"} </Typography>
            <Grid container justify="flex-start" spacing={3}>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Kevin Love"
                            subheader="#0, Cavaliers"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.love.src}
                            title="Love"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $15
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={loveselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('love')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Nikola Jokić"
                            subheader="#15, Nuggets"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.jokic.src}
                            title="Jokic"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $25
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={jokicselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('jokic')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Joel Embiid"
                            subheader="#21, Sixers"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.embiid.src}
                            title="Embiid"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $25
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={embiidselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('embiid')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader

                            title="Bam Adebayo"
                            subheader="#13, Heat"
                        />
                        <CardMedia
                            style={{height: "258px"}}
                            image={playerData.bam.src}
                            title="Bam"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $20
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ToggleButton
                                value="check"
                                selected={bamselected}
                                >
                                <CheckCircleIcon onClick={() => togglePlayer('bam')}/>
                            </ToggleButton>

                        </CardActions>

                    </Card>
                </Grid>

            </Grid>

            <Grid container justify="center" spacing={3}>
                <Grid item>
                    <Button style={{
                        height: '80px',
                        width: '300px',

                    }} variant="contained" color="default" onClick={() => changeToHome()}>{language ==="english"?"Back": "Retour" }</Button>
                </Grid>
                <Grid item>
                    <Button style={{
                        height: '80px',
                        width: '300px',

                    }} variant="contained" color="default" onClick={() => changeToTeam()}>{language ==="english"?"View Team": "Voir l'équipe" }</Button>

                </Grid>

            </Grid>
            <br/>
        <br/>
            <BottomBar budget={budget} language = {language} setLanguage = {setLanguage}/>
        </Fragment>
    )
}


export default Players;