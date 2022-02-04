import React from "react";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import BasicAppBar from "./BasicAppBar";

const Layout = ({ children }) => {
  return (
    <Box display="block">
      <CssBaseline />
      <BasicAppBar />
      <Box flexGrow={1}>
        <Toolbar />
        <Container className="container" component="main" maxWidth="x1">
          {children}
        </Container>
      </Box>
    </Box>
  );
};
export default Layout;
