"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import wallpaper from "./photos/a.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.main}>
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
        <div className="row row-cols-3 g-4 ">
          {/* SİGMA */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Unity-Augmented-Reality-Sigma-Money-Project">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/223253108-0a27dfe7-93d0-49ea-9e5d-7ec5ae720ad7.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                />
              </Link>
              <h5 className="shdw bg-body-tertiary p-1 rounded-bottom ">
                Unity Augmented Reality Sigma Money{" "}
              </h5>
            </div>
          </motion.div>
          {/* Face Brick Breaker */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Unity-Home-Breaker-Android-Game-Using-Face-Detection">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/222722464-c3a2e36f-d605-4185-9204-66396bde28a6.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="midShdw bg-body-tertiary p-1 rounded-bottom ">
                Unity Face Detection Brick Breaker
              </h5>
            </div>
          </motion.div>
          {/* Flintstones */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/The-Flintstones-Platform-Game-Unity">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227111115-cb79bf63-a596-4d45-ac3f-498dfcf5b405.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="rigShdw bg-body-tertiary p-1 rounded-bottom ">
                Unity Flintstones Platform Game
              </h5>
            </div>
          </motion.div>
          {/* Text to image */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Redux-React-Projects/tree/master/image-to-text-app">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227568031-144852fd-c115-4f9d-87de-a8e89f1ed85c.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="shdw bg-body-tertiary p-1 rounded-bottom ">
                React Image to Text from Youtube
              </h5>
            </div>
          </motion.div>
          {/* Gemi */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227571149-52620a0a-0cff-4be1-9515-76e65b897e49.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="midShdw bg-body-tertiary p-1 rounded-bottom ">
                Unity Mirror Multiplayer Ship War
              </h5>
            </div>
          </motion.div>
          {/* Klavye yazma */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Redux-React-Projects/tree/master/typing-speed-app">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227572507-fe5c750c-b7fc-40d7-af42-4a05f4260317.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="rigShdw bg-body-tertiary p-1 rounded-bottom ">
                React Redux Typing Speed App
              </h5>
            </div>
          </motion.div>
          {/* Memory game */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Redux-React-Projects/tree/master/memory-game-redux">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227575023-d21141b9-8f15-40ba-82ef-f490b2a3f6d8.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="shdw bg-body-tertiary p-1 rounded-bottom ">
                React Redux Memory Game
              </h5>
            </div>
          </motion.div>
          {/* Spen Bill Gates */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Redux-React-Projects/tree/master/spend-bill-gates-money-app">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227575779-1cea1176-4ba0-463c-b944-46d7b772e883.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="midShdw bg-body-tertiary p-1 rounded-bottom ">
                React Redux Spend Bill Gates Money
              </h5>
            </div>
          </motion.div>
          {/* Notes app */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Redux-React-Projects/tree/master/notes-app">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227576877-0464f392-493a-42bf-b200-250c8dc2a7a5.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="rigShdw bg-body-tertiary p-1 rounded-bottom ">
                React Redux Notes App
              </h5>
            </div>
          </motion.div>
          {/* Weather app */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Redux-React-Projects/tree/master/Without%20Redux%20Projects/weather-app">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227577551-0410e140-616f-431c-a806-e785e84b7ff4.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="shdw bg-body-tertiary p-1 rounded-bottom ">
                React Redux Weather App
              </h5>
            </div>
          </motion.div>
          {/* Markdown prev */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Redux-React-Projects/tree/master/markdown-reviewer">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227578603-d1674a3b-5d95-4f61-a240-8c5272507a90.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="midShdw bg-body-tertiary p-1 rounded-bottom ">
                React Redux Markdown Previewer
              </h5>
            </div>
          </motion.div>
          {/* Covid-19 */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-4 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Redux-React-Projects/tree/master/covid-19-tracker-app">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227579516-a395e918-7a52-4c22-ba98-c78c6592be46.gif"
                  alt="Image"
                  width={400}
                  height={250}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="rigShdw bg-body-tertiary p-1 rounded-bottom ">
                React Redux Coivd-19 All Countries
              </h5>
            </div>
          </motion.div>

          {/* ******* */}

          {/* Face Mask */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-3 "
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
          {/* video detect */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-3 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Live-Video-Text-Detection-Using-Pytesseract-OpenCV">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227754190-390a42ba-ee25-4898-9bfb-3efa354d7eec.gif"
                  alt="Image"
                  width={400}
                  height={400}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="midShdw bg-body-tertiary p-1 rounded-bottom ">OpenCV Video Text Detection
              </h5>
            </div>
          </motion.div>
          {/* spaceshooter */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-3 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/Unity-Space-Shooter-Game">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227754549-c1c110ae-5568-45f0-9657-71d3b1f96fb7.gif"
                  alt="Image"
                  width={400}
                  height={400}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="midShdw bg-body-tertiary p-1 rounded-bottom ">Unity Space Shooter Game</h5>
            </div>
          </motion.div>
          {/* Code talks */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-3 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/React-Native-Projects/tree/master/CodeTalks">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227106987-af9f9613-2a67-4a47-bb85-5b84b0455240.gif"
                  alt="Image"
                  width={400}
                  height={400}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="rigShdw bg-body-tertiary p-1 rounded-bottom ">
                React Native Code Talks Firebase
              </h5>
            </div>
          </motion.div>
          {/* Recipe */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-3 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/React-Native-Projects/tree/master/RecipeApp">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227112328-409f317c-57fd-44ca-867d-b4a42f1297c2.gif"
                  alt="Image"
                  width={400}
                  height={400}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="shdw bg-body-tertiary p-1 rounded-bottom ">
                React Native Recipe App
              </h5>
            </div>
          </motion.div>
          {/* FindJob App */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-3 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/React-Native-Projects/tree/master/FindJobApp">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227112059-ddd76b92-2634-47bc-aeb6-c6a7748dcd35.gif"
                  alt="Image"
                  width={400}
                  height={400}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="midShdw bg-body-tertiary p-1 rounded-bottom ">
                React Native Find Job App
              </h5>
            </div>
          </motion.div>
          {/* android todo-list */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-3 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/React-Native-Projects/tree/master/TodoApp">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227112601-242f90c9-b62a-4f14-8b9c-3cac22b5710a.gif"
                  alt="Image"
                  width={400}
                  height={400}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="midShdw bg-body-tertiary p-1 rounded-bottom ">
                React Native Todo App
              </h5>
            </div>
          </motion.div>
          {/* E-store native */}
          <motion.div
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1 }}
            className="col-3 "
          >
            <div
              classname=" card align-items-center "
              style={{
                backgroundColor: "gold",
                borderRadius: 5,
              }}
            >
              <Link href="https://github.com/Vinexy/React-Native-Projects/tree/master/EStoreApp">
                <Image
                  src="https://user-images.githubusercontent.com/85889196/227109030-c6e085f9-65ef-4825-a4bb-d69fb04cfb96.gif"
                  alt="Image"
                  width={400}
                  height={400}
                  style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                  className="shdwBlack card-img-top pad  borderColorr "
                  unoptimized
                />
              </Link>
              <h5 className="rigShdw bg-body-tertiary p-1 rounded-bottom ">
                React Native e-store App Style
              </h5>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
