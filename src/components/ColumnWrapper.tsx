import Image from "next/image";
import styles from "./ColumnWrapper.module.css";

const columns = [
  {
    id: 1,
    images: [
      {
        id: "col1_img1",
        url: "/images/rst-img-2.jpg",
        translateY: "0",
        delay: "0s",
      },
      {
        id: "col1_img2",
        url: "/images/rst-img-3.jpeg",
        translateY: "400%",
        delay: "0.6s",
      },
      {
        id: "col1_img3",
        url: "/images/rst-img-4.jpg",
        translateY: "600%",
        delay: "0.8s",
      },
      {
        id: "col1_img4",
        url: "/images/rst-img-5.jpeg",
        translateY: "800%",
        delay: "1s",
      },
    ],
    direction: "up",
    duration: "1.7s",
    delay: "0.3s",
  },
  {
    id: 2,
    images: [
      {
        id: "col2_img4",
        url: "/images/rst-img-9.jpg",
        translateY: "-800%",
        delay: "1s",
      },
      {
        id: "col2_img3",
        url: "/images/rst-img-8.jpg",
        translateY: "-600%",
        delay: "0.8s",
      },
      {
        id: "col2_img2",
        url: "/images/rst-img-7.jpeg",
        translateY: "-400%",
        delay: "0.6s",
      },
      {
        id: "col2_img1",
        url: "/images/rst-img-6.jpeg",
        translateY: "0",
        delay: "0s",
      },
    ],
    direction: "down",
    duration: "1.75s",
    delay: "0.25s",
  },
  {
    id: 3,
    images: [
      {
        id: "col3_img1",
        url: "/images/rst-img-3.jpeg",
        translateY: "0",
        delay: "0s",
      },
      {
        id: "col3_img2",
        url: "/images/rst-img-2.jpg",
        translateY: "400%",
        delay: "0.6s",
      },
      {
        id: "col3_img3",
        url: "/images/hero.jpg",
        translateY: "600%",
        delay: "0.8s",
      },
      {
        id: "col3_img4",
        url: "/images/rst-img-4.jpg",
        translateY: "800%",
        delay: "1s",
      },
    ],
    direction: "up",
    duration: "2s",
    delay: "0s",
  },
  {
    id: 4,
    images: [
      {
        id: "col4_img4",
        url: "/images/rst-img-10.jpg",
        translateY: "-800%",
        delay: "1s",
      },
      {
        id: "col4_img3",
        url: "/images/rst-img-8.jpg",
        translateY: "-600%",
        delay: "0.8s",
      },
      {
        id: "col4_img2",
        url: "/images/rst-img-7.jpeg",
        translateY: "-400%",
        delay: "0.6s",
      },
      {
        id: "col4_img1",
        url: "/images/rst-img-10.jpg",
        translateY: "0",
        delay: "0s",
      },
    ],
    direction: "down",
    duration: "1.75s",
    delay: "0.25s",
  },
  {
    id: 5,
    images: [
      {
        id: "col5_img1",
        url: "/images/rst-img-2.jpg",
        translateY: "0",
        delay: "0s",
      },
      {
        id: "col5_img2",
        url: "/images/rst-img-5.jpeg",
        translateY: "400%",
        delay: "0.6s",
      },
      {
        id: "col5_img3",
        url: "/images/rst-img-3.jpeg",
        translateY: "600%",
        delay: "0.8s",
      },
      {
        id: "col5_img4",
        url: "/images/rst-img-10.jpg",
        translateY: "800%",
        delay: "1s",
      },
    ],
    direction: "up",
    duration: "1.7s",
    delay: "0.3s",
  },
];

export default function ColumnWrapper() {
  return (
    <div className={styles.columnContainer}>
      {columns.map((col) => (
        <div
          key={col.id}
          style={
            {
              "--direction": col.direction === "up" ? "100%" : "-100%",
              "--duration": col.duration,
              animationDelay: col.delay,
            } as React.CSSProperties
          }
          className={styles.column}
        >
          {col.images.map((img, index) => (
            <div
              key={img.id}
              style={
                {
                  display: "inline-block",
                  height: "100%",
                  width: "100%",
                  "--img-direction": img.translateY,
                  animationDelay: img.delay,
                } as React.CSSProperties
              }
              className={styles.imgColumn}
            >
              <Image
                src={img.url}
                alt={img.id}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
