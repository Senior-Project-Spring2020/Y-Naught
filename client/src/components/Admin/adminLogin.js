import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { adminLogin } from '../../actions/auth';
//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';

const AdminLogin = ({ setAlert, adminLogin, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        adminLogin(email, password);
    };

    //Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/home' />;
    }

    return (
        <Fragment>
        <main>
            <Grid container
                justify="center"
                alignItems="center"
                direction="column"
                style={{ height: 500 }}
            >
                <Grid item>
                    <Card style={{ display: 'inline-block', height: 300, width: 500 }}>
                        <Grid item>
                            <Typography variant="h5" className="center">
                                Admin Login
            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" className="center">
                                Please Enter Your Credentials
        </Typography>
                        </Grid>
                        <Grid item
                            container
                            justify="center"
                            alignItems="center"
                            direction="column"
                            spacing={4}
                        >
                            <Grid item>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    variant="outlined"
                                    onChange={e => onChange(e)}
                                    value={email}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    variant="outlined"
                                    onChange={e => onChange(e)}
                                    value={password}
                                />
                            </Grid>
                            <Grid item>
                                <Button type="submit" variant="contained" color="secondary" onClick={e => onSubmit(e)}>Enter</Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </main>
        </Fragment>
    );
};

AdminLogin.propTypes = {
    setAlert: PropTypes.func.isRequired,
    adminLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, adminLogin })(AdminLogin);