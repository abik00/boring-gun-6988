import { Container } from "@chakra-ui/react";
import React from "react";
import FeatureCompony from "../component/FeatureCompony";
import HeaderSearch from "../component/HeaderSearch";
import JobButton from "../component/JobButton";
import JobSlider from "../component/JobSlider";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderSearch />
      <JobButton />
      <JobSlider/>
      <FeatureCompony/>
    </div>
  );
};

export default Home;
