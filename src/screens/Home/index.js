import React from "react";
import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import { useSelector } from "react-redux";
import Products from "../../components/products";
import About from "../../components/about";
import { getAllProducts } from "../../redux/features/products";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Home = () => {
  const products = useSelector(getAllProducts);
  console.log(products);
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fps_limit: 60,
          particles: {
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 10,
                maximumValue: 30,
              },
              value: 1.4,
            },
            color: {
              value: "#ffffff",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 50,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1.6,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
                maximumValue: 0.5,
              },
              value: 1,
            },
            interactivity: {
              detect_on: "window",
              events: {
                resize: true,
              },
            },
          },
        }}
      />
      <>
        <Navbar />
      </>
      <Banner />
      <Products products={products} />
      <About />
    </div>
  );
};
export default Home;
