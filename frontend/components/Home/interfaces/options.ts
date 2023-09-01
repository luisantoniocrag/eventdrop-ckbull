import { LoginMethod } from "./home";

export interface OptionsProps {
  changeLoginMethod: (method: LoginMethod) => void;
  currentMethod: LoginMethod;
}
