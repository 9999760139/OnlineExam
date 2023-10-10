import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import { Alert, Typography } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children, signed }) => {
  const location = useLocation().pathname;

  const paths = ["/test/live", "/test/info", "/manavrachna"];
  console.log(location.includes("/admin/"), location);
  return (
    <>
      {signed ? (
        paths.includes(location) || location.includes("/admin/") ? (
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
