import styled from "styled-components";
import ItemMenu from "./itemMenu";
import axios from "axios";
import { useState } from "react";
import UpdateItemForm from "./updateItemForm";
import ControlledModal from "./controlledModal";

export default function KanbanItem({ item }) {
  const [showEditItemForm, setShowEditItemForm] = useState(false);

  const {
    id,
    title,
    description,
    assignee,
    priority,
    status,
    dateDue,
    tags,
    timeEstimate,
  } = item;

  const editItem = () => {
    console.log("item is edited");
    setShowEditItemForm((prev) => !prev);
  };

  const deleteItem = async () => {
    const response = await axios.delete(`http://localhost:8080/column/${id}`);
    console.log("Item is deleted with id: " + response.data);
  };

  return (
    <Item>
      <KanbanItemHeader>
        <KanbanItemTitle>{title}</KanbanItemTitle>
        {/* <KanbanItemMenuButton>...</KanbanItemMenuButton> */}
        <ItemMenu onEdit={editItem} onDelete={deleteItem} />
        <ControlledModal
          shouldShow={showEditItemForm}
          onRequestClose={() => setShowEditItemForm(false)}
        >
          <UpdateItemForm
            item={item}
            onSubmit={() => setShowEditItemForm(false)}
          />
        </ControlledModal>
      </KanbanItemHeader>
      <section>
        <KanbanItemDescription>{description}</KanbanItemDescription>
        <KanbanItemFields>
          <KanbanItemFieldLabel>Assigned to:</KanbanItemFieldLabel>
          <KanbanItemFieldValue>{assignee}</KanbanItemFieldValue>
          <KanbanItemFieldValue>{priority}</KanbanItemFieldValue>
          <KanbanItemFieldLabel>Priority:</KanbanItemFieldLabel>
          <KanbanItemFieldLabel>Status:</KanbanItemFieldLabel>
          <KanbanItemFieldValue>{status}</KanbanItemFieldValue>
          <KanbanItemFieldLabel>Due Date:</KanbanItemFieldLabel>
          <KanbanItemFieldValue>{dateDue}</KanbanItemFieldValue>
          <KanbanItemFieldLabel>Tags:</KanbanItemFieldLabel>
          <KanbanItemFieldValue>{tags}</KanbanItemFieldValue>
          <KanbanItemFieldLabel>Est. Time:</KanbanItemFieldLabel>
          <KanbanItemFieldValue>{timeEstimate}</KanbanItemFieldValue>
        </KanbanItemFields>
      </section>
    </Item>
  );
}

const Item = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const KanbanItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const KanbanItemTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0;
`;

const KanbanItemMenuButton = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: black;
  }
`;

const KanbanItemDescription = styled.div`
  color: gray;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const KanbanItemFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

const KanbanItemFieldLabel = styled.div`
  font-weight: bold;
  color: gray;
`;

const KanbanItemFieldValue = styled.div`
  color: gray;
`;
