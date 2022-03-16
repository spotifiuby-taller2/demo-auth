import {
    Box,
    Container,
    CssBaseline,
    Paper,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { loginStyles } from "./style/signin/SignIn";
import React from "react";
import logo from "./media/hexagon.png";
import { Component } from "react";

class Banner extends Component {
    render() {
        return (

            <ThemeProvider theme={this.theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={loginStyles.boxStyle}>
                        <Paper variant="outlined">
                            <img src={logo} alt={"logo"}/>
                        </Paper>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}

export {
    Banner
};
