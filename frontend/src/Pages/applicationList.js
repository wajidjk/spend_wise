// import "./App.scss";
import React, { useEffect, useState } from "react";
import Heading from "../Components/heading";
import Loan from "../Components/loan";
import Finance from "../Components/finance";
import Info from "../Components/info";
import Summary from "../Components/summary";
import { Divider } from "@mui/material";
import { appContext } from "../Context/appContext";
import { Button } from "@mui/material";
import { Route, Switch, Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function ApplicationList() {
  const [state, setState] = useState([]);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "amount",
      headerName: "Total Amount",
      width: 200,
      editable: true,
    },
    {
      field: "period",
      headerName: "Period",
      type: "number",
      width: 200,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      editable: true,
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/loanApplications")
      .then((res) =>
        setState(res.data.contacts.map((el) => ({ ...el, id: el._id })))
      );
  }, []);
  console.log(state);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={state}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
export { ApplicationList };
