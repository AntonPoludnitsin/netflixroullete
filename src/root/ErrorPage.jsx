import HeaderSearchContainer from "../components/Header/HeaderSearchContainer";
import EmptyContent from "../components/ResultBody/EmptyContent";
import React from "react";

const ErrorPage = ({ title }) => (
  <>
    <HeaderSearchContainer />
    <EmptyContent title={title} />
  </>
);

export default ErrorPage;
