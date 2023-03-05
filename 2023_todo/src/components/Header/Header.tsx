import classNames from "classnames/bind";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FilterList, FilterType } from "../../types/types";
import style from "./Header.module.scss";

const cx = classNames.bind(style);

interface TodoListProps {
  selected: FilterType;
  handleNavClick: (navId: FilterType) => void;
}

export default function NavBar({ selected, handleNavClick }: TodoListProps) {
  return (
    <header>
      <span className={cx("toggle")}>
        <MdOutlineLightMode />
        <MdOutlineDarkMode />
      </span>
      <ul className={cx("filters")}>
        {FilterList.map((nav) => (
          <li key={nav}>
            <button
              onClick={() => handleNavClick(nav)}
              className={cx("filter", nav === selected && "selected")}
            >
              {nav}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
