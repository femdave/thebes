import React from "react";

interface FloatingButtonProps {
  isSelected: boolean;
  selectedBgColor: string;
  unselectedBgColor: string;
  textColor: string;
  disabled: boolean;
  children: React.ReactNode;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  isSelected,
  selectedBgColor,
  unselectedBgColor,
  textColor,
  disabled,
  children,
}) => {
  const bgColor = isSelected ? selectedBgColor : unselectedBgColor;
  const cursorStyle = disabled ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <div className="fixed bottom-0 left-0 w-full px-6 pb-6">
      <button
        className={`w-full px-8 py-2 rounded-full font-bold ${bgColor} ${textColor} ${cursorStyle}`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default FloatingButton;
