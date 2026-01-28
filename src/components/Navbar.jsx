import React from "react";

const Navbar = () => {
  return (
    <section className="max-w-[1620px] mx-auto">
        <nav className="px-20 mt-[15px] flex items-center justify-between">
      <div className="flex items-center  gap-2">
        <img src="/OBJECTS.png" alt="logo" className="w-[50px] h-[50px]" />
        <h2 className="text-[24px]">JUSTIVO</h2>
      </div>
      <div className="flex items-center gap-[30px]">
        <h4>Home</h4>
        <h4>About Us</h4>
        <h4>Practice Areas</h4>
        <h4>Our Team</h4>
        <h4>Case Studies</h4>
        <h4>Blog</h4>
        <h4>Contact</h4>
        <button className="px-6 py-4 bg-[#041c2c] text-white">
          Free Consultation
        </button>
      </div>
    </nav>
  </section>
  );
};

export default Navbar;
