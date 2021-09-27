import { useEffect, useState } from "react";

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

import classes from "./Home.module.css";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className={classes.backgroundWebsite}>
      <div className={classes.header}>
        <h1> Whatever header they currently use goes here </h1>
      </div>
      <div className={classes.menu}>
        <span> Men's </span>
        <span> Women's</span>
        <span> Kids </span>
        <span> Sports </span>
        <span> Brands </span>
        <span> Collections </span>
      </div>
      <div className={classes.titleImage}>
        <img src={backImage} alt="backImages" className={classes.backImage} />
        <img src={infoImage} alt="infoImage" className={classes.infoImage} />
        <div className={classes.more}> SHOW ME MORE </div>
      </div>
      <div className={classes.imageWrapper}>
        <div className={classes.part1}>
          <img src={back1} alt="back1" className={classes.back1} />
          <img src={infoBack1} alt="infoBack1" className={classes.infoBack1} />
          <div className={classes.more1}> SHOW ME MORE </div>
        </div>
        <div className={classes.part2}>
          <img src={back2} alt="back2" className={classes.back2} />
          <img src={infoBack2} alt="infoBack2" className={classes.infoBack2} />
          <div className={classes.more2}> SHOW ME MORE </div>
        </div>
      </div>
      <div className={classes.elementsContainer}>
        <img src={featured} alt="featured" className={classes.featured} />
        <img src={longline} alt="longline" className={classes.longline} />
      </div>
      <div className={classes.general}>
        <div className={classes.listShoes}>
          <div className={classes.product1}>
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
          <div className={classes.product2}>
            <img src={shoes2} alt="shoes1" className={classes.shoes1} />
            <img
              src={shortLine}
              alt="shortLine"
              className={classes.shortLine}
            />
            <img src={simple} alt="simple" className={classes.simple} />
            <img src={sum1} alt="sum1" className={classes.sum1} />
          </div>
          <div className={classes.product3}>
            {" "}
            <img src={saleStyle} alt="newStyle" className={classes.saleStyle} />
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
        <div className={classes.infoShoes}></div>
      </div>
    </div>
  );
}

export default Home;
