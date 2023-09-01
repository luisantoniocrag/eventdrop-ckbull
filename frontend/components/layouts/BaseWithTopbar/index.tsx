import { FC } from "react";
import { Topbar } from "./components";
import { BaseWithTopbarProps } from "./interfaces";

export const BaseWithTopbar: FC<BaseWithTopbarProps> = (props) => {
  const { children, title, tailwindStyle = "" } = props;

  return (
    <div className="w-full h-screen">
      <Topbar title={title} />
      <main className={tailwindStyle}>{children}</main>
    </div>
  );
};
