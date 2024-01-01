"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useRef, useState } from "react";
import { useAnimationFrame, motion } from "framer-motion";
import Link from "next/link";
import wallpaper from "./photos/a.png";
import profileP from "./photos/pp.jpeg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const horizontal = [
    {
      name: "Fullstack AI Flask NextJS Medical Diagnose ",
      vidLink:
        "https://github.com/Vinexy/Fullstack-AI-Flask-NextJS-Medical-Diagnose/assets/85889196/e2343bac-30fd-4cb8-bb26-4a7294de547b",
      gitLink:
        "https://github.com/Vinexy/Fullstack-AI-Flask-NextJS-Medical-Diagnose/tree/main",
      i: 1,
    },
    {
      name: "React Tensorflow Hand Move Site WebCam",
      vidLink:
        "https://github.com/Vinexy/NextJS-Projects/assets/85889196/15dde65b-abb5-44f5-868d-0d96fa96bbd4",
      gitLink:
        "https://github.com/Vinexy/NextJS-Projects/tree/master/gesture-recognition",
      i: 2,
    },
    {
      name: "Deep Talking Photos with MakeItTalk",
      vidLink:
        "https://github.com/Vinexy/DeepLearning/assets/85889196/77340a41-28f0-4e12-8d76-7b81af2766f8",
      gitLink: "https://github.com/Vinexy/DeepLearning",
      i: 3,
    },
    {
      name: "Unity Mirror Multiplayer Ship War",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227571149-52620a0a-0cff-4be1-9515-76e65b897e49.gif",
      gitLink: "https://github.com/Vinexy",
      i: 4,
    },
    {
      name: "Unity AR Face Detection Brick Breaker",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/222722464-c3a2e36f-d605-4185-9204-66396bde28a6.gif",
      gitLink:
        "https://github.com/Vinexy/Unity-Home-Breaker-Android-Game-Using-Face-Detection",
      i: 5,
    },
    {
      name: "Unity Augmented Reality Sigma Money",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/223253108-0a27dfe7-93d0-49ea-9e5d-7ec5ae720ad7.gif",
      gitLink:
        "https://github.com/Vinexy/Unity-Augmented-Reality-Sigma-Money-Project",
      i: 6,
    },
    {
      name: "React Image to Text from Youtube",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227568031-144852fd-c115-4f9d-87de-a8e89f1ed85c.gif",
      gitLink:
        "https://github.com/Vinexy/Redux-React-Projects/tree/master/image-to-text-app",
      i: 7,
    },
    {
      name: "Deep NLP Pos-Neg Comment Discriminator",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/232251935-0e6c7836-7034-482c-a4bc-a732a5495186.gif",
      gitLink: "https://github.com/Vinexy/DeepLearning",
      i: 8,
    },
    {
      name: "Deep Conv Facial Expression Recognition",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/232251952-1ad392c4-a805-47f4-aff1-bab315f3676c.gif",
      gitLink: "https://github.com/Vinexy/DeepLearning",
      i: 9,
    },
    {
      name: "Deep Retinanet Chess Piece Recognition",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/232251944-02081294-0225-4de0-af5e-63c6eccdc453.gif",
      gitLink: "https://github.com/Vinexy/DeepLearning",
      i: 10,
    },
    {
      name: "Unity Flintstones Platform Game",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227111115-cb79bf63-a596-4d45-ac3f-498dfcf5b405.gif",
      gitLink: "https://github.com/Vinexy/The-Flintstones-Platform-Game-Unity",
      i: 11,
    },
    {
      name: "React Redux Typing Speed App",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227572507-fe5c750c-b7fc-40d7-af42-4a05f4260317.gif",
      gitLink:
        "https://github.com/Vinexy/Redux-React-Projects/tree/master/typing-speed-app",
      i: 12,
    },
    {
      name: "React Redux Spend Bill Gates Money",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227575779-1cea1176-4ba0-463c-b944-46d7b772e883.gif",
      gitLink:
        "https://github.com/Vinexy/Redux-React-Projects/tree/master/spend-bill-gates-money-app",
      i: 13,
    },
    {
      name: "React Redux Memory Game",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227575023-d21141b9-8f15-40ba-82ef-f490b2a3f6d8.gif",
      gitLink:
        "https://github.com/Vinexy/Redux-React-Projects/tree/master/memory-game-redux",
      i: 14,
    },
    {
      name: "React Redux Coivd-19 All Countries",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227579516-a395e918-7a52-4c22-ba98-c78c6592be46.gif",
      gitLink:
        "https://github.com/Vinexy/Redux-React-Projects/tree/master/covid-19-tracker-app",
      i: 15,
    },
    {
      name: "React Redux Markdown Previewer",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227578603-d1674a3b-5d95-4f61-a240-8c5272507a90.gif",
      gitLink:
        "https://github.com/Vinexy/Redux-React-Projects/tree/master/markdown-reviewer",
      i: 16,
    },
    {
      name: "React Redux Notes App",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227576877-0464f392-493a-42bf-b200-250c8dc2a7a5.gif",
      gitLink:
        "https://github.com/Vinexy/Redux-React-Projects/tree/master/notes-app",
      i: 17,
    },
    {
      name: "React Redux Weather App",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/227577551-0410e140-616f-431c-a806-e785e84b7ff4.gif",
      gitLink:
        "https://github.com/Vinexy/Redux-React-Projects/tree/master/Without%20Redux%20Projects/weather-app",
      i: 18,
    },
  ];

  const vertical = [
    {
      name: "İdariYasaGPT Langchain OpenAI",
      vidLink:
        "https://github.com/Vinexy/IdariYasaGPT/assets/85889196/5c26ee6f-d38c-4dd0-981d-c77a26555bd9",
      gitLink:
        "https://github.com/Vinexy/IdariYasaGPT/assets/85889196/5c26ee6f-d38c-4dd0-981d-c77a26555bd9",
      i: 1,
    },
    {
      name: "Unity AR Furniture Position App",
      vidLink:
        "https://user-images.githubusercontent.com/85889196/236079312-dba78a05-ee45-4186-8947-31b25eba073b.gif",
      gitLink: "https://github.com/Vinexy/Unity-AR-Furniture-Position",
      i: 2,
    },
    {
      name: "Unity AI Voice Assistant AWS",
      vidLink: "https://github-production-user-asset-6210df.s3.amazonaws.com/85889196/243145087-66391951-2a21-4407-976b-798919551238.gif",
      gitLink: "https://github.com/Vinexy/Unity-AWS-OpenAi-Ai-Voice-Assistant/tree/master",
      i: 3,
    },
    {
      name: "Deep GANs Synthetic Clothes",
      vidLink: "https://user-images.githubusercontent.com/85889196/232251937-5da0a02c-4722-4754-a06d-a217dcc09718.gif",
      gitLink: "https://github.com/Vinexy/DeepLearning",
      i: 4,
    },
    {
      name: "Unity Face Mask Android",
      vidLink: "https://user-images.githubusercontent.com/85889196/222955010-e690b80c-9526-4197-9e5b-b05849c2b8bd.gif",
      gitLink: "https://github.com/Vinexy/Unity-Face-Mask-Android",
      i: 5,
    },
    {
      name: "React Native Code Talk Firebase",
      vidLink: "https://user-images.githubusercontent.com/85889196/227106987-af9f9613-2a67-4a47-bb85-5b84b0455240.gif",
      gitLink: "https://github.com/Vinexy/React-Native-Projects/tree/master/CodeTalks",
      i: 6,
    },
    {
      name: "React Native Recipe App",
      vidLink: "https://user-images.githubusercontent.com/85889196/227112328-409f317c-57fd-44ca-867d-b4a42f1297c2.gif",
      gitLink: "https://github.com/Vinexy/React-Native-Projects/tree/master/RecipeApp",
      i: 7,
    },
    {
      name: "React Native Find Job App",
      vidLink: "https://user-images.githubusercontent.com/85889196/227112059-ddd76b92-2634-47bc-aeb6-c6a7748dcd35.gif",
      gitLink: "https://github.com/Vinexy/React-Native-Projects/tree/master/FindJobApp",
      i: 8,
    },
    {
      name: "React Native Todo App",
      vidLink: "https://user-images.githubusercontent.com/85889196/227112601-242f90c9-b62a-4f14-8b9c-3cac22b5710a.gif",
      gitLink: "https://github.com/Vinexy/React-Native-Projects/tree/master/TodoApp",
      i: 9,
    },
    {
      name: "React Native e-store App Style",
      vidLink: "https://user-images.githubusercontent.com/85889196/227109030-c6e085f9-65ef-4825-a4bb-d69fb04cfb96.gif",
      gitLink: "https://github.com/Vinexy/React-Native-Projects/tree/master/EStoreApp",
      i: 10,
    },
    {
      name: "OpenCV Video Text Detection",
      vidLink: "https://user-images.githubusercontent.com/85889196/227754190-390a42ba-ee25-4898-9bfb-3efa354d7eec.gif",
      gitLink: "https://github.com/Vinexy/Live-Video-Text-Detection-Using-Pytesseract-OpenCV",
      i: 11,
    },
    {
      name: "Unity Space Shooter Game",
      vidLink: "https://user-images.githubusercontent.com/85889196/227754549-c1c110ae-5568-45f0-9657-71d3b1f96fb7.gif",
      gitLink: "https://github.com/Vinexy/Unity-Space-Shooter-Game",
      i: 12,
    },
  ];

  const ref = useRef(null);
  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });
  return (
    <div className={styles.main}>
      <div className="cube d-none d-sm-block" ref={ref}>
        <div className="side front ">AHMET FATIH COPUR</div>
        <div className="side left ">COMPUTER ENGINEER</div>
        <div className="side right ">ANKARA YILDIRIM BEYAZIT UNIVERSITY</div>
        <div className="side top ">DEVELOPER</div>
        <div className="side bottom ">
          <Image
            src={profileP}
            alt="Image"
            style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
            className="shdwBlack card-img-top pad  borderColorr "
            fill
          />
        </div>
        <div className="side back "></div>
      </div>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          overflow: "hidden",
          objectFit: "contain",
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
        }}
      >
        <Image
          style={{ opacity: 0.9 }}
          priority
          quality={100}
          src={wallpaper}
          alt="wallpaper"
          fill
        />
      </div>
      <h1 className={styles.h1}>My Projects</h1>

      <div className="container text-center card-group ">
        <div className="row  g-4 ">
          {horizontal?.map((hor) => (
            <motion.div
              key={hor.i}
              whileHover={{ scale: 1.7 }}
              whileTap={{ scale: 1 }}
              className="col-sm-4 col-xs-12"
            >
              <div
                classname="card align-items-center "
                style={{
                  backgroundColor: "gold",
                  borderRadius: 5,
                }}
              >
                <Link href={hor.gitLink}>
                  <Image
                    unoptimized
                    loader={() => hor.vidLink}
                    src={hor.vidLink}
                    alt="Image"
                    width={400}
                    height={250}
                    style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                    className="shdwBlack card-img-top pad  borderColorr "
                  />
                </Link>
                <h5
                  className={
                    hor.i % 3 == 1
                      ? `shdw bg-body-tertiary p-1 rounded-bottom`
                      : hor.i % 3 == 2
                      ? `midShdw bg-body-tertiary p-1 rounded-bottom `
                      : `rigShdw bg-body-tertiary p-1 rounded-bottom `
                  }
                >
                  {hor.name}
                </h5>
              </div>
            </motion.div>
          ))}

          <div className="row  g-4 ">
            {vertical?.map((ver) => (
              <motion.div
                key={ver.i}
                whileHover={{ scale: 1.7 }}
                whileTap={{ scale: 1 }}
                className="col-xs-12 col-sm-3"
              >
                <div
                  classname="card align-items-center "
                  style={{
                    backgroundColor: "gold",
                    borderRadius: 5,
                  }}
                >
                  <Link href={ver.gitLink}>
                    <Image
                      unoptimized
                      loader={() => ver.vidLink}
                      src={ver.vidLink}
                      alt="Image"
                      width={400}
                      height={400}
                      style={{
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                      className="shdwBlack card-img-top pad  borderColorr "
                    />
                  </Link>
                  <h5
                    className={
                      ver.i % 4 == 1
                        ? `shdw bg-body-tertiary p-1 rounded-bottom`
                        : (ver.i % 4 == 2 || ver.i % 4 == 3) 
                        ? `midShdw bg-body-tertiary p-1 rounded-bottom `
                        : `rigShdw bg-body-tertiary p-1 rounded-bottom `
                    }
                  >
                    {ver.name}
                  </h5>
                </div>
              </motion.div>
            ))}
            {/* Face Mask */}
            <motion.div
              whileHover={{ scale: 1.7 }}
              whileTap={{ scale: 1 }}
              className="col-xs-12 col-sm-3 "
            >
              <div
                classname=" card align-items-center "
                style={{
                  backgroundColor: "gold",
                  borderRadius: 5,
                }}
              >
                <Link href="https://github.com/Vinexy/Unity-Face-Mask-Android">
                  <Image
                    src="https://user-images.githubusercontent.com/85889196/222955010-e690b80c-9526-4197-9e5b-b05849c2b8bd.gif"
                    alt="Image"
                    width={400}
                    height={400}
                    style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                    className="shdwBlack card-img-top pad  borderColorr "
                    unoptimized
                  />
                </Link>
                <h5 className="shdw bg-body-tertiary p-1 rounded-bottom ">
                  Unity Face Mask Android
                </h5>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
