import React from "react";
import BannerIcon from "../../assets/Ecommerce campaign-amico.svg";

import "./index.css";
const Banner = () => {
  return (
    <div class="justify-around items-center flex h-screen" id="home">
      <div className="btnBox">
        <button>LogIn</button>
        <button>SignUp</button>
      </div>
      <img src={BannerIcon} alt="icon" class="w-[500px] object-cover;" />
    </div>
  );
};
export default Banner;
