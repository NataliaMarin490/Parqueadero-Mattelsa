import React from "react";
import Header from "../header/Header";
import SearchBar from "./searchBar/SearchBar";
import LicensePlateCard from "./licensePlateCard/LicensePlateCard";
import EntryForm from "./entryForm/EntryForm";
import IdCard from "./idCard/IdCard";
import "./styles.css";

const EmployeePage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      {/* <LicensePlateCard/> */}
      {/* <EntryForm/> */}
      <div className="idCard-container">
        <IdCard />
        <IdCard />
        <IdCard />
      </div>
    </div>
  );
};

export default EmployeePage;
