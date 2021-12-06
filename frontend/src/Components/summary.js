import React, { useContext } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import infoData from "../store/info.json";
import "../styling/summary.scss";
import { appContext } from "../Context/appContext";
import axios from "axios";

function Summary() {
  const { state, setState } = useContext(appContext);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function saveApplication() {
    console.log("save application", state);
    const data = {
      name: state.name,
      email: state.email,
      phoneNo: state.phoneNo,
      thing: state.thing,
      employment: state.employment,
      livingStyle: state.livingStyle,
      salary: state.salary,
      otherIncome: state.otherIncome,
      housingCost: state.housingCost,
      amount: state.amount,
      period: state.period,
      currency: state.currency,
      year: state.year,
    };
    axios
      .post("http://localhost:8000/api/loanApplications", data)
      .then((res) => console.log(res.data));
  }
  return (
    <div className="summary">
      <div className="name">{state.name}</div>
      <div className="row-box">
        <div className="amount-box">
          <div>Loan amount</div>
          <div className="bold">
            {state.amount}
            {state.currency}
          </div>
        </div>
        <div className="period-box">
          <div>Repayment period</div>
          <div className="bold">
            {state.period}
            {state.year}
          </div>
        </div>
      </div>
      <div className="button">
        <Button variant="contained" onClick={saveApplication}>
          Apply with mobile BANKID
        </Button>
      </div>
    </div>
  );
}
export default Summary;