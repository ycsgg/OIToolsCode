import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, CardContent } from '@material-ui/core';
import TabPanel from './TabPanel';
import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews';
import { Card, } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Icon from '@material-ui/core/Icon';
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },

});

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function ContestContent() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            AtCoder Regular Contest 199
                        </Typography>
                        <Typography className={classes.pos} color="textPrimary" align="center">
                            填充内容
                            <br />
                            填充内容
                            <br />
                        </Typography>
                        <Typography align="right">
                                {new Date().toLocaleString()}
                        </Typography>
                    </CardContent>
                    <Grid container>
                        <Grid item xs={10}>
                        </Grid>
                        <Grid item xs={2}>
                            <CardActions>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    endIcon={<SendIcon />}
                                    size="small"
                                >
                                    <Typography>
                                        报名
                                    </Typography>
                                </Button>

                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}
function AtCoder(props) {
    const { classes } = props;
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <ContestContent />
            </Grid>
            <Grid item xs={6}>
                <ContestContent />
            </Grid>
            <Grid item xs={6}>
                <ContestContent />
            </Grid>
            <Grid item xs={6}>
                <ContestContent />
            </Grid>
        </Grid>
    )
}

function Content(props) {
    const { classes } = props;
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <AppBar
            component="div"
            className={classes.secondaryBar}
            color="primary"
            position="static"
            elevation={0}
        >
            <Tabs value={value} textColor="inherit" onChange={handleChange}>
                <Tab textColor="inherit" label="AtCode" />
                <Tab textColor="inherit" label="CodeForces" />
                <Tab textColor="inherit" label="Luogu" />
                <Tab textColor="inherit" label="TopCoder" />
            </Tabs>
            <SwipeableViews
                axis={'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <AtCoder />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AtCoder />
                </TabPanel>
            </SwipeableViews>
        </AppBar>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);