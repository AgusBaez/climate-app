import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

export const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
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

      <button onClick={openModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal Portal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          sapiente tempora cumque eaque quae numquam, aliquid exercitationem
          aspernatur sed, laborum quas earum dolore voluptatem. Unde molestias
          nostrum error veniam cum!
        </p>
        <img
          src="https://img.freepik.com/vetores-gratis/conjunto-de-raios-de-brilho-redondo-de-neon_1441-4099.jpg?t=st=1723506381~exp=1723506981~hmac=6f5986c9b864c389135d62255dfc195df74701428675304718ab39f823817dc3"
          alt="Portals"
        />
      </ModalPortal>
    </div>
  );
};

