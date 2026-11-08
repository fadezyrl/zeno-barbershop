import type { CSSProperties } from "react";

type PlaceholderProps = {
  className?: string;
  src?: string;
  label: string;
  style?: CSSProperties;
};

export const Placeholder = ({
  className = "",
  src = "",
  label,
  style,
}: PlaceholderProps): React.JSX.Element => {
  const hasImage = Boolean(src);
  const classes = ["ph", hasImage ? "has" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      data-label={label}
      style={{
        ...(hasImage ? { backgroundImage: `url('${src}')` } : {}),
        ...style,
      }}
      role="img"
      aria-label={label}
    />
  );
};
