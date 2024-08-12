import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

export const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal}>Modal 1</button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Modal 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          sapiente tempora cumque eaque quae numquam, aliquid exercitationem
          aspernatur sed, laborum quas earum dolore voluptatem. Unde molestias
          nostrum error veniam cum!
        </p>
        <img src="https://i.imgur.com/fClJeO6.jpg" alt="Animals" />
      </Modal>
    </div>
  );
};

