import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
function Modal({ children }) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div onClick={closeHandler} className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
