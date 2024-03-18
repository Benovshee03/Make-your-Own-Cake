import style from "./Home.module.css";
import basket from "../../assets/Basket.svg";
import hamburger from "../../assets/menu.svg";
import phone from "../../assets/phone.svg";
import image9 from "../../assets/image 9.png";
import image8 from "../../assets/image 8.png"
import image7 from "../../assets/image 7.png"
import image6 from "../../assets/image 6.png"
import image5 from "../../assets/image 5.png"
import text from "../../assets/text new.png"
import textMobile from "../../assets/textmobile.png"
import button from "../../assets/Button.svg";
import buttonMobile from "../../assets/Includebuttonmobile.png";
import cake1 from "../../assets/cake1.png"

function Home() {

  // const responsive = {
  //   mobile: {
  //     breakpoint: { max: 480, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   }
  // };

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
              <img src={hamburger} alt="menu"  />
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
          <img className={style.text} src={text} alt="" />
          <img className={style.textMobile} src={textMobile} alt="text" />
          <div className={style.bottom_make}>
              <img src={button} alt="button" />
          </div>
          <div className={style.bottom_make_mobile}>
              <img src={buttonMobile} alt="button" />
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
            <div className={style.cover_button}>
            <button className={style.hovered_button}>Add to card</button>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image6} alt="" />
            </div>
            <div className={style.cake_name}>Passion Dragon</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
            <div className={style.cover_button}>
            <button className={style.hovered_button}>Add to card</button>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image8} alt="" />
            </div>
            <div className={style.cake_name}>Fondon</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
            <div className={style.cover_button}>
            <button className={style.hovered_button}>Add to card</button>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image7} alt="" />
            </div>
            <div className={style.cake_name}>Chocolate Wow</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
            <div className={style.cover_button}>
            <button className={style.hovered_button}>Add to card</button>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image6} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
            <div className={style.cover_button}>
            <button className={style.hovered_button}>Add to card</button>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image5} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
            <div className={style.cover_button}>
            <button className={style.hovered_button}>Add to card</button>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image7} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
            <div className={style.cover_button}>
            <button className={style.hovered_button}>Add to card</button>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.box_image}>
              <img src={image9} alt="" />
            </div>
            <div className={style.cake_name}>Vanil Cake</div>
            <div className={style.cake_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores!</div>
            <div className={style.price}><span className="">$ 15</span><span>11.35</span></div>
            <div className={style.cover_button}>
            <button className={style.hovered_button}>Add to card</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.newProducts}>
        <div className={style.left}>
          <div className={style.new}>New Products</div>
          <div className={style.awesome}>We Provide New Awesome Cakes</div>
          <div className={style.last_text}>A cake is a sweetened baked food, usually made with flour, eggs, sugar, and a leavening agent. Shortening may or may not be used. </div>
        </div>
        <div className={style.right}>
          <div className={style.cake}>
            <img src={cake1} alt="" />
            <div className={style.price_name}>
              <div className={style.name_cake}>Fruitlane</div>
              <div className="price">11$</div>
            </div>
          </div>
          <div className={style.cake}>
            <img src={cake1} alt="" />
            <div className={style.price_name}>
              <div className={style.name_cake}>Fruitlane</div>
              <div className="price">11$</div>
            </div>
          </div>
          <div className={style.cake}>
            <img src={cake1} alt="" />
            <div className={style.price_name}>
              <div className={style.name_cake}>Fruitlane</div>
              <div className="price">11$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
