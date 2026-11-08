import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  solid?: boolean;
};

export const Button = ({
  children,
  solid = false,
  className = "",
  ...props
}: ButtonProps): React.JSX.Element => {
  const classes = ["btn", solid ? "solid" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
};
