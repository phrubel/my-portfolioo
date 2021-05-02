import React from "react";
import react from "../../../image/react.png"
import node from "../../../image/node.png"
import css from "../../../image/css.png"
import html from "../../../image/html-removebg-preview.png"
import bootstrap from "../../../image/bootstrap.png"
import material from "../../../image/material.png"
import js from "../../../image/js.png"
import router from "../../../image/router.png"
import mongo from "../../../image/mongo.png"
import Particles from "react-particles-js";

const Particle = () => {

    
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["image"],
            image: [
              {
                src: react,
                height: 20,
                width: 23,
              },
              {
                src: bootstrap,
                height: 20,
                width: 23,
              },
              {
                src: material,
                height: 20,
                width: 23,
              },
              {
                src: js,
                height: 20,
                width: 23,
              },
              {
                src: router,
                height: 20,
                width: 23,
              },
              {
                src: mongo,
                height: 20,
                width: 20,
              },
              {
                src: node,
                height: 20,
                width: 20,
              },
              {
                src: css,
                height: 20,
                width: 20,
              },
              {
                src: html,
                height: 20,
                width: 20,
              },
              
              
            ],
          },
          color: {
            value: "#CCC",
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default Particle;