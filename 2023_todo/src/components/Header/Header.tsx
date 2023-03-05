import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext, useDarkMode } from "../../context/DarkModeContext";
import { FilterList, FilterType } from "../../types/types";
import style from "./Header.module.scss";

const cx = classNames.bind(style);

interface TodoListProps {
  selected: FilterType;
  handleNavClick: (navId: FilterType) => void;
}

export default function NavBar({ selected, handleNavClick }: TodoListProps) {
  const state = useDarkMode();

  const handleDarkMode = () => {
    if (!state) return;
    const { toggleDarkMode } = state;
    toggleDarkMode();
  };

  return (
    <header>
      <button className={cx("toggle")} onClick={handleDarkMode}>
        {state?.darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </button>
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
