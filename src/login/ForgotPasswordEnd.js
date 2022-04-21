import {
    Box,
    Button,
    Container, createTheme,
    CssBaseline,
    TextField,
    Typography
  } from "@mui/material";
  import { ThemeProvider } from "@emotion/react";
  import { loginStyles } from "../style/signin/SignIn";
  import {getSHAOf, postToGateway} from "../others/utils";
  import constants from "../others/constants";
  import React, { useState } from "react";
  
  const ForgotPasswordEnd = () => {

    const [theme] = useState( createTheme() );
  
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
        setPasswordErr('');
      }
  
  
    const handleButton = () => {
      
      if ( password !== repeatPassword ){
          setPasswordErr("No coincide con la contraseña ingresada");
          return;
      }

      if (password.length < constants.PASSWORD_MIN_LEN) {
            alert("La contraseña debe tener al menos 10 caracteres;");
            return;
      }
  
      const userId = window.location
                            .href
                            .split(constants.FORGOT_PASSWORD_URL + "/")[1];

        const requestBody = {
            password: getSHAOf( getSHAOf( password ) ),

            redirectTo: constants.USERS_HOST + constants.FORGOT_PASSWORD_URL
                                             + "/"
                                             + userId
        }

      postToGateway(requestBody)
        .then(response => {
            if (response.error !== undefined) {
              alert(response.error);
            } else {
              alert(response.result);
              window.close();
            }
          }
        );
    }
  
      return (
        <ThemeProvider theme={ theme }>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={loginStyles.boxStyle}>
              <Typography component="h1" variant="h5"
              >Ingresá tu nueva contraseña
              </Typography>
  
              <div> <br /> </div>
  
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  onChange = {handlePasswordChange}
                  value = { password }
                  margin="normal"
                  required
                  fullWidth
                  label="Nueva contraseña"
                  name="password"
                  type="password"
                  autoFocus
                />

                <TextField
                  onChange = {handleRepeatPasswordChange}
                  value = { repeatPassword }
                  margin="normal"
                  required
                  fullWidth
                  label="Repetir contraseña"
                  name="repeatPassword"
                  type="password"
                  autoFocus
                />
                {
                    passwordErr &&
                    (<p>
                        {passwordErr}
                    </p>)
                    
                }
  
                <Button
                  onClick={ handleButton }
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >Cambiar contraseña
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
  }
  
  export {
    ForgotPasswordEnd
  };