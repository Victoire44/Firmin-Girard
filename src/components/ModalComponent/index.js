import React from "react";
import { makeStyles } from "@material-ui/core/";
import { Button, IconButton, Paper } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    modal: {
        overflowY: "auto",
        height: "100vh",
    },
    paper: {
        backgroundColor: "black",
        color: "white",
        padding: "100px 300px",
        outline: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "justify"
    },
    closeButton: {
        position: "absolute",
        top: "50px",
        right: "50px",
        color: "white"
    }
})

export default function ModalComponent(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button type="button" onClick={handleOpen} className={classes.block} >
                <img src={props.image} alt={props.alt} style={props.style} />
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Paper className={classes.paper} onClick={handleClose}>
                        {props.children}
                        <IconButton aria-label="Close" onClick={handleClose} className={classes.closeButton}><CloseIcon /></IconButton>
                    </Paper>
                </Fade>
            </Modal>
        </>
    )
}
