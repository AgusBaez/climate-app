import styles from "./Modal.module.css";
export default function Modal({ children, isOpen, closeModal }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
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
    </article>
  );
}

