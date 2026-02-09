import React from "react";
import photo from "../assets/photo.jpg";

interface ValentineMainProps {
  onComplete: () => void;
}

const ValentineMain: React.FC<ValentineMainProps> = ({ onComplete }) => {
  return (
    <div className="text-center animate-in zoom-in duration-500">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Will you be my Valentine? 💖
      </h1>

      <img
        src={photo}
        alt="Valentine"
        className="mx-auto mb-6 rounded-2xl w-64 shadow-lg"
      />

      <button
        onClick={onComplete}
        className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold text-lg hover:bg-red-600 transition"
      >
        Yes, obviously 😌💘
      </button>
    </div>
  );
};

export default ValentineMain;
