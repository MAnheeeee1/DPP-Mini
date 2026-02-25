import React from "react";
import { Knewave } from "next/font/google";

type HeaderProps = {
  title: string;
  size: string;
};

const Header = ({ title, size }: HeaderProps) => {
  return <h1 className={"text-8xl mt-15 md:text-center"}>{title}</h1>;
};

export default Header;
