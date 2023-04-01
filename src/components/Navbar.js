import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state=useSelector((state)=>state.cart.cart)
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
          <Link href="/cart">
          <li>Cart-items {state.length}</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
