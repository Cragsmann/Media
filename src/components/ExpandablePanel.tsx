import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

type ExpadnablePanelProps = {
  header: JSX.Element;
  children: any;
};

export const ExpandablePanel: React.FC<ExpadnablePanelProps> = ({
  header,
  children,
}): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = (): void => {
    setExpanded(!expanded);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center ">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};
