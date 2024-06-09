
import "./style.scss";
import React from "react";

// Определение интерфейса для пропсов компонента Modal
interface ModalProps {
  imageSrc: string;
  description: string; // Указание, что description должен быть строкой
  onClose: () => void; // Аннотация типа для функции закрытия модального окна
}

const Modal: React.FC<ModalProps> = ({ description, imageSrc, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {imageSrc && (
          <img className="modal-image" src={imageSrc} alt="Изображение" />
        )}{" "}
        {/* Отображение изображения, если путь предоставлен */}
        <p>{description}</p>
      </div>
    </div>
  );
};


export default Modal;
