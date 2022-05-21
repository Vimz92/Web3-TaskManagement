import React from "react";
import logo from "../images/logo.png";
import user from "../images/vimal-fb.jpg";

import {
  FaCalendar,
  FaSms,
  FaHome,
  FaQuestion,
  FaYoutube,
} from "react-icons/fa";

const styles = {
  container: "flex w-screen  h-18  bg-[#35415E] px-4 py-3 mb-5 fixed",
  middleLogo: "ml-0",
  logo: "object-cover cursor-pointer ",
  wrapper: "flex items-center justify-between grow",
  middleHeader: "mx-10 flex justify-start flex-row  gap-5",
  menuItem1: " md:flex mb-16 pb-6 ",
  menuItem:
    "flex mr-4 gap-3 cursor-pointer text-gray-300 font-bold hover:text-red-500 duration-300",
  rightHeader: "flex",
  image: "px-10",
  textbig: "flex items-center text-white font-bold",
  textsmall: "flex items-center text-gray-300 font-light",
  textContainer: "mr-2",
  user: "object-cover rounded-full",
  leftHeader:
    "items-center justify-end fixed top-0 h-screen w-20 flex flex-end flex-col bg-[#35415E] text-white",
};

const Header = () => {
  return (
    <>
      <div className={styles.leftHeader}>
        <div className={styles.menuItem1}>
          {" "}
          <FaHome size={30} />{" "}
        </div>
        <div className={styles.menuItem1}>
          {" "}
          <FaCalendar size={30} />{" "}
        </div>
        <div className={styles.menuItem1}>
          {" "}
          <FaSms size={30} />{" "}
        </div>
        <div className={styles.menuItem1}>
          {" "}
          <FaQuestion size={30} />{" "}
        </div>
        <div className={styles.menuItem1}>
          {" "}
          <FaYoutube size={30} />{" "}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.middleLogo}>
          <img src={logo} height={38} width={38} className={styles.logo} />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.middleHeader}>
            <div className={styles.menuItem}> Dashboard</div>
            <div className={styles.menuItem}> All Projects </div>
            <div className={styles.menuItem}> Members </div>
            <div className={styles.menuItem}> Stats </div>
            <div className={styles.menuItem}> Help </div>
          </div>

          <div className={styles.rightHeader}>
            <div className={styles.textContainer}>
              <div className={styles.textbig}> Diane Ward </div>
              <div className={styles.textsmall}>Project Manager</div>
            </div>


            <div className={styles.image}>
              <img src={user} height={50} width={50} className={styles.user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
