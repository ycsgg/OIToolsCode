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
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import { Link, Link as RouterLink } from 'react-router-dom';

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

function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

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
    function switchAppLinks(index) {
        switch (index) {
            case 0:
                return "/"
            case 1:
                return "/calc"
            case 2:
                return "/random"
            case 3:
                return "/visual"
            case 4:
                return "/draw"
            default:
                return "/"
        }
    }
    function switchOtherIcon(index) {
        switch (index) {
            case 0:
                return <SettingsIcon />
            case 1:
                return <InfoIcon />
            case 2:
                return <HelpIcon />
            default:
                return <SettingsIcon />
        }
    }
    function switchOtherLinks(index) {
        switch (index) {
            case 0:
                return "/setting"
            case 1:
                return "/about"
            case 2:
                return "/help"
            default:
                return "/setting"
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
                    <ListItemLink
                        to={switchAppLinks(index)}
                        primary={text}
                        icon={switchAppIcon(index)} />
                ))}
            </List>
            <Divider />
            <List>
                {['设置', '关于', '帮助'].map((text, index) => (
                    <ListItemLink
                        to={switchOtherLinks(index)}
                        primary={text}
                        icon={switchOtherIcon(index)} />
                ))}
            </List>
        </Drawer>
    );
}