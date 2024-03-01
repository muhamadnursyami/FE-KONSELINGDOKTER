import { Button, Navbar } from "flowbite-react";
import Logo from "../assets/KonselingDokter.svg";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className="border-b fixed w-full top-0 z-50 py-3">
      <Navbar.Brand href="/">
        <img src={Logo} className="ml-3 h-5" alt="Konseling Dokter" />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-3">
        <NavLink to="/login">
          <Button outline color="blue" size="lg">
            Login
          </Button>
        </NavLink>
        <NavLink to="/register">
          <Button color="blue" size="lg">
            Sign Up
          </Button>
        </NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <ScrollLink to="home" smooth={true} duration={500}>
          <Navbar.Link className="cursor-pointer text-base">Home</Navbar.Link>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          <Navbar.Link className="cursor-pointer text-base">About</Navbar.Link>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          <Navbar.Link className="cursor-pointer text-base">
            Pricing
          </Navbar.Link>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          <Navbar.Link className="cursor-pointer text-base">
            Contact
          </Navbar.Link>
        </ScrollLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
