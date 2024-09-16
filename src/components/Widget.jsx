import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Widget = ({ id, moveWidget }) => {
  const [, ref] = useDrag({
    type: 'widget',
    item: { id },
  });

  const [, drop] = useDrop({
    accept: 'widget',
    hover: (draggedItem) => {
      if (draggedItem.id !== id) {
        moveWidget(draggedItem.id, id);
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="bg-blue-400 h-96 text-white border rounded-lg shadow p-4 text-center flex items-center justify-center"
    >
      Widget {id}
    </div>
  );
};

export default Widget;
