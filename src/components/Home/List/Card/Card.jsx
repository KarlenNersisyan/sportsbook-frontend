import cn from "classnames";
import Loading from "../../../Loading/Loading";

import classes from "./Card.module.css";

function Card({ handleCardClick, card, filteredItem, loading, error }) {
  return (
    <div
      className={cn([classes.cardListContainer], {
        [classes.hide]: !card,
      })}
    >
      <div className={classes.cardList}>
        <div className={classes.cardTitle}>
          <button
            onClick={() => {
              handleCardClick();
            }}
            className={classes.closeCard}
          >
            {" "}
            X{" "}
          </button>
        </div>
        {loading && <Loading />}
        {error && <p>ERROR ...</p>}

        {filteredItem &&
          filteredItem.map((elem) => {
            return (
              <div key={elem.id} className={classes.wrapperCard}>
                <div>
                  <div>
                    <h2>{elem.category}</h2>
                    <h3>{elem.name}</h3>
                  </div>
                  <div>
                    <img src={elem.images} alt={elem.name} />
                  </div>
                </div>
                <div className={classes.infoCardItem}>
                  <div>
                    <div>{elem.long_description}</div>
                    <div>{elem.short_description}</div>
                  </div>
                  <div>
                    <span>({elem.price}$)</span>
                    <span> QUANTITY ({elem.quantity})</span>
                    <span> STATUS ({elem.status})</span>
                    <span> {elem.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
