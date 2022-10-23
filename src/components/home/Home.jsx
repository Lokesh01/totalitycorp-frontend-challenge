import React from "react";
import "./home.css";
import Section from "../mainsection/Section";
import { modelsData } from "../../modelsData";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="contain">
      {modelsData.map((val) => (
        <Section data={val} key={val.title} />
      ))}

      <Footer />
    </div>
  );
};

export default Home;
