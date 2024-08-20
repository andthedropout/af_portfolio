import React from "react";
import "./Loader.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      <motion.div
        className="Loader"
        initial={{ opacity: 1 }}
        visible={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="200.8px"
          height="150.2px"
          viewBox="800 200 500 1000"
        >
          <motion.path
            initial={{ fill: "#333" }}
            animate={{ fill: "#FFF" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M1067.7,914 1231.2,914 930.1,205 837.4,205 824,205 663,205 663,914 770,914 837.4,914 838,914 838,584.3 
            893.1,584.3 855,493.1 838,493.1 838,369.8z
            "/>
          <motion.path
          initial={{ fill: "#333" }}
          animate={{ fill: "#FFF" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
            d="M1185,493.1 1092.3,493.1 1130.7,584.3 1185,584.3z"/>
          <motion.path
          initial={{ fill: "#333" }}
          animate={{ fill: "#FFF" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
            d="M1224,205 974.7,205 1038,357 1224,357z"/>
          <motion.path
            strokeIinejoin="round"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            style={{
              stroke: "#000",
              fill: "transparent",
              strokeWidth: 600,
              strokeMiterlimit: 10,
            }}
            d="M1185,493.1 1092.3,493.1 1130.7,584.3 1185,584.3z"
            d="M1224,205 974.7,205 1038,357 1224,357z"
d="M1067.7,914 1231.2,914 930.1,205 837.4,205 824,205 663,205 663,914 770,914 837.4,914 838,914 838,584.3 
893.1,584.3 855,493.1 838,493.1 838,369.8z"/>
        </svg>
      </motion.div>
    </AnimatePresence>
  );
}
