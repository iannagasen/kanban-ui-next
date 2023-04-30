import { useState } from "react";
import styled from "styled-components";
import UpdateItemForm from "./updateItemForm";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export default function UpdateItemFormModal({ show, onCancel }) {
  // const [shouldShow, setShouldShow] = useState(show);

  return (
    <>
      {/* <button onClick={() => setShouldShow(true)}>Add Item</button> */}
      {show && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>Hide</button>
            <UpdateItemForm onSubmit={() => setShouldShow(false)} />
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}
