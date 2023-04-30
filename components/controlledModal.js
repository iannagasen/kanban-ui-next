import styled from "styled-components";

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

export default function ControlledModal({
  shouldShow,
  onRequestClose,
  children,
}) {
  if (!shouldShow) return null;

  return (
    <ModalBackground onClick={onRequestClose}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <button onClick={onRequestClose}>Hide</button>
        {children}
      </ModalBody>
    </ModalBackground>
  );
}
