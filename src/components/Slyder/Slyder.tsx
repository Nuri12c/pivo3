import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Modal from "./Modal";
import { dataDigitalBestSeller } from "./data";

export const Slyder = () => {
  // Пример интерфейса объекта массива dataDigitalBestSeller
  interface DataItem {
    id: number;
    description: string;
    src: string;
    title: string;
    price: string;
    category: string;
    ingredients: { name: string; amount: string }[];
    characteristics: { characteristic: string; value: string }[];
  }
  

  // Предполагаем, что состояние modalData принимает объект с полями isOpen и description
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    description: string;
    imageSrc: string; // Добавляем поле для хранения пути к изображению
    ingredients: { name: string; amount: string }[];
    characteristics: { characteristic: string; value: string }[];
  }>({
    isOpen: false,
    description: "",
    imageSrc: "",
    ingredients: [],
    characteristics: [],
  });

  // Теперь при определении handleCardClick явно укажем тип параметра description
  const handleCardClick = (item: DataItem) => {
    setModalData({
      isOpen: true,
      description: item.description,
      imageSrc: item.src,
      ingredients: item.ingredients,
      characteristics: item.characteristics,
    });
  };

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
    <div className="container slyder__container">
      <div id="uslugi" className="Myslider">
        <div className="App">
          <Slider {...settings}>
            {dataDigitalBestSeller.map((item) => (
              <div
                key={item.id}
                className="card"
                onClick={() => handleCardClick(item)}
              >
                <div className="card-top">
                  <img src={item.src} alt={item.title} />
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

      {modalData.isOpen && (
        <Modal
          imageSrc={modalData.imageSrc}
          description={modalData.description}
          ingredients={modalData.ingredients} // Добавьте это
          characteristics={modalData.characteristics} // И это
          onClose={() =>
            setModalData({
              isOpen: false,
              description: "",
              imageSrc: "",
              ingredients: [], // Убедитесь, что очищаете эти поля
              characteristics: [], // При закрытии модального окна
            })
          }
        />
      )}
    </div>
  );
};
export default Slyder;
