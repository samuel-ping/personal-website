import * as React from "react";
import { useEffect, useState } from "react";

import { chakra } from "@chakra-ui/react";
import { motion, useAnimation, usePresence } from "framer-motion";

function SvgComponent({ isAnimated, color, size }) {
  if (!isAnimated)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size * 0.65}
        height={size}
        viewBox="0 0 14.249 22.02"
        stroke={color}
        strokeWidth={2.425}
      >
        <g fill="none">
          <path d="M10.188 1.993C6.663.943 4.293.881 2.64 2.248 1.544 3.133.985 4.243 1.295 5.314 1.728 6.604 3.632 7.3 5.361 7.65c2.112.478 4.378.843 6.166 1.787 1.623.84 1.875 3.113 1.031 4.344-.76 1.244-2.23 1.752-4.273 2.03l-5.888-.078" />
          <path d="M3.354 11.296V22.02" />
        </g>
      </svg>
    );

  const MotionBox = chakra(motion.svg);
  const controls = useAnimation();

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    controls.set("hidden");
    controls.start("visible").then(() => {
      setAnimationComplete(true);
    });
  });

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const delayedPathVariants = {
    ...pathVariants,
    visible: {
      ...pathVariants.visible,
      transition: {
        ...pathVariants.visible.transition,
        delay: 0.6,
      },
    },
  };

  return (
    <MotionBox
      xmlns="http://www.w3.org/2000/svg"
      width={size * 0.65}
      height={size}
      viewBox="0 0 14.249 22.02"
      stroke={color}
      strokeWidth={2.425}
      initial={controls}
      animate={controls}
      onHoverStart={async () => {
        if (animationComplete) {
          setAnimationComplete(false);
          controls.set("hidden");
          controls.start("visible").then(() => {
            setAnimationComplete(true);
          });
        }
      }}
    >
      <motion.path
        fill="none"
        variants={pathVariants}
        d="M10.188 1.993C6.663.943 4.293.881 2.64 2.248 1.544 3.133.985 4.243 1.295 5.314 1.728 6.604 3.632 7.3 5.361 7.65c2.112.478 4.378.843 6.166 1.787 1.623.84 1.875 3.113 1.031 4.344-.76 1.244-2.23 1.752-4.273 2.03l-5.888-.078"
      />
      <motion.path
        fill="none"
        variants={delayedPathVariants}
        d="M3.354 11.296V22.02"
      />
    </MotionBox>
  );
}

export default SvgComponent;
