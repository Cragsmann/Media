import React from "react";
import classNames from "classnames";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

function Panel({ children, className, ...rest }: PanelProps): JSX.Element {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
