import {
  TextField,
  InputAdornment,
  IconButton,
  Alert,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import SignInSlice from "./SignInSlice";
import rabbit from "../../images/rabbit.jpg";
import logo from "../../images/logo192.png";

function SignIn({ checkLog }) {
  const [emailAdress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [checkshowpassword, setCheckshowpassword] = useState(true);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setCheckshowpassword(!checkshowpassword);
  };

  const handleEmailChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleMouseDownPassWord = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    dispatch(
      SignInSlice.actions.checkLogIn({
        emailAdress: emailAdress,
        password: password,
      })
    );
    if (checkLog) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <div style={{ margin: 10 }}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <img src={rabbit} alt="logo"></img>
          </Grid>
          <Grid item xs={12}>
            <h2>Sign in to Minimal</h2>
          </Grid>
          <Grid item xs={11}>
            <p>Enter your details below.</p>
          </Grid>
          <Grid item xs={1}>
            <img src={logo} alt="7 color" width={"50"} />
          </Grid>
        </Grid>
      </div>

      <Alert sx={{ m: 1 }} severity="info">
        Use email: <b>demo@minimals.cc</b> / password: <b>demo1234</b>{" "}
      </Alert>
      <TextField
        value={emailAdress}
        onChange={handleEmailChange}
        sx={{ m: 1, width: "95%" }}
        label="Email address"
      ></TextField>
      <TextField
        sx={{ m: 1, width: "95%" }}
        label="Password"
        type={checkshowpassword ? "password" : "text"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visible"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassWord}
                edge="end"
              >
                {checkshowpassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    m: 1,
                    color: green["A700"],
                    "&.Mui-checked": {
                      color: green["A700"],
                    },
                  }}
                />
              }
              label="Remember me"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{textAlign:"right",margin:15}}>
            <b>Forgot password?</b>
          </div>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        sx={{
          m: 1,
          backgroundColor: green["A700"],
          "&:hover": {
            backgroundColor: green["A700"],
          },
          width: "95%",
        }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          Don't have an account? <b>Get started</b>
        </p>
      </div>
      <Snackbar open={open} autoHideDuration={10}>
        <Alert severity={open ? "error" : "success"} sx={{ width: "100%" }}>
          Your email address or password is invalid
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SignIn;
