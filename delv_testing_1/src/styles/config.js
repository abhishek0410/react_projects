import React from "react";
import { default as Spinner } from "react-md-spinner";

/*
const theme1 = 'rgba(241, 241, 241, 1)';
const theme2 = 'rgba(0, 0, 0, 1)';
const theme3 = 'rgba(200, 200, 200, 1)';
const theme4 = 'rgba(47, 64, 76, 1)';
const theme5 = 'rgba(0, 0, 0, 1)';
const theme6 = 'rgba(255,255,255, 1)';
const theme7 = 'rgba(60, 60, 60, 1)';
*/

const theme1 = "#FAFBFE";
const theme2 = "#222428";
const theme3 = "#FAFBFE";
const theme4 = "#00BBE3";
const theme5 = "#0097D6";
const theme6 = "#FAFBFE";
const theme7 = "#FAFBFE";

const themeForeground = theme1;
const themeForegroundText = theme2;
const themeForegroundSecondary = theme1;
const themeForegroundTitle = theme1;
const themeForegroundAction = theme5;
const themeForegroundActionText = theme6;
const themeBackground = theme3;
const themeBackgroundSecondary = theme3;
const themeBorderColor = theme4;
const themeBorderAlt = theme4;
const themeBackgroundText = theme6;
const themeNav = theme7;
const themeNavText = theme2;
const themePromptoBlue = "rgb(34, 137, 186)";

const lineColors = ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80"];
const chartBackground = "#e8e8e8";
const chartColor = "#000000";

const spinner = (
  <Spinner singleColor={"rgb(66, 165, 245)"} style={{ margin: "0 auto" }} />
);

const listContainer = {
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundColor: themeBackground,
  overflow: "auto",
  display: "block"
};

const detailContainer = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: themeBackground,
  alignItems: "center"
};

const detailCard = {
  width: "100%",
  backgroundColor: themeForeground,
  overflow: "auto"
};

const detailTitle = {
  color: themeForegroundText,
  backgroundColor: themeForegroundTitle
};

const gridItem = {
  fontWeight: "700"
};

const centerVertical = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  maxWidth: "250px"
};

const loginContainer = {
  overflowX: "auto",
  overflowY: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  background: "white",
  backgroundSize: "cover"
};

const loginFooter = {
  position: "fixed",
  backgroundColor: "#f9fbfb",
  borderTop: "1px solid #e8ebee",
  color: "#7b8188",
  padding: "10px 0 40px",
  width: "100%",
  height: "50px", //Height to be changed
  bottom: 0,
  textAlign: "center"
};

const logoStrip = {
  top: "0",
  height: "60px",
  width: "100%",
  backgroundColor: themeForegroundAction,
  backgroundSize: "contain",
  backgroundPosition: "center center",
  backgroundImage: "url(../prompto-light.svg)",
  backgroundRepeat: "no-repeat",
  border: "solid transparent 15px"
};

const chartContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "320px",
  minWidth: "274px",
  zIndex: 0
};

const tableContainer = {
  marginTop: "5em",
  padding: "1.25em 1em 1.5em",
  backgroundColor: "white"
};

const listStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "16px 20px",
  color: themeForegroundText
};

const navListStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "16px 20px",
  color: themeNavText
};

const chartCardStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: themeForeground
};

const chartTitleStyle = {
  color: themeForegroundText,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: themeForegroundTitle,
  width: "100%"
};

const foregroundTextStyle = {
  color: themeForegroundText
};

const navTextStyle = {
  color: themeNavText
};

const formTextField = {
  color: themeForegroundText,
  width: "100%",
  height: "4em"
};

const navStyle = {
  border: "0px",
  backgroundColor: themeNav,
  color: themeNavText,
  overflowX: "hidden"
};

const deleteButton = {
  marginRight: "2px",
  backgroundColor: "rgba(211, 47, 47, 1)",
  color: "white"
};

const createButton = {
  width: "45%",
  color: themeForegroundActionText,
  backgroundColor: themeForegroundAction
};

const editButton = {
  marginRight: "2px",
  backgroundColor: themeForegroundSecondary,
  color: themeBorderAlt,
  minWidth: "200px"
};

const buttonsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "100%"
};

const selectFieldStyle = {
  backgroundColor: themeForeground,
  color: themeForegroundText,
  marginBottom: "1em"
};

const textFieldStyle = {
  color: themeForegroundText,
  padding: "10px"
};

const formSelectTitle = {
  textDecoration: "underline",
  fontSize: "12px"
};

export {
  themeForeground,
  themeForegroundText,
  themeForegroundSecondary,
  themeForegroundTitle,
  themeForegroundAction,
  themeForegroundActionText,
  themeBackground,
  themeBackgroundSecondary,
  themeBorderColor,
  themeBorderAlt,
  themeBackgroundText,
  themeNav,
  themeNavText,
  themePromptoBlue,
  lineColors,
  chartBackground,
  chartColor,
  spinner,
  listContainer,
  detailContainer,
  detailCard,
  detailTitle,
  gridItem,
  centerVertical,
  loginContainer,
  loginFooter,
  logoStrip,
  chartContainerStyle,
  tableContainer,
  listStyle,
  navListStyle,
  chartCardStyle,
  chartTitleStyle,
  foregroundTextStyle,
  navTextStyle,
  formTextField,
  navStyle,
  deleteButton,
  createButton,
  editButton,
  buttonsContainer,
  selectFieldStyle,
  textFieldStyle,
  formSelectTitle
};
