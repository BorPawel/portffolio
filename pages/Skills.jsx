"use client";

import "@styles/skills.sass";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/hash-navigation";
import { HardSkills, SoftSkills } from "@components/skills/SkillsComponent";
import { useInView } from "react-intersection-observer";
//import 'swiper/swiper.min.css'
import Link from 'next/link'
import React, { useLayoutEffect, useState, useRef } from "react";
import Page from "@components/page";

const Skills = () => {
  const windowWidthSize = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    useLayoutEffect(() => {
      const updateWidth = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", updateWidth);
      updateWidth();
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return windowWidth;
  };

  let width = windowWidthSize();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });

  return (
    <Page>
      <section id="skills">
        <HardSkills />
        
      </section>
    </Page>
  );
};

export default Skills;
