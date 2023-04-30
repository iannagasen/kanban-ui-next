import { useRouter } from "next/router";
import styled from "styled-components";

export default function currentItem() {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <KanbanItem>
      <KanbanItemHeader>
        <KanbanItemTitle>Title of the item</KanbanItemTitle>
        <KanbanItemMenuButton>...</KanbanItemMenuButton>
      </KanbanItemHeader>
      <KanbanItemDescription>
        Description of the item goes here {itemId}
      </KanbanItemDescription>
      <KanbanItemFields>
        <KanbanItemFieldLabel>Assigned to:</KanbanItemFieldLabel>
        <KanbanItemFieldValue>John Doe</KanbanItemFieldValue>
        <KanbanItemFieldLabel>Priority:</KanbanItemFieldLabel>
        <KanbanItemFieldValue>High</KanbanItemFieldValue>
        <KanbanItemFieldLabel>Status:</KanbanItemFieldLabel>
        <KanbanItemFieldValue>To Do</KanbanItemFieldValue>
        <KanbanItemFieldLabel>Due Date:</KanbanItemFieldLabel>
        <KanbanItemFieldValue>2023-05-15</KanbanItemFieldValue>
        <KanbanItemFieldLabel>Tags:</KanbanItemFieldLabel>
        <KanbanItemFieldValue>Project A, Important</KanbanItemFieldValue>
        <KanbanItemFieldLabel>Est. Time:</KanbanItemFieldLabel>
        <KanbanItemFieldValue>3 hours</KanbanItemFieldValue>
      </KanbanItemFields>
    </KanbanItem>
  );
}

const KanbanItem = styled.div`
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
