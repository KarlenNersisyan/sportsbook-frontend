import { useEffect, useState } from "react";

// Import Images Start
import { getProducts } from "../../services/service";
import backImage from "../../assets/images/1-89.png";
import infoImage from "../../assets/images/1-90.png";
import back1 from "../../assets/images/1-85.png";
import infoBack1 from "../../assets/images/1-86.png";
import back2 from "../../assets/images/1-87.png";
import infoBack2 from "../../assets/images/1-93.png";
import featured from "../../assets/images/1-65.png";
import longline from "../../assets/images/1-4.png";
import shortLine from "../../assets/images/1-20.png";
import latest from "../../assets/images/1-27.png";
import newStyle from "../../assets/images/1-30.png";
import saleStyle from "../../assets/images/1-46.png";
import shoes1 from "../../assets/images/1-67.png";
import shoes2 from "../../assets/images/1-39.png";
import shoes3 from "../../assets/images/1-45.png";
import simple from "../../assets/images/1-31.png";
import sum1 from "../../assets/images/1-32.png";
import categoriesImage from "../../assets/images/1-17.png";
import womenImage from "../../assets/images/1-19.png";
import best from "../../assets/images/1-3.png";
import shoesSmall from "../../assets/images/1-13.png";
import titleSimple from "../../assets/images/1-6.png";
import sum120small from "../../assets/images/1-7.png";
import sum120 from "../../assets/images/1-8.png";
import tag from "../../assets/images/1-25.png";
import tags from "../../assets/images/1-24.png";
// Import Images End

import classes from "./Home.module.css";
import List from "./List/List";

