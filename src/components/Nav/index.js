import React from "react";
import { makeStyles } from "@material-ui/core/";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import { MenuItem } from '@material-ui/core';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    wrapper: {
        position: "absolute",
        top: "30px",
        left: "30px",
        zIndex: "9999",
        "& .MuiButtonBase-root": {
            color: "white",
            paddingLeft: "0",
            fontSize: "25px",
            fontWeight: "bold",
        },
        " & .MuiList-root a": {
            textDecoration: "none",
        },
        "& .MuiButton-label": {
            color: "white",
            fontWeight: "bold",
            fontSize: "40px",
            paddingLeft: 0
        },
    },
})

export default function Nav() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    
    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={classes.wrapper} onMouseEnter={handleClick} onMouseLeave={handleClose} >
            <Link to="/" isActive={() => window.location.pathname === '/'} style={{ textDecoration: "none" }}>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                >
                    Firmin-Girard
            </Button>
            </Link>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal placement="bottom-start">
                    <MenuList autoFocusItem={open} id="menu-list-grow">
                        <Link to="/introduction" isActive={() => window.location.pathname === '/introduction'} onMouseEnter={handleClick}>
                            <MenuItem>Introduction</MenuItem>
                        </Link>
                        <Link to="/biographie" isActive={() => window.location.pathname === '/biographie'}>
                            <MenuItem>Biographie</MenuItem>
                        </Link>
                        <Link to="/actualites" isActive={() => window.location.pathname === '/actualites'}>
                            <MenuItem>Actualités</MenuItem>
                        </Link>
                        <Link to="/contact" isActive={() => window.location.pathname === '/contact'}>
                            <MenuItem>Contact</MenuItem>
                        </Link>
                    </MenuList>
            </Popper>
        </div>
    )
}