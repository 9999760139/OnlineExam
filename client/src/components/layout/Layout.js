import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import { Alert, Typography } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children, signed }) => {
  const location = useLocation().pathname;

  //   const path = location.pathname.includes("/test/live");
  //   const path_info = location.pathname.includes("/test/info");
  //   const path_login = location.pathname.includes("/manavrachna");
  const paths = ["/test/live", "/test/info", "/manavrachna"];
  console.log(paths.includes(location));
  return (
    <>
      {signed ? (
        paths.includes(location) ? (
          children
        ) : (
          <>
            <Header />
            <div className={styles.children}>{children}</div>
            <Footer />
          </>
        )
      ) : (
        <div className={styles.children}>{children}</div>
      )}
    </>
  );
};

export default Layout;
