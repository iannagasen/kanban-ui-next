import AddItemFormModal from "@/components/addItemFormModal";
import KanbanColumn from "@/components/kanbanColumn";
import axios from "axios";
import styled from "styled-components";

const Column = styled.div`
  height: calc(90vh - 5vh);
  width: 90vh;
  margin: 5vh auto;
`;

const YScrollable = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export default function currentKanbanColumn({ column }) {
  return (
    <Column>
      <YScrollable>
        <KanbanColumn items={column} />
      </YScrollable>
      <AddItemFormModal />
    </Column>
  );
}

export async function getServerSideProps() {
  const column = await axios("http://localhost:8080/column");
  return {
    props: {
      column: column.data,
    },
  };
}
