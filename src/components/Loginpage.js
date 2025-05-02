import React from 'react';
import {
    Grid,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
} from '@mui/material';

function LoginPage() {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 300,
        margin: '50px auto'
    };

    const btnStyle = { margin: '8px 0' };

    return (
        <Grid> 
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h2>Sign In</h2>
                </Grid>
                <TextField
                    label="Username"
                    placeholder="Enter username"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    fullWidth
                    required
                    margin="normal"
                />
                <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>
                    Login
                </Button>
                <Typography style={{ marginTop: 10 }}>
                    Don't have an account? <a href="#">Sign Up</a>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default LoginPage;
