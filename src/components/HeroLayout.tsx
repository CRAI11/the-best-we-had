"use client";
import { restaurants } from "@/lib/restaurants";
import styles from "./HeroLayout.module.css";
import { useEffect, useState } from "react";

const calculateSlideDistance = (
  currentIndex: number,
  selectedId: number | undefined
): string => {
  // If no image is selected yet, no one should move.
  if (selectedId === undefined) {
    return "0";
  }

  // Convert the 1-based ID to a 0-based index.
  const selectedIndex = selectedId - 1;

  // Calculate the relative distance.
  const distance = selectedIndex - currentIndex;
  console.log("distance", distance)

  // The selected image itself should not slide.
  if (distance === 0) {
    return "0";
  }

  // The final CSS value is the distance * 100%.
  const offset = distance * 100;
  return `${offset}%`;
};

export default function HeroLayout() {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [selectedHero, setSelectedHero] = useState<number>();
  const [isSlideInEnd, setIsSlideInEnd] = useState<boolean>(false)

  useEffect(() => {
    console.log({ isExpand, selectedHero, isSlideInEnd });
  }, [isExpand, selectedHero, isSlideInEnd]);

  return (
    <div className={styles.outerWrapper}>
      <div
        className={`${styles.innerWrapper} ${
          isExpand ? `${styles.moveActive}` : ""
        }`}
        style={{
          gap: isExpand ? "0" : "4vw",
          paddingRight: isExpand ? "0" : "20vw",
        }}
        // onAnimationEnd={(e) => {
        //   console.log("e",e)
        //     // if ((e as any).animationName.includes("hideSplash")) {
        //     //   setAnimationPhase("grid");
        //     // }
        //   }}
      >
        {restaurants.map((rst, index) => (
          <div
            key={rst.id}
            // style={
            //   {
            //     backgroundImage: `url(${rst.image})`,
            //     "--slide-left-distance": isSlideInEnd && selectedHero === rst.id ? "0" : selectedHero === rst.id ?  `-${index * 100}%` : "",
            //     display: isSlideInEnd && selectedHero !== rst.id ? "none" : "block",
            //     position: isSlideInEnd && selectedHero === rst.id ? "absolute" : "relative",
            //     zIndex:
            //       selectedHero === rst.id ? restaurants.length + 1 : index + 1,
            //   } as React.CSSProperties
            // }
            // className={`${styles.imageWrapper} ${
            //   isExpand && index !== 0 ? styles.activeParallaxSlideIn : ""
            // } ${
            //   selectedHero === rst.id && index > 0
            //     ? styles.combined
            //     : selectedHero === rst.id
            //     ? styles.fitActive
            //     : ""
            // }`}

            style={
              {
                backgroundImage: `url(${rst.image})`,
                "--slide-left-distance": calculateSlideDistance(index, selectedHero),
                // "--slide-left-distance": isSlideInEnd && selectedHero === rst.id ? "0" : `-${index * 100}%`,
                // "--slide-left-distance":  selectedHero && selectedHero > index + 1 ? `${index + 1 * 100}%` : selectedHero && selectedHero < index +1 ? {} : `-${index - selectedHero * 100}%`,
                display: isSlideInEnd && selectedHero !== rst.id ? "none" : "block",
                position: isSlideInEnd && selectedHero === rst.id ? "absolute" : "relative",
                zIndex:
                  selectedHero === rst.id ? restaurants.length + 1 : index + 1,
              } as React.CSSProperties
            }
            className={`${styles.imageWrapper} ${
              isExpand && selectedHero !== rst.id ? styles.activeParallaxSlideIn : ""
            } ${isExpand && selectedHero === rst.id ? styles.fitActive : ""}`}
            onClick={() => {
              console.log("rst", rst);
              setIsExpand(true);
              setSelectedHero(rst.id);
            }}
            onAnimationEnd={(e) => {
          console.log("e",{e, index})
            if ((e as any).animationName.includes("parallaxSlideIn")) {
              setIsSlideInEnd(true);
            }
          }}
          ></div>
        ))}
      </div>
    </div>
  );
}
