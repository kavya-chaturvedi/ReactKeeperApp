import React from "react";

function Footer() {
  var date = new Date();
  var currentYear = date.getFullYear();

  return <p>Copyright {currentYear}</p>;
}

export default Footer;
