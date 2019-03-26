import React from "react";

import { Card, CardActions } from "rmwc/Card";
import { Snackbar } from "rmwc/Snackbar";
import { TextField } from "rmwc/TextField";

import * as Style from "./styles/config";

const LoginView = props => {
  var loginFieldStyle = props.error
    ? { width: "250px", color: "red" }
    : { width: "250px" };
  var flexDirection = "row";
  var fontSize = "26px";
  var marginTopz = "-15%";
  if (window.innerWidth < 768) {
    marginTopz = "20%";
    fontSize = "14px";
    flexDirection = "column";
  }

  return (
    <div style={Style.loginContainer}>
      <div style={Style.logoStrip} />
      <div
        className="mdl-grid"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >
        <div
          className="mdl-cell mdl-cell--4-col"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Card
              style={{
                backgroundColor: Style.themeForeground,
                width: "100%",
                height: "auto",
                alignItems: "center",
                marginTop: "30px",
                flexDirection: flexDirection
              }}
            >
              <div
                style={{
                  width: "320px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <div className="mdl-card__title" style={Style.centerVertical}>
                  <h4>Prompto X-Ray</h4>
                </div>
                <div style={{ marginTop: "10%" }} />
                <CardActions style={Style.centerVertical}>
                  <TextField
                    onChange={props.onUpdateEmail}
                    label="Email"
                    type="email"
                    style={loginFieldStyle}
                  />
                  <TextField
                    onChange={props.onUpdatePassword}
                    label="Password"
                    type="password"
                    style={loginFieldStyle}
                  />
                </CardActions>
                <CardActions style={Style.centerVertical}>
                  {props.isFetching === false ? (
                    <button
                      className="mdl-button mdl-js-button mdl-button--raised"
                      style={Style.createButton}
                      onClick={props.login}
                    >
                      Log In
                    </button>
                  ) : (
                    Style.spinner
                  )}
                </CardActions>
                <CardActions style={Style.centerVertical}>
                  <a
                    href="http://prompto.com.au/forgot.php"
                    style={{
                      color: Style.themeForegroundText,
                      marginTop: "2em"
                    }}
                  >
                    FORGOT PASSWORD
                  </a>
                </CardActions>
              </div>
              <div
                style={{
                  width: "380px",
                  height: "350px",
                  backgroundColor: Style.themeBackground,
                  paddingTop: "10%"
                }}
              >
                <h1
                  style={{
                    marginTop: "-28px",
                    fontSize: fontSize,
                    textAlign: "center"
                  }}
                >
                  DELV
                  <br /> into your
                  <br /> Managed Service
                </h1>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Snackbar
        message={props.error}
        show={props.error !== null}
        timeout={3000}
        onHide={() => {
          props.clearError();
        }}
      />
      <div style={Style.loginFooter}>
        <a href="https://delv.com" style={{ color: "#7b8188" }}>
          DELV Pty Ltd
        </a>
      </div>
    </div>
  );
};
export default LoginView;
