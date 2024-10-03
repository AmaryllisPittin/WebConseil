import React from "react";
import Topbar from "../components/Topbar";
import bannerIndex from "../img/index.png";

const Index = () => {
    console.log('Index est bien appelé')
  return (
    <div>
        <Topbar />
        <banner className="banner">
        <img src={bannerIndex} alt="Bannière - développez votre croissance" />
        </banner>
    </div>
  );
};

export default Index;