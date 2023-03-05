import classNames from "classnames/bind";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FilterList, FilterType } from "../types/types";
import style from "./navbar.module.scss";

const cx = classNames.bind(style);

interface TodoListProps {
  handleNavClick: (navId: FilterType) => void;
}

export default function NavBar({ handleNavClick }: TodoListProps) {
  return (
    <div>
      <span>
        <MdOutlineLightMode />
        <MdOutlineDarkMode />
      </span>
      <ul className={cx("nav")}>
        {FilterList.map((nav) => (
          <li key={nav} onClick={() => handleNavClick(nav)}>
            {nav}
          </li>
        ))}
      </ul>
    </div>
  );
}
