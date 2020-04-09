import React, { useState } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { adminRegister } from '../../actions/auth';
import PropTypes from 'prop-types';
//material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
const Register = ({ adminRegister, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: ''
    });

    const { email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        if (password !== password2) {
            console.log("Passwords do not match");
        } else {
            adminRegister({ email, password });
            console.log(formData);
        }

    };

    if (isAuthenticated) {
        return <Redirect to='/home' />;
    }

    return (
        <main>
            <Grid container
                justify="center"
                alignItems="center"
                direction="column"
                style={{ height: 500 }}
            >
                <Grid item>
                    <Card style={{ display: 'inline-block', height: 500, width: 700 }}>
                        <Grid item>
                            <Typography variant="h5" className="center">
                                Admin Registration
    </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" className="center">
                                Welcome! Please Create Your Admin Account
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
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Confirm Password"
                                    type="password"
                                    name="password2"
                                    variant="outlined"
                                    onChange={e => onChange(e)}
                                    value={password2}
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
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    registerFunc: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { setAlert, adminRegister })(Register);