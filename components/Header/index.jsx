import Image from "next/image";
import fire from "../../assets/fire.png";
import { useContext } from "react";
import { TinderContext } from "../../context/TinderContext";
import { style } from "./styles";

const Header = () => {
  const { connectWallet, currentAccount, disconnectWallet } =
    useContext(TinderContext);

  return (
    <div
      className={`${style.wrapper} ${
        currentAccount ? "bg-gray-900" : "bg-transparent fixed"
      }`}
    >
      <div className={style.main}>
        <Image src={fire} alt="fire" height={45} width={45} />
        <h1 className={style.tinderText}>tinder</h1>

        <div className={style.leftMenu}>
          <div className={style.menuItem}>Products</div>
          <div className={style.menuItem}>Learn</div>
          <div className={style.menuItem}>Safety</div>
          <div className={style.menuItem}>Support</div>
          <div className={style.menuItem}>Download</div>
        </div>
      </div>
      <div className={style.rightMenu}>
        <div className="text-white">ENGLISH</div>
        {currentAccount ? (
          <>
            <div className={style.currentAccount}>
              <Image
                src={
                  "https://moralis.io/wp-content/uploads/2021/05/moralisWhiteLogo.svg"
                }
                alt="moralis"
                height={20}
                width={20}
              />
              <span className={style.accountAddress}>
                {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
              </span>
            </div>
            <button
              className={style.authButton}
              onClick={() => disconnectWallet()}
            >
              Logout
            </button>
          </>
        ) : (
          <button className={style.authButton} onClick={() => connectWallet()}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
