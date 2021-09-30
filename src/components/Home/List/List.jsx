import { useEffect, useState } from "react";
import cn from "classnames";
import Loading from "../../Loading/Loading";
import Card from "./Card/Card";
import { getCategories, getTags } from "../../../services/service";

import classes from "./List.module.css";

function List({
  error,
  loading,
  categories,
  list,
  handleOnClick,
  setError,
  setLoading,
}) {
  const [card, setCard] = useState(false);
  const [filteredItem, setFilteredItem] = useState([]);
  const [filteredListItem, setFilteredListItem] = useState();
  const [filteredTags, setFilteredTags] = useState();
  const [women, setWomen] = useState([]);
  const [tag, setTag] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setWomen(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    getTags()
      .then((res) => {
        setTag(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const handleCardClick = (id) => {
    const category = categories.filter((item) => item.id === id);
    setFilteredItem(category);
    setCard(!card);
  };

  const handleWomenClick = (e) => {
    const listItem = e.target.innerText;
    const listFilterItem = categories.filter(
      (item) => item.category === listItem
    );
    setFilteredListItem(listFilterItem);
    setFilteredTags("");
  };

  const handleAllClick = () => {
    setFilteredListItem("");
    setFilteredTags("");
  };

  const handleTagsClick = (e) => {
    const listTags = e.target.innerText;
    const listFilterTags = categories.filter((item) => item.tag === listTags);
    setFilteredTags(listFilterTags);
    setFilteredListItem("");
  };

  const showedList = filteredListItem
    ? filteredListItem
    : filteredTags
    ? filteredTags
    : categories;

  return (
    <div
      className={cn([classes.backgroundContainerList], {
        [classes.hide]: !list,
      })}
    >
      <div className={classes.list}>
        <div className={classes.title}>
          <h1 onClick={handleAllClick} className={classes.allList}>
            Shoes Shopping
          </h1>
          {loading && <b> Loading... </b>}
          {error && <b> Error... </b>}
          <div className={classes.alfa}>
            {women &&
              women.map((el) => {
                return (
                  <div className={classes.infoPage} key={Math.random()}>
                    <p onClick={handleWomenClick}>{el}</p>
                  </div>
                );
              })}
          </div>
          {loading && <b> Loading... </b>}
          {error && <b> Error... </b>}
          <div className={classes.gamma}>
            {tag &&
              tag.map((elem) => {
                return (
                  <div className={classes.infoPage} key={Math.random()}>
                    <i onClick={handleTagsClick}>{elem}</i>
                  </div>
                );
              })}
          </div>
          <button onClick={handleOnClick} className={classes.close}>
            X
          </button>
        </div>
        {loading && <Loading />}
        {error && <b>ERROR ...</b>}
        <div className={classes.wrapperList}>
          {showedList &&
            showedList.map((e) => {
              return (
                <div
                  onClick={() => handleCardClick(e.id)}
                  key={e.id}
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
            filteredItem={filteredItem}
            error={error}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}

export default List;
