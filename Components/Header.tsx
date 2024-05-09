import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between max-w-7xl
    mx-auto z-20 xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/mudit-pathak-b75063201/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/mudittpathak/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/mudit.pathak.773"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/mudittpathak"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/muditpathakk"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          {/* <SocialIcon 
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          /> */}
          <svg
            role="img"
            aria-label="email social icon"
            className="social-svg"
            viewBox="0 0 64 64"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              fillRule: "evenodd",
            }}
          >
            <g
              className="social-svg-icon"
              style={{ transition: "fill 170ms ease-in-out 0s", fill: "gray" }}
            >
              <path d="M0,0H64V64H0ZM41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z" />
            </g>
            <g
              className="social-svg-mask"
              style={{
                transition: "fill 170ms ease-in-out 0s",
                fill: "transparent",
              }}
            >
              <path d="M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z" />
            </g>
          </svg>

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
