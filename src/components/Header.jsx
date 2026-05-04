import icondropdown from "../assets/images/icon-dropdown.svg";
import logo from "../assets/images/logo.svg";
import iconunits from "../assets/images/icon-units.svg";
import DropdownHeader from "./DropdownHeader";
import { useEffect, useRef } from "react";

export default function Header({ isOpen, setIsOpen, children }) {
  const headerRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      // Ako je meni otvoren i klik se dogodio izvan 'headerRef' elementa
      if (isOpen && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Dodajemo event listener na cijeli dokument
    document.addEventListener("mousedown", handleClickOutside);

    // Čišćenje (cleanup) listenera kada se komponenta unmounta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]); // Ponovno pokreni efekt samo kad se stanje promijeni

  return (
    <header ref={headerRef}>
      <img src={logo} alt="Logo" className="logo" />

      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={iconunits} alt="Units" />
        <span> Units </span>
        <img src={icondropdown} alt="Dropdown" />
      </button>
      {children}
    </header>
  );
}
