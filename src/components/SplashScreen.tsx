"use client";

import styles from "./SplashScreen.module.css";
import { SITE_TITLE } from "@/lib/constants";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";
import ZoomCanvas from "./ZoomCanvas";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function SplashScreen() {
  const [animationPhase, setAnimationPhase] = useState("splash");
  const letters = SITE_TITLE.split("");
  const stagger = 0.1;
  const letterDuration = 4;

  if (animationPhase === "hide") return null;

  const totalSeconds = (letters.length - 1) * stagger + letterDuration;

  return (
    <>
      {animationPhase === "splash" && (
        <div
          className={styles.splashContainer}
          style={
            {
              "--splash-total-duration": `${totalSeconds}s`,
            } as React.CSSProperties
          }
          onAnimationEnd={(e) => {
            if ((e as any).animationName.includes("hideSplash")) {
              setAnimationPhase("grid");
            }
          }}
        >
          <h1 className={`${styles.splashText} ${bebasNeue.className}`}>
            {letters.map((letter, index) => (
              <div key={index} className={styles.letterMask}>
                <span
                  className={styles.letterInner}
                  style={
                    {
                      "--direction": index % 2 === 0 ? "-100%" : "100%",
                      animationDelay: `${index * stagger}s`,
                    } as React.CSSProperties
                  }
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              </div>
            ))}
          </h1>
        </div>
      )}

      {animationPhase === "grid" && (
        <ZoomCanvas />
      )}
    </>
  );
}
