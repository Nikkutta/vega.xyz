import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const ButtonLink = ({
  text,
  link,
  color,
  minwidth,
  hideArrowForExternal,
  className,
}) => {
  const isExternal = link.startsWith("http");
  const linkClass = `cursor-pointer md:max-w-none group button-link relative inline-block z-10 ${className}`;
  let backgroundClass;
  let borderClass;
  let textClass;

  if (color === "light") {
    textClass = "text-black";
    backgroundClass = "bg-white";
    borderClass = "border-black";
  } else if (color === "dark") {
    textClass = "text-white";
    backgroundClass = "bg-black";
    borderClass = "border-white";
  } else {
    backgroundClass = "bg-white dark:bg-black";
    borderClass = "border-black dark:border-white";
  }

  let buttonClass = `w-full leading-1 text-[0.9375rem] tracking-[0.01rem] transition-[top] relative z-20 group-hover:-top-1.5 top-0 inline-block px-6 py-3 ${backgroundClass} border ${borderClass} uppercase ${textClass}`;

  if (minwidth) {
    buttonClass += ` flex items-center justify-between min-w-[16.25rem]`;
  }

  const buttonBgClass = `absolute z-10 inset-0 border ${backgroundClass} ${borderClass}`;

  if (isExternal) {
    const splitString = text.split(" ");
    const lastWord = splitString[splitString.length - 1];
    const lastIndexOfSpace = text.lastIndexOf(" ");
    const firstPartOfString = text.substring(0, lastIndexOfSpace);

    return (
      <a href={link} target="_blank" rel="noreferrer" className={linkClass}>
        <div className={buttonClass}>
          {firstPartOfString}{" "}
          <span className="whitespace-nowrap">
            {lastWord}
            {!hideArrowForExternal && (
              <span className="inline-block ml-2">
                <LinkArrow />
              </span>
            )}
          </span>
        </div>
        <div className={buttonBgClass}></div>
      </a>
    );
  } else {
    return (
      <Link to={link} className={linkClass}>
        <div className={buttonClass}>{text}</div>
        <div className={buttonBgClass}></div>
      </Link>
    );
  }
};

export default ButtonLink;
