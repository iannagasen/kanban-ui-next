import KanbanItem from "./kanbanItem";

export default function KanbanColumn({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <KanbanItem key={i} item={item} />
      ))}
    </>
  );
}
