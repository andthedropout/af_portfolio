import React from "react";

export default function Logo({ color }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="258.8px"
      height="164.2px"
      viewBox="800 -200 500 1000"
    >
<path d="M1224,205 974.7,205 1038,357 1224,357z"/>
<path d="M1185,493.1 1092.3,493.1 1130.7,584.3 1185,584.3z"/>
<path d="M1067.7,914 1231.2,914 930.1,205 837.4,205 824,205 663,205 663,914 770,914 837.4,914 838,914 838,584.3 
	893.1,584.3 855,493.1 838,493.1 838,369.8z"/>
    </svg>
  );
}

Logo.defaultProps = {
  color: "#FFF",
};
