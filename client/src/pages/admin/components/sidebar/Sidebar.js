import React, { memo } from "react";
import styles from './Sidebar.module.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const sidebarRoutes = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: '/admin',
    hasSubmenu: false,
  },
]

function Commonsidebar(props) {
  const location = useLocation();
  const navigate = useNavigate()
  const path = location.pathname;
  const usertypes = localStorage.getItem("usertype");

  const handleDashboard = () => {
    navigate('/dashboard')
  }
  const handleClick = (val) => {
    navigate(val);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div>
      <div className={styles.demo}>
        {usertypes === "buyer" ? " " :
          <h2 onClick={handleDashboard}>LOGO</h2>}
        {sidebarRoutes && sidebarRoutes.map((val, i) => (
          <div className={styles.demo_child_div} key={i} >
            <div className={(path === val.path || path.includes(`${val.path}/`)) ? styles.flex_start : ''}></div>
            <Button onClick={() => handleClick(val.path)} variant={(path === val.path || path.includes(`${val.path}/`)) ? 'contained' : ''} fullWidth sx={{
              whiteSpace: 'nowrap', ml: 1, display: 'flex', justifyContent: 'flex-start', pl: 2, mr: 1, borderRadius: ' 2.06016px 0px 0px 2.06016px', fontFamily: "DM Sans",
              fontWeight: 400, letterSpacing: "0.5px", textTransform: "uppercase"
            }}><b>{val.name}</b></Button>
          </div>
        ))}
      </div>
    </div >
  );
}
export default memo(Commonsidebar);
