"use client";

import React, { useState, useEffect } from "react";
import PreLoading from "./PreLoading";
import Hero from "./Hero";
import Services from "./Services";
import Works from "./Works";
import About from "./About";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ProcessTransition from "./ProcessTransition";
import Process from "./Process";
import FooterTransition from "./FooterTransition";
import ProcessParagraph from "./ProcessParagraph";

// Minimum time (ms) to show the preloader so the animation can play fully
const MIN_DISPLAY_MS = 2500;

function MainPage() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const isFirstVisit = !sessionStorage.getItem("visited");

    // Skip preloader entirely if the user has already visited this session
    if (!isFirstVisit) return;

    // Show the preloader now that we're safely on the client
    setShowPreloader(true);

    let resourcesLoaded = false;
    let minTimeElapsed = false;

    function tryHide() {
      console.log(resourcesLoaded)
      if (resourcesLoaded && minTimeElapsed) {
        sessionStorage.setItem("visited", "true");
        setShowPreloader(false);
      }
    }

    function handleLoad() {
      resourcesLoaded = true;
      tryHide();
    }

    // 1. Wait for all page resources (images, fonts, scripts) to finish loading
    if (document.readyState === "complete") {
      resourcesLoaded = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    // 2. Enforce a minimum display time so the preloader animation plays fully
    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      tryHide();
    }, MIN_DISPLAY_MS);

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {showPreloader ? (<PreLoading />) : (
        <div className="px-[6vw]">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Works />
            <Services />
            <ProcessParagraph />
            <ProcessTransition />
            <Process />
            <FooterTransition />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default MainPage;
