import type { CSSProperties } from "react";

type Props = {
  /** Image path/URL. Leave empty to show a placeholder rectangle. */
  src?: string;
  /** Used as the alt text, and as the label printed on the placeholder. */
  label: string;
  /** CSS aspect-ratio, e.g. "3/2" */
  ratio?: string;
};

export default function Photo({ src, label, ratio }: Props) {
  const style = (ratio ? { "--r": ratio } : undefined) as CSSProperties | undefined;
  return (
    <div className={`ph${src ? " has-img" : ""}`} data-label={label} style={style}>
      {src && <img src={src} alt={label} loading="lazy" />}
    </div>
  );
}
