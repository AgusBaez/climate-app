import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

export default function ModalPortal({ children, isOpen, closeModal }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <article
      className={`${styles.modal} ${isOpen && styles.isOpen}`}
      onClick={closeModal}
    >
      <div className={styles.modalContent} onClick={handleClick}>
        <div>I`m a modal dialog</div>
        <button className={styles.modalClose} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
}

