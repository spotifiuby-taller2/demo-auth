import {Component} from 'react';
import {ThemeProvider} from "@emotion/react";
import {Container, createTheme, CssBaseline, Typography} from "@mui/material";
import constants from "../others/constants";
import {getToGateway} from "../others/utils";

class SignUpEnd extends Component {
    constructor(props) {
        super(props);

        this.theme = createTheme();
    }

    componentDidMount() {
        const userId = window.location
                             .href
                             .split(constants.SIGN_UP_END_URL + "/")[1];

        getToGateway(constants.USERS_HOST
              + constants.SIGN_UP_END_URL
              + "/"
              + userId, "").then( (response) => {
                if(response.error) {
                    alert(response.error);
                }

                else {
                    alert("Cuenta confirmada. Por favor volver a la app.");
                    window.close();
                }
                }
            );
    }

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                        <Typography component="h1"
                                    variant="h5"
                                    align={"center"}
                        >Un momento por favor...
                        </Typography>
                </Container>
            </ThemeProvider>
        )
    }
}

export {
    SignUpEnd
};
