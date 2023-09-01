import { Dispatch, SetStateAction } from "react";

export interface ToggleProps {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}
