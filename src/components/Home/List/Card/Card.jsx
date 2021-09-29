import Loading from "../../../Loading/Loading";
import cn from "classnames";

import classes from "./Card.module.css";

function Card({ error, loading, handleCardClick, card }) {
  return (
    <div
      className={cn([classes.cardListContainer], {
        [classes.hide]: !card,
      })}
    >
      <div className={classes.cardList}>
        <div
          onClick={() => {
            handleCardClick();
          }}
          className={classes.cardTitle}
        >
          <button className={classes.closeCard}> X </button>
        </div>
        {loading && <Loading />}
        {error && <p>ERROR ...</p>}
        <div className={classes.wrapperCard}></div>
      </div>
    </div>
  );
}

export default Card;
