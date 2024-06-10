
import "./style.scss";
import React from "react";

// Определение интерфейса для пропсов компонента Modal
// Если ещё не определены, добавьте эти типы данных
interface Ingredient {
  name: string;
  amount: string;
}

interface Characteristic {
  characteristic: string;
  value: string;
}

interface ModalProps {
  imageSrc: string;
  description: string;
  onClose: () => void;
  ingredients: Ingredient[]; // Убедитесь, что добавили эти
  characteristics: Characteristic[]; // два поля в интерфейс ModalProps
}


const Modal: React.FC<ModalProps> = ({
  description,
  imageSrc,
  onClose,
  ingredients,
  characteristics,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-image-container">
          {imageSrc && (
            <img className="modal-image" src={imageSrc} alt="Изображение" />
          )}
          <p className="modal-image-description">{description}</p>
        </div>
        <div className="modal-first-tablet-container">
          <h2 className="modal-tablet-h2">Ингредиенты</h2>
          <table>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="modal-second-tablet-container">
          <h2 className="modal-tablet-h2">Характеристики</h2>
          <table>
            <tbody>
              {characteristics.map((char, index) => (
                <tr key={index}>
                  <td>{char.characteristic}</td>
                  <td>{char.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default Modal;
