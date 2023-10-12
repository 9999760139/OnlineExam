import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import { Alert, Typography } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import Sidebar from "../../pages/admin/components/sidebar/Sidebar";

const Layout = ({ children, signed }) => {
  const location = useLocation().pathname;

  const without_header_footer = ["/test/live", "/test/info", "/manavrachna"];
  return (
    <>
      {signed ?
        // if user sign in as admin 
        (
          location.includes("/admin") ? (
            <div className={styles.admin_layout}>
              <Sidebar />
              {children}
            </div>
          )
            :
            // if user sign in and no need of header and footer like(live test page)
            without_header_footer.includes(location) ? children
              :
              // if user sign in and need of header and footer
              (
                <>
                  <Header />
                  <div className={styles.children}>{children}</div>
                  <Footer />
                </>
              )
        )
        :
        // if user not sign in and no need of header and footer like(login or signup page)
        (
          <div className={styles.children}>{children}</div>
        )}
    </>
  );
};

export default Layout;
