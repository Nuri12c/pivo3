import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import { dataDigitalBestSeller } from "./data";

export const Slyder = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div id="uslugi" className="Myslider">
        <div className="App">
          <Slider {...settings}>
            {dataDigitalBestSeller.map((item) => (
              <div key={item.id} className="card">
                <div className="card-top">
                  <img src={item.link || item.src} alt={item.title} />
                  <h1>{item.title}</h1>
                </div>
                <div className="card-bottom">
                  <h3>{item.price}</h3>
                  <span className="category">{item.category}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
   
};
export default Slyder;