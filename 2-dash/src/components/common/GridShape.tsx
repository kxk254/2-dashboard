import Image from "next/image";
import React from "react";

export default function GridShape() {
  return (
    <>
      <div>
        <Image
          src="/images/shape/grid-01.svg"
          width={540}
          height={254}
          alt="grid"
        />
      </div>
      <div>
        <Image
          src="/images/shape/grid-01.svg"
          width={540}
          height={254}
          alt="grid"
        />
      </div>
    </>
  );
}