function Home() {
  const [categories, setCategories] = useState([]);
  const [list, setList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res);
        setCategories(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const handleOnClick = () => {
    setList(!list);
  };

  return (
    <div className={classes.backgroundWebsite}>
      <div className={classes.header}>
        <h1> Whatever header they currently use goes here </h1>
      </div>
      <div className={classes.menu}>
        <a
          href="https://www.flipkart.com/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu"
          target="_blank"
          rel="noreferrer"
        >
          <span> Men's </span>
        </a>
        <a
          href="https://www.flipkart.com/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu"
          target="_blank"
          rel="noreferrer"
        >
          <span> Women's</span>
        </a>
        <a
          href="https://www.flipkart.com/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu"
          target="_blank"
          rel="noreferrer"
        >
          <span> Kids </span>
        </a>
        <a
          href="https://www.flipkart.com/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu"
          target="_blank"
          rel="noreferrer"
        >
          <span> Sports </span>
        </a>
        <a
          href="https://www.flipkart.com/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu"
          target="_blank"
          rel="noreferrer"
        >
          <span> Brands </span>
        </a>
        <a
          href="https://www.flipkart.com/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu"
          target="_blank"
          rel="noreferrer"
        >
          <span> Collections </span>
        </a>
      </div>
      <div className={classes.titleImage}>
        <img src={backImage} alt="backImages" className={classes.backImage} />
        <img src={infoImage} alt="infoImage" className={classes.infoImage} />
        <a
          href="https://www.sportsshoes.com/"
          target="_blank"
          rel="noreferrer"
          className={classes.more}
        >
          SHOW ME MORE{" "}
        </a>
      </div>
      <div className={classes.imageWrapper}>
        <div className={classes.part1}>
          <img src={back1} alt="back1" className={classes.back1} />
          <img src={infoBack1} alt="infoBack1" className={classes.infoBack1} />
          <a
            href="https://www.flipkart.com/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu"
            target="_blank"
            rel="noreferrer"
            className={classes.more1}
          >
            SHOW ME MORE
          </a>
        </div>
        <div className={classes.part2}>
          <img src={back2} alt="back2" className={classes.back2} />
          <img src={infoBack2} alt="infoBack2" className={classes.infoBack2} />
          <a
            href="https://www.myntra.com/men-sports-shoes"
            target="_blank"
            rel="noreferrer"
            className={classes.more2}
          >
            SHOW ME MORE{" "}
          </a>
        </div>
      </div>
      <div className={classes.elementsContainer}>
        <img src={featured} alt="featured" className={classes.featured} />
        <img src={longline} alt="longline" className={classes.longline} />
      </div>
      <div className={classes.general}>
        <div className={classes.listShoes}>
          <div className={classes.categories1}>
            <div onClick={handleOnClick} className={classes.product1}>
              <img src={newStyle} alt="newStyle" className={classes.newStyle} />
              <img src={shoes1} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
            <div onClick={handleOnClick} className={classes.product2}>
              <img src={shoes2} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
            <div onClick={handleOnClick} className={classes.product3}>
              <img
                src={saleStyle}
                alt="newStyle"
                className={classes.saleStyle}
              />
              <img src={shoes3} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
          </div>
          <div className={classes.elementsContainer}>
            <img src={latest} alt="featured" className={classes.latest} />
            <img src={longline} alt="longline" className={classes.longline1} />
          </div>
          <div className={classes.categories1}>
            <div onClick={handleOnClick} className={classes.product1}>
              <img src={newStyle} alt="newStyle" className={classes.newStyle} />
              <img src={shoes1} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
            <div onClick={handleOnClick} className={classes.product2}>
              <img src={shoes2} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
            <div onClick={handleOnClick} className={classes.product3}>
              <img
                src={saleStyle}
                alt="newStyle"
                className={classes.saleStyle}
              />
              <img src={shoes3} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
          </div>
          <div className={classes.categories1}>
            <div onClick={handleOnClick} className={classes.product1}>
              <img src={newStyle} alt="newStyle" className={classes.newStyle} />
              <img src={shoes1} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
            <div onClick={handleOnClick} className={classes.product2}>
              <img src={shoes2} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
            <div onClick={handleOnClick} className={classes.product3}>
              <img
                src={saleStyle}
                alt="newStyle"
                className={classes.saleStyle}
              />
              <img src={shoes3} alt="shoes1" className={classes.shoes1} />
              <img
                src={shortLine}
                alt="shortLine"
                className={classes.shortLine}
              />
              <img src={simple} alt="simple" className={classes.simple} />
              <img src={sum1} alt="sum1" className={classes.sum1} />
            </div>
          </div>
        </div>
        <div className={classes.infoShoes}>
          <div className={classes.elem1}>
            <div className={classes.partElem1}>
              <img
                src={categoriesImage}
                alt="categories"
                className={classes.categories}
              />
            </div>
            <hr />
            <div className={classes.partElem2}>
              <img src={womenImage} alt="womenImage" />
              <div className={classes.banner}>
                <img
                  src={shortLine}
                  alt="shortline"
                  className={classes.banner}
                />
                <button className={classes.plus}> + </button>
                <img
                  src={shortLine}
                  alt="shortline"
                  className={classes.banner}
                />
                <button className={classes.minus}> - </button>
              </div>
            </div>
          </div>
          <div className={classes.elem2}>
            <div className={classes.elemPart1}>
              <img src={best} alt="categories" className={classes.categories} />
            </div>
            <hr />
            <div onClick={handleOnClick} className={classes.elemPart2}>
              <div>
                <img
                  src={shoesSmall}
                  alt="shoesSmall"
                  className={classes.shoesSmall}
                />
              </div>
              <div className={classes.shoesInfoContainer}>
                <div className={classes.shInCont1}>
                  <img src={titleSimple} alt="titleSimple" />
                </div>
                <div className={classes.shInCont2}>
                  <img src={sum120small} alt="sum120small" />
                </div>
                <div className={classes.shInCont3}>
                  <img src={sum120} alt="sum120" />
                </div>
              </div>
            </div>
            <div onClick={handleOnClick} className={classes.elemPart2}>
              <div>
                <img
                  src={shoesSmall}
                  alt="shoesSmall"
                  className={classes.shoesSmall}
                />
              </div>
              <div className={classes.shoesInfoContainer}>
                <div className={classes.shInCont1}>
                  <img src={titleSimple} alt="titleSimple" />
                </div>
                <div className={classes.shInCont2}>
                  <img src={sum120small} alt="sum120small" />
                </div>
                <div className={classes.shInCont3}>
                  <img src={sum120} alt="sum120" />
                </div>
              </div>
            </div>
            <div onClick={handleOnClick} className={classes.elemPart2}>
              <div>
                <img
                  src={shoesSmall}
                  alt="shoesSmall"
                  className={classes.shoesSmall}
                />
              </div>
              <div className={classes.shoesInfoContainer}>
                <div className={classes.shInCont1}>
                  <img src={titleSimple} alt="titleSimple" />
                </div>
                <div className={classes.shInCont2}>
                  <img src={sum120small} alt="sum120small" />
                </div>
                <div className={classes.shInCont3}>
                  <img src={sum120} alt="sum120" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.elem3}>
            <div className={classes.tag1}>
              <img src={tag} alt="tags" />
            </div>
            <hr />
            <div className={classes.tag2}>
              <img src={tags} alt="tags" />
            </div>
          </div>
        </div>
      </div>
      {list && (
        <List
          categories={categories}
          loading={loading}
          error={error}
          list={list}
          handleOnClick={handleOnClick}
        />
      )}
    </div>
  );
}

export default Home;
