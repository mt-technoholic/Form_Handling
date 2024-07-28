import React from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "@/components";

const Properties = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <Components.Button handler={() => navigate("new")}>
          Add property
        </Components.Button>
      </div>
    </div>
  );
};

export default Properties;
