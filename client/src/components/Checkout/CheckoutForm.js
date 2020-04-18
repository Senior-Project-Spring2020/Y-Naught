import React from 'react';
import { useStripe, useElements} from '@stripe/react-stripe-js';
import { Button } from '@material-ui/core';
import { PayPalButton } from "react-paypal-button-v2";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import CardSection from './CardSection';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CheckoutForm() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const timer = React.useRef();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);



  const handleClickOpen = () => {
    timer.current = setTimeout(() => {
      console.log("Modal Open");
      setOpen(true);
    }, 4000);
  };

  const handleClose = () => {
    setOpen(false);
  };


 

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      console.log("loading");
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const HandleSubmit = () =>{
		handleButtonClick();
		handleClickOpen();
	}

  return (
    <div>
      <form autoComplete="on" >
        <TextField required id="standard-required" label="Cardholder Name" />
        <TextField required id="standard-required" label="Address" />
        <TextField required id="standard-required" label="Phone Number" />
        <CardSection />
        <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={HandleSubmit}
        >
          Confirm Payment
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
      </form>
      <PayPalButton></PayPalButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        unmountOnExit
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description" align="center">
            Payment successful! No worries though, this was just a test and no funds were taken.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={handleClose} color="primary">Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}