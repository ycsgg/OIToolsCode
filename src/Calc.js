import React from 'react';
import { AppBar } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews"
import TabPanel from './TabPanel';
import PropTypes from 'prop-types';
import Contest from './Contest'
import NumberTheory from './NumberTheory'

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default function Calc() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        < AppBar
            component="div"
            color="primary"
            position="static"
            elevation={0}
        >
            <Tabs value={value} textColor="inherit" onChange={handleChange}>
                <Tab textColor="inherit" label="数论" />
                <Tab textColor="inherit" label="多项式" disabled />
            </Tabs>
            <SwipeableViews
                axis={'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <NumberTheory />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Contest />
                </TabPanel>
            </SwipeableViews>
        </AppBar>
    )
}