import React from "react";
import { makeStyles } from "@material-ui/core/";
import { Button, Typography, Paper } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
    paper: {
        backgroundColor: "black",
        color: "white",
        padding: "100px",
        outline: "none"
    },
})

export default function ModalComponent(props) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div ref={rootRef}>
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
                    container={() => rootRef.current}
                >
                    <Fade in={open} >
                        <Paper className={classes.paper} style={{height:"100vh"}}>
                            <h2 id="modal-title" >{props.title}</h2>
                            <div id="modal-description">
                                <img src={props.imageModal} alt={props.altModal} style={{ height: "200px" }} />
                                <Typography>{props.text}</Typography>
                                <button onClick={handleClose}>X</button>
                            </div>
                        </Paper>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

