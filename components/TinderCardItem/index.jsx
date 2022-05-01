import { useContext } from "react";
import { TinderContext } from "../../context/TinderContext";
import { FaUndoAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import TinderCard from "react-tinder-card";
import { style } from "./styles";

const TinderCardItem = ({ card }) => {
  const { handleRightSwipe, currentAccount } = useContext(TinderContext);

  const onSwipe = (dir) => {
    if (dir === "right") {
      handleRightSwipe(card, currentAccount);
    }
  };

  return (
    <TinderCard
      className={style.tinderCardWrapper}
      preventSwipe={["up", "down"]}
      onSwipe={onSwipe}
    >
      <div
        className={style.wrapper}
        style={{ backgroundImage: `url('${card?.imageUrl}')` }}
      >
        <div className={style.space}>
          <div className={style.name}>
            {card?.name}
            <span className={style.age}>{card?.age}</span>
          </div>
        </div>
        <div className={style.walletAddress}>
          {card?.walletAddress.slice(0, 6)}...{card?.walletAddress.slice(39)}
        </div>
        <div className={style.reactionsContainer}>
          <div className={`${style.backColors} ${style.buttonContainer}`}>
            <FaUndoAlt
              className={`${style.backColors} ${style.buttonSymbol}`}
              onClick={() => goBack()}
            />
          </div>
          <div className={`${style.xColors} ${style.buttonContainer}`}>
            <AiOutlineClose
              className={`${style.xColors} ${style.buttonSymbol}`}
            />
          </div>
          <div className={`${style.starColors} ${style.buttonContainer}`}>
            <AiFillStar
              className={`${style.starColors} ${style.buttonSymbol}`}
            />
          </div>
          <div className={`${style.lightningColors} ${style.buttonContainer}`}>
            <BsFillLightningChargeFill
              className={`${style.lightningColors} ${style.buttonSymbol}`}
            />
          </div>
        </div>
      </div>
    </TinderCard>
  );
};

export default TinderCardItem;
