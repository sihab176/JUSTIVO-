import React from "react";

const NavbarTop = () => {
  return (
    <div className="flex justify-between px-20 py-4 border-b border-[#BE7D60]">
      <div className="flex items-center gap-8">
        <h3>FAQ</h3>
        <h3>Personnel</h3>
        <h3>Our Expertise</h3>
      </div>
      <div className="flex gap-10">
        <p>consultancy@email.com</p>
        <p>+123456789</p>
      </div>
    </div>
  );
};

export default NavbarTop;
