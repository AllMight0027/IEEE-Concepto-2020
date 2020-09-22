import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        © 2020 Made with &hearts; by IEEE SRM SB
      </div>
      <div className="priv">
        <ul className="list-unstyled d-flex justify-content-end mb-0">
          <li className="mr-2 mb-2"><a className="text-white" href="">Disclaimer</a></li>
          <li className="mr-2 mb-2"><a className="text-white" href="">Code of Conduct</a></li>
          <li className="mr-2 mb-2"><a className="text-white" href="">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
