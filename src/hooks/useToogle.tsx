import { useState } from "react";
interface Store {
  value: boolean | null;
  setValue: (value?: Store["value"]) => void;
}

export function useToogle(): [Store["value"], Store["setValue"]] {
  const [valueState, setValue] = useState<Store["value"]>(null);
  const handleValue: Store["setValue"] = (value) => {
    if (valueState === null) {
      setValue(true);
      return;
    }
    if (typeof value === "undefined") {
      setValue((prev) => !prev);
      return;
    }
    setValue(value);
  };
  return [valueState, handleValue];
}
