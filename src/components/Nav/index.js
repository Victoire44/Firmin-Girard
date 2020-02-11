import React from "react";
import { makeStyles } from "@material-ui/core/";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import {Menu, MenuItem} from '@material-ui/core';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    wrapper: {
        position: "absolute",
        top: "30px",
        left: "30px",
        zIndex: "9999",
        "& .MuiButtonBase-root": {
            paddingLeft: 0
        },
        "& .MuiButton-label": {
            color: "white",
            fontWeight: "bold",
            fontSize: "40px",
            paddingLeft: 0
        }
    },
    menuItems: {
        color: "white",
        paddingLeft: "0",
        fontSize: "25px",
        fontWeight: "bold",


    }
})

export default function Nav() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.wrapper}>
            <Button
                className={classes.menu}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                Firmin-Girard
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal placement="bottom-start">
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow">
                        <Link to="/Introduction" isActive={() => window.location.pathname === '/'}
>
                        <MenuItem onClick={handleClose} className={classes.menuItems}>Introduction</MenuItem>
                        </Link>
                        <MenuItem onClick={handleClose} className={classes.menuItems}>biographie</MenuItem>
                        <MenuItem onClick={handleClose} className={classes.menuItems}>Actualités</MenuItem>
                        <MenuItem onClick={handleClose} className={classes.menuItems}>contact</MenuItem>
                    </MenuList>
                </ClickAwayListener>
            </Popper>
        </div>
    )
}