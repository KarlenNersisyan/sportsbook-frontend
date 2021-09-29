import Loading from "../../Loading/Loading";

import classes from "./List.module.css";

function List({ error, loading, categories }) {
  return (
    <div className={classes.list}>
      <div className={classes.title}>
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
              <div key={Math.random()} className={classes.listContainer}>
                <div>
                  <h2>{e.category}</h2>
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
                <div>
                  <span>{e.price}$</span>
                  <span>quantity {e.quantity}</span>
                  <span>{e.status}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
