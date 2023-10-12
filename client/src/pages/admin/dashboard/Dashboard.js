import * as React from "react";
import styles from "./Dashboard.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, IconButton, Pagination, Paper } from "@mui/material";
import Tableheader from "../components/sidebar/tableHeader/Tableheader";

const headData = [
  {
    id: "paper_id",
    label: "Paper ID",
  },
  {
    id: "paper_name",
    label: "Paper Name",
  },
  {
    id: "duration",
    label: "Duration",
  },
  {
    id: "total_question",
    label: "Total Question",
  },
  {
    id: "section",
    label: "Sections",
  },
  {
    id: "newsletter",
    label: "Newsletter",
  },
  {
    id: "contact",
    label: "Contact No.",
  },
  {
    id: "action",
    label: "Action",
  },
];
const data = [
  {
    customer_id: "#hd3444h",
    buyer_name: "smiley",
    email: "smiley@gmail.com",
    country: "India",
    items: "43",
    newsletter: "yes",
    contact: "87348798384",
    action: "Block",
    status: 1,
  },
  {
    customer_id: "#hd344h",
    buyer_name: "art smiley",
    email: "ARTsmiley@gmail.com",
    country: "India",
    items: "473",
    newsletter: "yes",
    contact: "87348798384",
    action: "Unblock",
    status: 0,
  },
  {
    customer_id: "#hd3444",
    buyer_name: "smiley",
    email: "smiley@gmail.com",
    country: "India",
    items: "43",
    newsletter: "yes",
    contact: "87348798384",
    action: "Block",
    status: 1,
  },
  {
    customer_id: "#hd444h",
    buyer_name: "art smiley",
    email: "ARTsmiley@gmail.com",
    country: "India",
    items: "473",
    newsletter: "yes",
    contact: "87348798384",
    action: "Unblock",
    status: 0,
  },
  {
    customer_id: "hd3444h",
    buyer_name: "smiley",
    email: "smiley@gmail.com",
    country: "India",
    items: "43",
    newsletter: "yes",
    contact: "87348798384",
    action: "Block",
    status: 1,
  },
  {
    customer_id: "#d3444h",
    buyer_name: "art smiley",
    email: "ARTsmiley@gmail.com",
    country: "India",
    items: "473",
    newsletter: "yes",
    contact: "87348798384",
    action: "Unblock",
    status: 0,
  },
];

const sortdata = [
  { label: "By Name ↓", value: "low" },
  { label: "By Name ↑", value: "high" },
];
const filterdata = [
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
  //  { label: "Rejected", value: "rejected" },
];
function Dashboard(props) {
  const [age, setAge] = React.useState("");
  const [condition, setCondition] = React.useState({
    search: "",
    filter: "",
    sorting: "",
  });
  // const loader = useSelector((state) => state.loader);
  // const dispatch = useDispatch();
  const handleClick = (event) => {
    // dispatch(setLoader(false));
  };

  const handleDelete = (data) => {
    // props.handlePopup(data);
    // props.setOpen && props.setOpen(true);
  };

  return (
    <div className={styles.container}>
      <Tableheader
        // handleFilter={handleFilter}
        // handleSorting={handleSorting}
        filterdata={filterdata}
        sortdata={sortdata}
        condition={condition}
        search={condition.search}
        // handleSearch={handleSearch}
        // setOpen={setPopup}
      />
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "#F6F6F6", color: "black" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#bfbbc3" }}>
              {headData.map((column) => (
                <TableCell
                  className={styles.table_head}
                  align="start"
                  sx={{
                    whiteSpace: "nowrap",
                    fontFamily: "DM Sans",
                    fontWeight: "500",
                    fontSize: "16px",
                    height: "21px",
                    color: "#1C1C1C",
                  }}
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* {loader.loader ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={8}>
                  <Box className={styles.loader_box}>
                    {" "}
                    <CircularLoader size={60} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : ( */}
          <TableBody>
            {data &&
              data.map((row) => (
                <TableRow
                  onClick={() => handleDelete(row)}
                  style={{ color: "#636365", cursor: "pointer" }}
                  key={row._id}
                >
                  <TableCell
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#636365",
                    }}
                    className={styles.table_column}
                    align="left"
                  >
                    {row._id}
                  </TableCell>
                  <TableCell
                    className={styles.table_column}
                    component="th"
                    scope="row"
                  >
                    {row.first_name} {row.last_name}
                    {/* <img src={homeImage + /img/Image 1.png'} width='50px' height='40px' /> */}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#636365",
                    }}
                    className={styles.table_column}
                    align="left"
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#636365",
                    }}
                    className={styles.table_column}
                    align="left"
                  >
                    {row.country}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#636365",
                    }}
                    className={styles.table_column}
                    align="left"
                  >
                    {row.items}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#636365",
                    }}
                    className={styles.table_column}
                    align="left"
                  >
                    {row.newsletter}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#636365",
                    }}
                    className={styles.table_column}
                    align="left"
                  >
                    {row.phone}
                  </TableCell>
                  {/* {props.activetab === 'galleryrecrete' ?
                                    <TableCell sx={{
                                        fontFamily: 'DM Sans',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        lineHeight: '21px',
                                        color: '#35BE43'
                                    }} className={styles.table_column} align="left">
                                        <div className={styles.quoterequest}>
                                            {row.action && row.action === 'accept' ? <span > Pending</span> : row.action === 'rejected' ? <span className={styles.rejected}> Rejected</span>
                                                :
                                                <>
                                                    <Button variant='contained' sx={{ width: '80px', height: '34px', borderRadius: '4px' }}>Accept</Button>
                                                    <Button variant='outlined' sx={{ width: '80px', height: '34px', borderRadius: '4px' }} >Decline</Button>
                                                </>
                                            }
                                        </div>
                                    </TableCell>
                                    : */}
                  <TableCell
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#636365",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                    className={styles.table_column}
                  >
                    <Button
                      color={row.is_blocked ? "secondary" : "primary"}
                      variant="contained"
                      sx={{ width: "100px", mr: 2 }}
                    >
                      {row.is_blocked ? "Unblock" : "Block"}
                    </Button>
                    <IconButton>
                      <img
                        src="/img/delete.png"
                        height="20px"
                        width="18px"
                        alt="img"
                      />
                    </IconButton>
                  </TableCell>
                  {/* } */}
                </TableRow>
              ))}
          </TableBody>
          {/* )} */}
        </Table>
      </TableContainer>

      {/* {totalblogs > state.limit && ( */}
      {/* )} */}
      {/* </div> */}
    </div>
  );
}
export default React.memo(Dashboard);

