import React from "react";
import profilePic from "../../assets/profile-pic.avif";
import logo from "../../assets/logo.png";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
// import { useContext } from 'react'
// import { TinderContext } from '../context/TinderContext'
import { style } from "./styles";

const CardHeader = () => {
  // const { currentUser } = useContext(TinderContext);

  return (
    <div className={style.wrapper}>
      <Image
        src={profilePic}
        width={40}
        height={40}
        alt="profile-pic"
        className={style.profileImage}
      />
      <Image
        src={logo}
        height={150}
        width={200}
        alt="logo"
        className={style.logo}
      />
      <div className="flex items-center">
        <IoIosNotifications className={style.notificationIcon} />
        <div className={style.notifications} />
      </div>
    </div>
  );
};

export default CardHeader;
