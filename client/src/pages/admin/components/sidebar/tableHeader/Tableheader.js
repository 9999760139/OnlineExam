import { Button, FormControl, MenuItem, Select } from "@mui/material";
import styles from "./Tableheader.module.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";


export default function Tableheader(props) {

    const handleAddbtn = () => {
        props.setOpen && props.setOpen(true);
    };

    return (
        <>
            <div className={styles.buyer_header}>
                <div className={styles.input_div}>
                    <input
                        onChange={props.handleSearch}
                        name="search"
                        onClick={props.handleSearch}
                        value={props.search}
                        className={styles.search_input}
                        type="text"
                        placeholder="Search by..."
                    />
                    <img
                        className={styles.search_icon}
                        src="/img/Search Symbol.png"
                        height="20px"
                        width="20px"
                        alt="img"
                    />
                </div>
                <div className={styles.header_action}>
                    <FormControl>
                        <Select
                            value={props.condition && props.condition.sorting}
                            onChange={props.handleSorting && props.handleSorting}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            sx={{ height: "44px", color: "#636365" }}
                            className={styles.selects}
                            IconComponent={() => (
                                <img
                                    src="/img/dropdownicon.png"
                                    width="13px"
                                    height="10px"
                                    style={{ marginRight: "20px" }}
                                    alt="img"
                                />
                            )}
                        >
                            <MenuItem value="">Sort by</MenuItem>
                            {props.sortdata &&
                                props.sortdata.map((val) => (
                                    <MenuItem value={val.value}>{val.label}</MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select
                            value={props.condition && props.condition.filter}
                            onChange={props.handleFilter && props.handleFilter}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            sx={{ height: "44px", maxWidth: "150px", color: "#636365" }}
                            className={styles.selects}
                            IconComponent={() => (
                                <img
                                    src="/img/dropdownicon.png"
                                    width="13px"
                                    height="10px"
                                    style={{ marginRight: "20px" }}
                                    alt="img"
                                />
                            )}
                        >
                            <MenuItem value="">All</MenuItem>
                            {props.filterdata &&
                                props.filterdata.map((val) => (
                                    <MenuItem value={val.value}>{val.label}</MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    {props.button && props.button.type === "add" ? (
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleAddbtn}
                            className={styles.add_btn}
                            sx={{
                                width: { xs: "120", sm: "100px" },
                                mt: { xs: 1, sm: 0 },
                                mb: { xs: 1, sm: 0 },
                                minWidth: 100,
                                height: "44px",
                                mr: 0,
                                ml: 0,
                                // fontFamily: 'Poppins',
                                // fontStyle: 'normal',
                                // fontWeight: '600',
                                // fontSize: '14px',
                                // lineHeight: '21px',
                            }}
                        >
                            {props.button && props.button.text}
                        </Button>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
}