// import React, { useState } from "react";
// import styles from "./Dashboard.module.css";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Box, Button, IconButton, Tooltip } from "@mui/material";

// const headData = [
//   {
//     id: "customer_id",
//     label: "Customer ID",
//     format: (value) => value.toLocaleString(),
//   },
//   {
//     id: "buyer_name",
//     label: "Buyer Name",
//     format: (value) => value.toLocaleString(),
//   },
//   {
//     id: "email",
//     label: "Email",
//     // format: (value) => value.toLocaleString(),
//   },
//   {
//     id: "country",
//     label: "Country",
//     format: (value) => value.toLocaleString(),
//   },
//   {
//     id: "item",
//     label: "No. of items",
//     format: (value) => value.toLocaleString(),
//   },
//   {
//     id: "newsletter",
//     label: "Newsletter",
//     format: (value) => value.toLocaleString(),
//   },
//   {
//     id: "contact",
//     label: "Contact No.",
//     format: (value) => value.toLocaleString(),
//   },
//   {
//     id: "action",
//     label: "Action",
//     format: (value) => value.toLocaleString(),
//   },
// ];
// const data = [
//   {
//     customer_id: "#hd3444h",
//     buyer_name: "smiley",
//     email: "smiley@gmail.com",
//     country: "India",
//     items: "43",
//     newsletter: "yes",
//     contact: "87348798384",
//     action: "Block",
//     status: 1,
//   },
//   {
//     customer_id: "#hd344h",
//     buyer_name: "art smiley",
//     email: "ARTsmiley@gmail.com",
//     country: "India",
//     items: "473",
//     newsletter: "yes",
//     contact: "87348798384",
//     action: "Unblock",
//     status: 0,
//   },
//   {
//     customer_id: "#hd3444",
//     buyer_name: "smiley",
//     email: "smiley@gmail.com",
//     country: "India",
//     items: "43",
//     newsletter: "yes",
//     contact: "87348798384",
//     action: "Block",
//     status: 1,
//   },
//   {
//     customer_id: "#hd444h",
//     buyer_name: "art smiley",
//     email: "ARTsmiley@gmail.com",
//     country: "India",
//     items: "473",
//     newsletter: "yes",
//     contact: "87348798384",
//     action: "Unblock",
//     status: 0,
//   },
//   {
//     customer_id: "hd3444h",
//     buyer_name: "smiley",
//     email: "smiley@gmail.com",
//     country: "India",
//     items: "43",
//     newsletter: "yes",
//     contact: "87348798384",
//     action: "Block",
//     status: 1,
//   },
//   {
//     customer_id: "#d3444h",
//     buyer_name: "art smiley",
//     email: "ARTsmiley@gmail.com",
//     country: "India",
//     items: "473",
//     newsletter: "yes",
//     contact: "87348798384",
//     action: "Unblock",
//     status: 0,
//   },
// ];
// export default function Tabletwocol(props) {
//   const [open, setOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(false);
//   const threedots = Boolean(anchorEl);
//   const [rowdt, setRodt] = useState(null);
//   const handleNavitgateDetailPage = (id) => {
//   }
//   return (
//     <>
//       <div className={styles.shadow}>
//         <TableContainer
//           component={Paper}
//           sx={{
//             backgroundColor: "#F6F6F6",
//             color: "black",
//             boxShadow: "none",
//           }}
//         >
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow sx={{ backgroundColor: "#bfbbc3" }}>
//                 {props.head.map((column, i) => (
//                   <TableCell
//                     align="left"
//                     sx={{
//                       whiteSpace: "nowrap",
//                       fontFamily: "DM Sans",
//                       fontWeight: "500",
//                       fontSize: "16px",
//                       height: "21px",
//                       color: "#1C1C1C",
//                     }}
//                     key={i}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             {/* {loader.loader ? (
//               <TableBody>
//                 <TableRow>
//                   <TableCell colSpan={8}>
//                     <Box className={styles.loader_box}>
//                       {" "}
//                       <CircularLoader size={60} />
//                     </Box>
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             ) : ( */}
//             <TableBody>
//               {props.data &&
//                 props.data.map((row, i) => (
//                   <TableRow style={{ color: "#636365" }} key={i}>
//                     <TableCell
//                       sx={{
//                         fontFamily: "DM Sans",
//                         fontStyle: "normal",
//                         fontWeight: "400",
//                         fontSize: "16px",
//                         lineHeight: "21px",
//                         color: "#636365",
//                         cursor: "pointer"
//                       }}
//                       className={styles.table_column}
//                       align="left"
//                       onClick={() => handleNavitgateDetailPage(row._id)}
//                     >
//                       {props.activetab && props.activetab === 'category_list' ? row._id :
//                         row.title
//                       }
//                     </TableCell>
//                     {props.activetab === "artisttype" ? (
//                       <TableCell
//                         sx={{
//                           fontFamily: "DM Sans",
//                           fontStyle: "normal",
//                           fontWeight: "400",
//                           fontSize: "16px",
//                           lineHeight: "21px",
//                           color: "#636365",
//                         }}
//                         className={styles.table_column}
//                         align="left"
//                       >
//                         <div className={styles.end_col_auction}>
//                           {" "}
//                           {row.name}
//                           <IconButton
//                             onClick={() => {
//                               props.setOpen(true);
//                               props.setEditdata(row);
//                             }}
//                           >
//                             <img
//                               src="/img/Edit.png"
//                               width="20px"
//                               height="20px"
//                               alt='img'
//                             />
//                           </IconButton>
//                         </div>
//                       </TableCell>
//                     ) :
//                       props.activetab === 'subscription_feature' ?
//                         <TableCell
//                           sx={{
//                             fontFamily: "DM Sans",
//                             fontStyle: "normal",
//                             fontWeight: "400",
//                             fontSize: "16px",
//                             lineHeight: "21px",
//                             color: "#636365",
//                           }}
//                           className={styles.table_column}
//                           align="left"
//                         >
//                           <div className={styles.end_col_auction}>
//                             {" "}
//                             {row.name}
//                             <IconButton
//                               onClick={() => {
//                                 props.setOpen(true);
//                                 props.setEditdata(row);
//                               }}
//                             >
//                               <img
//                                 src="/img/Edit.png"
//                                 width="20px"
//                                 height="20px"
//                                 alt='img'
//                               />
//                             </IconButton>
//                             <IconButton
//                               onClick={() =>
//                                 props.handleDeletefeature(row._id)
//                               }
//                             >
//                               <img
//                                 src="/img/delete.png"
//                                 width="20px"
//                                 height="20px"
//                                 alt='img'
//                               />
//                             </IconButton>
//                           </div>
//                         </TableCell>
//                         :
//                         props.activetab === "category_list" ?
//                           <TableCell
//                             sx={{
//                               width: "33%",
//                               fontFamily: "DM Sans",
//                               fontStyle: "normal",
//                               fontWeight: "400",
//                               fontSize: "16px",
//                               lineHeight: "21px",
//                               color: "#636365",
//                               whiteSpace: "nowrap",
//                             }}
//                             className={styles.table_column}
//                             align="left"
//                           >
//                             <div className={styles.end_col_auction}>
//                               {" "}
//                               {row.name}
//                               <IconButton
//                                 onClick={() => {
//                                   props.handleAddCategoryPopup('edit', row);
//                                 }}

