import React from "react";
import "./home.css";
import Section from "../mainsection/Section";
import { modelsData } from "../../modelsData";

const Home = () => {
  return (
    <div className="contain">
    {
      modelsData.map((val) => (
        <Section data={val} key={val.title}/>
      ))
    }
    </div>
  );
};

export default Home;
