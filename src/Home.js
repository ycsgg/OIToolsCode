import { AppBar, withStyles } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews"
import { Tabs, Tab } from "@material-ui/core"
import TabPanel from "./TabPanel"
import React from "react"
import Contest from "./Contest"
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core"

const styles = (theme) => ({
    secondaryBar: {
        zIndex: 1,
    },
});

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function Home(props) {
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
                <Tab textColor="inherit" label="最近的比赛" />
                <Tab textColor="inherit" label="通知" />
            </Tabs>
            <SwipeableViews
                axis={'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <Contest />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Contest />
                </TabPanel>
            </SwipeableViews>
        </AppBar>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Home)