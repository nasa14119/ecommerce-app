import { useState } from "react";
interface Store {
  value: boolean | null;
  setValue: (value?: Store["value"]) => void;
}

export function useToogle(): [Store["value"], Store["setValue"]] {
  const [value, setValue] = useState<Store["value"]>(null);
  const handleValue: Store["setValue"] = (value) => {
    if (value === null) {
      setValue(true);
      return;
    }
    if (typeof value === "undefined") {
      setValue((prev) => !prev);
      return;
    }
    setValue(value);
  };
  return [value, handleValue];
}
