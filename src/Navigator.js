import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import ListIcon from '@material-ui/icons/List';
import SettingsIcon from '@material-ui/icons/Settings';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

export default function ClippedDrawer(props) {
    const classes = useStyles();
    const { open } = props
    function switchAppIcon(index) {
        switch (index) {
            case 0:
                return <HomeIcon />
            case 1:
                return <AppsIcon />
            case 2:
                return <ListIcon />
            case 3:
                return <EqualizerIcon />
            case 4:
                return <DeviceHubIcon />
            default:
                return <AppsIcon />
        }
    }
    function switchOtherIcon(index) {
        switch (index) {
            case 0:
                return <SettingsIcon />
            default:
                return <SettingsIcon />
        }
    }
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            open={open}
            anchor="left"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <List>
                {['首页', '计算', '随机', '可视化', '画图'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {
                                switchAppIcon(index)
                            }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['设置'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {
                                switchOtherIcon(index)
                            }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}