import { useState } from "react";
interface Store {
  value: boolean;
  setValue: (value?: boolean) => void;
}

export function useToogle(): [boolean, (value?: boolean) => void] {
  const [value, setValue] = useState(false);
  const handleValue: Store["setValue"] = (value) => {
    if (typeof value === "undefined") {
      setValue((prev) => !prev);
      return;
    }
    setValue(value);
  };
  return [value, handleValue];
}
