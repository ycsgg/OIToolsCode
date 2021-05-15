import React from 'react';
import { Paper } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
    paper: {
        width: '100%',
    }
}));

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Paper className={classes.paper}>
                <Typography>
                    <Box textAlign="center">
                        这里是关于页面
                        <p />
                        不知道写点啥
                        <p />
                        先放着吧
                        <p />
                        <b>
                            Asusetic eru quionours
                        </b>
                    </Box>
                </Typography>
            </Paper>
        </div>
    )
}