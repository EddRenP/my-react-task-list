import { useState } from "react";

const useCounter = () => {
  const [value, setValue] = useState(0);

  const suma = () => setValue(value + 1);
  const resta = () => setValue(value - 1);
  const reiniciar = () => setValue(0);

  return [value, suma, resta, reiniciar];
};

export default useCounter;
