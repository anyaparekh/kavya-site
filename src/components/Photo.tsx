import React from "react";

export interface PhotoProps {
  /** Source URL or path for the image */
  src: string;
  /** Alt text for accessibility */
  label?: string;
  /** CSS aspect-ratio value (e.g. "16/9", "4/3", "4/5") */
  ratio?: string;
  /** Additional custom CSS class names */
  className?: string;
}

export const Photo: React.FC<PhotoProps> = ({
  src,
  label = "",
  ratio,
  className = "",
}) => {
  return (
    <div
      className={`photo-container ${className}`}
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        aspectRatio: ratio,
      }}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
};

export default Photo;
