import React from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";

const Tenants = () => {
  const [items, setItems] = React.useState({
    left: [
      { position: 0, name: "ben" },
      { position: 1, name: "joe" },
      { position: 2, name: "jason", size: 2 },
      { position: 3, name: "chris" },
      { position: 4, name: "heather" },
    ],
  });

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    console.log(targetId, sourceId);
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result,
    });
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className="flex justify-center mx-auto p-3 h-full">
        <GridDropZone
          className="dropzone left flex-1 h-full border border-dashed border-gray-300 rounded-lg bg-green-500"
          id="left"
          boxesPerRow={2}
          rowHeight={300}
        >
          {items.left.map((item) => (
            <GridItem key={item.position}>
              <div className="grid-item w-full h-full p-2 box-border">
                <div className="grid-item-content w-full h-full bg-blue-500 flex items-center justify-center text-white font-sans rounded-lg">
                  {item.name.toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
};

export default Tenants;
