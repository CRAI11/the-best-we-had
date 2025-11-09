import styles from "./SplashScreen.module.css";
import { SITE_TITLE } from "@/lib/constants";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function SplashScreen() {
  const letters = SITE_TITLE.split("");

  return (
    <div className={styles.splashContainer}>
      <h1 className={`${styles.splashText} ${bebasNeue.className}`}>
        {letters.map((letter, index) => (
          <div key={index} className={styles.letterMask}>
            <span
              className={styles.letterInner}
              style={
                {
                  "--direction": index % 2 === 0 ? "-100%" : "100%",
                  animationDelay: `${index * 0.1}s`,
                } as React.CSSProperties
              }
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          </div>
        ))}
      </h1>
    </div>
  );
}