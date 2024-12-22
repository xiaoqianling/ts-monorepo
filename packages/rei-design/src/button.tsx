import React, { FC, useState } from "react";

export const ReiButton: FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <button type="button" onClick={handleClick}>
      {count}click
    </button>
  );
};

/* eslint-disable no-alert */
export const Button: FC = () => (
  <button type="button" onClick={() => alert(`the meaning of life is`)}>
    Click me
  </button>
);
