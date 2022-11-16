import React, { useState} from "react";
import Login from "../../../pages/Login";
import Signup from "../../../pages/Signup";
import "./Modal.css";

export default function ModalSignUp() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div  className="overlay"></div>
          <div className="modal-content">
            <Signup />
            <button className="close-modal" >
              CLOSE
            </button>
          </div>
        </div>
      )}
     
    </>
  );
}