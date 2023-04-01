import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <style jsx>{`
        .nav {
          background-color: blue;
          height: 50px;
          display: flex;
          justify-content: center;
        }
        .nav ul {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        li {
          list-style: none;
          margin: 0px 10px;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .text-none{
          list-style: none;
          text-decoration: none !important;
        }
      `}</style>
      <div className="nav">
        <ul>
          <Link href="/" className="text-none">
            <li>Home</li>
          </Link>
          <Link href="/about" className="text-none">
            <li>About</li>
          </Link>
          <Link href="/contact" className="text-none">
            <li>Contact Us</li>
          </Link>
          <Link href="/services" className="text-none">
            <li>Services</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