//                               >
//                                 <img
//                                   src="/img/Edit.png"
//                                   width="20px"
//                                   height="20px"
//                                   alt='img'
//                                 />
//                               </IconButton>
//                               <IconButton
//                                 onClick={() => {
//                                   props.handleDelete(row._id);
//                                 }}
//                               >
//                                 <img
//                                   src="/img/delete.png"
//                                   width="20px"
//                                   height="20px"
//                                   alt='img'
//                                 />
//                               </IconButton>
//                             </div>
//                           </TableCell>
//                           : (
//                             <TableCell
//                               sx={{
//                                 // width: '30%',
//                                 fontFamily: "DM Sans",
//                                 fontStyle: "normal",
//                                 fontWeight: "400",
//                                 fontSize: "16px",
//                                 lineHeight: "21px",
//                                 color: "#636365",
//                               }}
//                               className={styles.table_column}
//                               align="left"
//                             >
//                               <div className={styles.buyer_flex}>
//                                 <span>{row.description}</span>
//                                 <Tooltip title="Account settings">
//                                   <IconButton
//                                     onClick={handleClick}
//                                     size="small"
//                                     sx={{
//                                       ml: 2,
//                                       height: "21.62px",
//                                       width: "2.63px"
//                                     }}
//                                     aria-controls={
//                                       threedots ? "account-menu" : undefined
//                                     }
//                                     height="21.62px"
//                                     width="4.63px"
//                                     aria-haspopup="true"
//                                     aria-expanded={threedots ? "true" : undefined}
//                                   >
//                                     <img
//                                       src="/img/Menu Icon.png"
//                                       height="21.62px"
//                                       width="7.63px"
//                                       alt='img'
//                                       onClick={() => handleClicks(row)}
//                                     />
//                                   </IconButton>
//                                 </Tooltip>
//                                 <Menu
//                                   anchorEl={anchorEl}
//                                   id="account-menu"
//                                   open={threedots}
//                                   onClose={handleClose}
//                                   onClick={handleClose}
//                                   PaperProps={{
//                                     elevation: 0,
//                                     sx: {
//                                       width: "150px",
//                                       overflow: "visible",
//                                       boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
//                                       filter:
//                                         "drop-shadow(0px 0px 0px rgba(0,0,0,0.32))",
//                                       mt: 2.5,
//                                       "& .MuiAvatar-root": {
//                                         width: "120px",
//                                         height: "132px",
//                                         ml: 0.5,
//                                         mr: 1,
//                                         // mt:5
//                                       },
//                                       "&:before": {
//                                         content: '""',
//                                         display: "block",
//                                         position: "absolute",
//                                         top: 0,
//                                         // horizontal: 'center',
//                                         right: 62,
//                                         width: 10,
//                                         height: 10,
//                                         bgcolor: "background.paper",
//                                         transform: "translateY(-50%) rotate(45deg)",
//                                         zIndex: 0,
//                                       },
//                                     },
//                                   }}
//                                   transformOrigin={{
//                                     horizontal: "center",
//                                     vertical: "right",
//                                   }}
//                                   anchorOrigin={{
//                                     horizontal: "left",
//                                     vertical: "center",
//                                   }}
//                                 >
//                                   <MenuItem
//                                     sx={{
//                                       display: "flex",
//                                       justifyContent: "center",
//                                       fontSize: "16px",
//                                       lineHeight: "12px",
//                                       fontWeight: "400",
//                                       fontFamily: "DM Sans",
//                                     }}
//                                     onClick={() => props.handleEditdata(rowdt)}
//                                   >
//                                     Edit
//                                   </MenuItem>
//                                   <Divider />
//                                   <MenuItem
//                                     sx={{
//                                       display: "flex",
//                                       justifyContent: "center",
//                                       fontSize: "16px",
//                                       lineHeight: "12px",
//                                       fontWeight: "400",
//                                       fontFamily: "DM Sans",
//                                     }}
//                                     onClick={() => props.handleDelete(row._id)}
//                                   >
//                                     Delete
//                                   </MenuItem>
//                                 </Menu>
//                               </div>
//                             </TableCell>
//                           )}
//                     {/* :
//                                             <TableCell sx={{
//                                                 width: '33%',
//                                                 fontFamily: 'DM Sans',
//                                                 fontStyle: 'normal',
//                                                 fontWeight: '400',
//                                                 fontSize: '16px',
//                                                 lineHeight: '21px',
//                                                 color: '#636365',
//                                                 whiteSpace: 'nowrap',
//                                             }} className={styles.table_column} align="left">
//                                                 <div className={styles.end_col_auction}> {row.end_date}
//                                                     <IconButton onClick={() => setOpen(true)} ><img src={homeImage + /img/delete.png'} /></IconButton >
//                                                 </div>
//                                             </TableCell> */}
//                     {/* } */}
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </>
//   );
// }
