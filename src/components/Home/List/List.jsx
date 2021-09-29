import Loading from "../../Loading/Loading";
import cn from "classnames";

import classes from "./List.module.css";
import Card from "./Card/Card";
import { useState } from "react";

function List({ error, loading, categories, list, handleOnClick }) {
  const [card, setCard] = useState(false);

  const handleCardClick = () => {
    setCard(!card);
  };

  return (
    <div
      className={cn([classes.list], {
        [classes.hide]: !list,
      })}
    >
      <div onClick={handleOnClick} className={classes.title}>
        <h1> Shoes Shopping </h1>
        <button className={classes.close}> X </button>
      </div>
      {loading && <Loading />}
      {error && <p>ERROR ...</p>}
      <div className={classes.wrapperList}>
        {categories &&
          categories.map((e) => {
            console.log(e);
            return (
              <div
                onClick={handleCardClick}
                key={Math.random()}
                className={classes.listContainer}
              >
                <div>
                  <h2 className={classes.categoryStyle}>{e.category}</h2>
                  <h3>{e.name}</h3>
                  <h4>{e.long_description}</h4>
                </div>
                <div className={classes.imageBlock}>
                  <img
                    className={classes.infoListImage}
                    src={e.images[0]}
                    alt="Sport shoes"
                  />
                  <img
                    className={classes.infoListImage}
                    src={e.images[1] ? e.images[1] : e.images[0]}
                    alt="Sport shoes"
                  />
                </div>
                <h5>{e.short_description}</h5>
                <div className={classes.spanBlockList}>
                  <span>{e.price}$</span>
                  <span>quantity {e.quantity}</span>
                  <span>{e.status}</span>
                </div>
              </div>
            );
          })}
      </div>
      {card && (
        <Card
          handleCardClick={handleCardClick}
          card={card}
          error={error}
          loading={loading}
        />
      )}
    </div>
  );
}

export default List;
