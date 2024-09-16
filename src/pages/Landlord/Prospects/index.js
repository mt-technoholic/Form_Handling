import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { motion } from 'framer-motion';

const ItemType = "WIDGET";

const Widget = ({ id, text, index, moveWidget }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item) => {
      if (item.index !== index) {
        moveWidget(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <motion.div
      ref={(node) => drag(drop(node))}
      className={`widget bg-gray-200  p-4 transition-all text-center ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {text}
      </motion.div>
  );
};

const Dashboard = () => {
  const [widgets, setWidgets] = useState([
    { id: 1, text: "Widget 1" },
    { id: 2, text: "Widget 2" },
    { id: 3, text: "Widget 3" },
    { id: 4, text: "Widget 4" },
    { id: 5, text: "Widget 5" },
    { id: 6, text: "Widget 6" },
    { id: 7, text: "Widget 7" },
    { id: 8, text: "Widget 8" },
  ]);

  const moveWidget = (fromIndex, toIndex) => {
    const updatedWidgets = [...widgets];
    const [removed] = updatedWidgets.splice(fromIndex, 1);
    updatedWidgets.splice(toIndex, 0, removed);
    setWidgets(updatedWidgets);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-2 grid-rows-4 gap-4 p-4">
        {widgets.map((widget, index) => (
          <Widget
            key={widget.id}
            id={widget.id}
            text={widget.text}
            index={index}
            moveWidget={moveWidget}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Dashboard;
