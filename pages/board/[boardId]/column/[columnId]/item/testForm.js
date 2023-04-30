import AddItemFormModal from "@/components/addItemFormModal";
export default function testForm() {
  return (
    <div>
      {Array.from({ length: 300 }, (_, i) => i + 1).map((i) => (
        <div key={i}>{i}</div>
      ))}
      <AddItemFormModal></AddItemFormModal>
    </div>
  );
}
