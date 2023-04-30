import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const KanbanItemMenu = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  z-index: 1;
  background-color: #ffffff;
  border: 1px solid #ced0d4;
  border-radius: 3px;
  box-shadow: 0px 3px 4px rgba(9, 30, 66, 0.25);
  min-width: 160px;
  font-size: 14px;
  font-weight: 400;
  color: #172b4d;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const KanbanItemMenuButton = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
  color: #172b4d;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0052cc;
  }
`;

const KanbanItemMenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e1e4e9;
  }
`;

const KanbanItemMenuCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #5e6c84;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #172b4d;
  }
`;

export default function ItemMenu({
  onEdit,
  onDelete,
  // showMenu,
  // onRequestClose,
}) {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const menuButtonRef = useRef(null);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleEditClick = () => {
    onEdit();
  };

  const handleDeleteClick = () => {
    onDelete();
    setShowMenu(false);
    router.push("/board/1/column/2");
  };

  const handleCloseClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (menuButtonRef.current) {
      const { top, right } = menuButtonRef.current.getBoundingClientRect();
      setMenuPosition({ top: top + 30, right: window.innerWidth - right - 10 });
    }
  }, [showMenu]);

  return (
    <div>
      <KanbanItemMenuButton ref={menuButtonRef} onClick={handleMenuClick}>
        <i className="material-icons">more_vert</i>
      </KanbanItemMenuButton>
      <KanbanItemMenu
        show={showMenu}
        top={menuPosition.top}
        right={menuPosition.right}
      >
        <KanbanItemMenuCloseButton onClick={handleCloseClick}>
          <i className="material-icons">close</i>
        </KanbanItemMenuCloseButton>
        <KanbanItemMenuItem onClick={handleEditClick}>Edit</KanbanItemMenuItem>
        <KanbanItemMenuItem onClick={handleDeleteClick}>
          Delete
        </KanbanItemMenuItem>
      </KanbanItemMenu>
    </div>
  );
}
