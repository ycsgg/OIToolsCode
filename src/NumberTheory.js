import React, { useState } from 'react';
import { AppBar, CardContent } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
const Long = require('long')

const useStyles = makeStyles({
    root: {
        minWidth: 330,
        minHeight: 350,
        maxWidth: 400,
    },
    title: {
        marginLeft: '10%',
        fontSize: 13,
        color: '#57606f'
    },
    TopText: {
        marginLeft: '10%',
        marginTop: '8%'
    },
    MidText: {
        marginLeft: '10%',
        marginTop: '5%'
    },
    button: {
        marginRight: '10%'
    }
});

var Base = 0
var Mod = 0
var Exp = 0

export default function NumberTheory() {
    const classes = useStyles()
    var [res, setRes] = useState(0)
    function test() {
        var ans = Long.fromString('1')
        if (Mod === 0) {
            return;
        }
        if (Base === 0) {
            return;
        }
        var tmpBase = Long.fromString(Base)
        var tmpExp = Long.fromString(Exp)
        var tmpMod = Long.fromString(Mod)
        console.log(tmpMod)
        while (!tmpExp.eq(Long.fromInt(0))) {
            if (tmpExp.isOdd()) {
                ans = ans.mul(tmpBase).mod(tmpMod)
            }
            tmpBase = tmpBase.mul(tmpBase).mod(tmpMod)
            tmpExp = tmpExp.div(2)
            // console.log("Mod", tmpMod)
            console.log("Base", tmpBase)
            console.log("Exp", tmpExp)
            console.log("Ans", ans)
        }
        console.log("Ans", ans)
        setRes(ans)
    }
    return (
        <AppBar
            component="div"
            color="primary"
            position="static"
            elevation={0}
        >
            <Grid container spacing={6}>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title}>
                                快速幂
                            </Typography>
                            <TextField
                                className={classes.TopText}
                                label="底数"
                                onChange={
                                    (n) => {
                                        Base = n.currentTarget.value
                                        test()
                                    }
                                }
                            >
                            </TextField>
                            <TextField
                                className={classes.MidText}
                                label="指数"
                                onChange={
                                    (n) => {
                                        Exp = n.currentTarget.value
                                        test()
                                    }
                                }
                            >
                            </TextField>
                            <TextField
                                className={classes.MidText}
                                label="模数"
                                onChange={
                                    (n) => {
                                        Mod = n.currentTarget.value
                                        test()
                                    }
                                }
                            >
                            </TextField>

                            <TextField
                                className={classes.MidText}
                                label="结果"
                                onChange={test.bind(res)}
                                value={res}
                            >
                            </TextField>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root}>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </AppBar>
    );
}