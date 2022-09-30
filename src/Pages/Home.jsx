import { Container } from "@chakra-ui/react";
import React from "react";
import DiscoverJob from "../component/DiscoverJob";
import FeatureCompony from "../component/FeatureCompony";
import HeaderSearch from "../component/HeaderSearch";
import JobButton from "../component/JobButton";
import JobSlider from "../component/JobSlider";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";

import JobOption from "../component/JobOption";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderSearch />
      <JobButton />
      <JobSlider/>
      <FeatureCompony/>
      <DiscoverJob/>
      <JobOption/>
      
      
            
      
    </div>
  );
};

export default Home;
