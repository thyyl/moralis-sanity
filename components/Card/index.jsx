import { useContext } from "react";
import { TinderContext } from "../../context/TinderContext";
import { SiTinder } from "react-icons/si";
import CardHeader from "../CardHeader";
import CardFooter from "../CardFooter";
import TinderCardItem from "../TinderCardItem";
import { style } from "./styles";

const Card = () => {
  const { cardsData } = useContext(TinderContext);

  return (
    <div className={style.wrapper}>
      <CardHeader />
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <SiTinder className={style.tinderLogo} />
          <div className={style.noMoreText}>
            No More Profiles in your Location...
          </div>
        </div>
        <div className={style.swipesContainer}>
          {cardsData.map((card, index) => (
            <TinderCardItem card={card} key={index} />
          ))}
        </div>
      </div>
      <CardFooter />
    </div>
  );
};

export default Card;
