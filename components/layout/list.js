/**
 *
 * @param {List} props.items - The list of items to be rendered
 * @param {React.Component} itemComponent - The component used for rendering a single item
 * @param {string} resourceName - The props name specified for the itemComponent
 * @param {Optional<React.Component} header - An optional header component
 * @param {Optional<React.Component>} footer - An optional footer component
 * @returns {JSX.Element} Renders a list
 *
 * This component is a Layout Component, encapsulating the style and rendering method for
 * a list of items
 *
 */
export default function List({
  items,
  itemComponent: ItemComponent,
  resourceName,
}) {
  return (
    <>
      {items.map((item) => {
        return <ItemComponent key={item.title} {...{ [resourceName]: item }} />;
      })}
    </>
  );
}
