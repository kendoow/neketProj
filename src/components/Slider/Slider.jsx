import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.scss";
import Slider from "react-slick";
import csgo from "../../assets/Games/csgo.svg";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className={styles.slider}>
          <div className="">
            <img src={csgo} alt="icon" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.slider}>
          <h3>
            Одна из немногих платформ, которая не стоит на месте: добавляют
            новые активы, делают розыгрыши, выводят прибыль еще быстрее.
          </h3>
        </div>
      </div>
      <div>
        <div className={styles.slider}>
          <h3>
            Торгую уже год. Из плюсов хочу выделить понятный дизайн, оперативный
            вывод, турниры с реальными деньгами, высокий % выплат, возможность
            торговать на выходных. Однозначно рекомендую. Минусов не нашла.
          </h3>
        </div>
      </div>
      <div>
        <div className={styles.slider}>
          <h3>
            На платформе представляют множество обучающих материалов, что
            является полезным для новичков. За все время работы никаких
            нареканий.
          </h3>
        </div>
      </div>
      <div>
        <div className={styles.slider}>
          <h3>
            Совсем недавно начал работать с Oaklion. Есть активы, которых нет на
            других платформах. Хочу отметить возможность торговать по выходным.
          </h3>
        </div>
      </div>
      <div>
        <div className={styles.slider}>
          <h3>
            {" "}
            Была удивлена, когда узнала о торговой комнате. Понятная аналитика
            рынка, самые свежие новости, советы по торговле и многое другое.
            Вместе с Oaklion я смогла повысить свой уровень знаний.
          </h3>
        </div>
      </div>
      <div>
        <div className={styles.slider}>
          <h3>
            Помимо торговли, хотел бы рассказать про службу поддержки. Если у
            вас будет какая нибудь проблема или вопрос вы смело можете
            обращаться и вам оперативно решат или ответят на вопрос.
          </h3>
        </div>
      </div>
      <div>
        <div className={styles.slider}>
          <h3>
            На платформе присутствует трейдбек. Всё зависит от статуса, мне
            возвращают 15%.
          </h3>
        </div>
      </div>
    </Slider>
  );
}
