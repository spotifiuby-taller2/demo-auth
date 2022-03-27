import {Component} from 'react';
import {ThemeProvider} from "@emotion/react";
import {Container, createTheme, CssBaseline, Typography} from "@mui/material";
import constants from "../others/constants";
import {getTo} from "../others/utils";

class SignUpEnd extends Component {
    constructor(props) {
        super(props);

        this.theme = createTheme();
    }

    componentDidMount() {
        const userId = window.location
                             .href
                             .split(constants.SIGN_UP_END_URL + "/")[1];

        getTo(constants.USERS_HOST
              + constants.SIGN_UP_END_URL
              + "/"
              + userId,
            (response) => {
                if(response.error) {
                    alert(response.error);
                }

                else {
                    alert("Cuenta confirmada. Por favor volver a la app.");
                }
            } )
    }

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                        <Typography component="h1"
                                    variant="h5"
                                    align={"center"}
                        >
                        </Typography>
                </Container>
            </ThemeProvider>
        )
    }
}

export {
    SignUpEnd
};
