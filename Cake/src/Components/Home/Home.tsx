import style from "./Home.module.css";
import basket from "../../assets/Basket.svg";
import { useState } from "react";
import hamburger from "../../assets/menu.svg";
import phone from "../../assets/phone.svg";
import image9 from "../../assets/image 9.png";
import image8 from "../../assets/image 8.png"
import image7 from "../../assets/image 7.png"
import image6 from "../../assets/image 6.png"
import image5 from "../../assets/image 5.png"

import button from "../../assets/Button.svg";

function Home() {
  const [responsive, setResponsive] = useState(true);

  const toggleMenu = () => {
    setResponsive(!responsive);
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.logo}>CakeOwn</div>
        <nav className={style.mobileNav}>
          <ul>
            <li>
              <img src={phone} alt="phone" />
            </li>
            <li className={style.basket}>
              <img src={basket} alt="basket" />
            </li>
            <li>
              <img src={hamburger} alt="menu" onClick={toggleMenu} />
            </li>
          </ul>
        </nav>
        <nav className={style.nav}>
          <ul>
            <li>Make Your Own Cake</li>
            <li>Filter</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li className={style.basket}>
              <img src={basket} alt="basket" />
            </li>
          </ul>
        </nav>
      </header>
      <div className={style.make}>
        <div className={style.make__container}>
          <div className={style.cake_text}>Make Your Own Cake</div>
          <div className="bottom_make">
            <div>
              <img src={button} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.expect}>
        <h1>Menu suited to your expectations</h1>
        <div className={style.flexCake}>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image9} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image6} alt="" />
            </div>
            <div className={style.cake_name}>Passion Dragon</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image8} alt="" />
            </div>
            <div className={style.cake_name}>Fondon</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image7} alt="" />
            </div>
            <div className={style.cake_name}>Chocolate Wow</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image6} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image5} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image7} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image9} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
