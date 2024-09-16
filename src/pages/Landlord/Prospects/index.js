import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Widget from '../../../components/Widget';

const Prospect = () => {
  const initialWidgets = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const [widgets, setWidgets] = useState(initialWidgets);

  const moveWidget = (fromId, toId) => {
    const fromIndex = widgets.indexOf(fromId);
    const toIndex = widgets.indexOf(toId);

    const updatedWidgets = [...widgets];
    updatedWidgets[fromIndex] = toId;
    updatedWidgets[toIndex] = fromId;

    setWidgets(updatedWidgets);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-2 grid-rows-4 gap-4 p-4">
        {widgets.map((id) => (
          <Widget key={id} id={id} moveWidget={moveWidget} />
        ))}
      </div>
    </DndProvider>
  )
}

export default Prospect;