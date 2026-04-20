import icondropdown from "../assets/images/icon-dropdown.svg";
import logo from "../assets/images/logo.svg";
import iconunits from "../assets/images/icon-units.svg";
import DropdownHeader from "./DropdownHeader";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <header>
      <img src={logo} alt="Logo" />

      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={iconunits} alt="Units" />
        Units
        <img src={icondropdown} alt="Dropdown" />
      </button>
    </header>
  );
}
