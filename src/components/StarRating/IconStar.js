import React from "react";

const IconStar = ({
  width = "20",
  height = "20",
  type = "full",
  fullColor,
  emptyColor,
}) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="star"
    >
      <defs>
        <clipPath id="star">
          <path d="M7.04897 0.927017C7.34897 0.00601709 8.65197 0.00601709 8.95097 0.927017L10.021 4.21902C10.0863 4.41951 10.2134 4.5942 10.384 4.71812C10.5547 4.84205 10.7601 4.90886 10.971 4.90902H14.433C15.402 4.90902 15.804 6.14902 15.021 6.71902L12.221 8.75302C12.05 8.87705 11.9227 9.05203 11.8573 9.25287C11.7919 9.45371 11.7918 9.6701 11.857 9.87102L12.927 13.163C13.227 14.084 12.172 14.851 11.387 14.281L8.58697 12.247C8.41618 12.123 8.21053 12.0562 7.99947 12.0562C7.78842 12.0562 7.58277 12.123 7.41197 12.247L4.61197 14.281C3.82797 14.851 2.77397 14.084 3.07297 13.163L4.14297 9.87102C4.20815 9.6701 4.20803 9.45371 4.14264 9.25287C4.07725 9.05203 3.94994 8.87705 3.77897 8.75302L0.979974 6.72002C0.196974 6.15002 0.599974 4.91002 1.56797 4.91002H5.02897C5.24002 4.91007 5.44568 4.84336 5.6165 4.71942C5.78732 4.59548 5.91455 4.42067 5.97997 4.22002L7.04997 0.928017L7.04897 0.927017Z" />
        </clipPath>
      </defs>
      {type === "full" && (
        <rect
          x="0"
          y="0"
          fill={`${fullColor}`}
          width="100%"
          height="100%"
          clipPath="url(#star)"
        />
      )}

      {type === "half" && (
        <>
          <rect
            x="0"
            y="0"
            fill={`${fullColor}`}
            width="100%"
            height="100%"
            clipPath="url(#star)"
          />
          <rect
            x="50%"
            y="0"
            fill={`${emptyColor}`}
            width="100%"
            height="100%"
            clipPath="url(#star)"
          />
        </>
      )}
      {type === "empty" && (
        <rect
          x="0"
          y="0"
          fill={`${emptyColor}`}
          width="100%"
          height="100%"
          clipPath="url(#star)"
        />
      )}
    </svg>
  );
};

export default IconStar;