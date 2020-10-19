import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="pt-2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">Follow Us</div>
            <div className="col-12 text-center text-white pb-3">
              {" "}
              <a
                href="https://www.linkedin.com/company/ieeesrmist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios/50/ffffff/linkedin.png"
                  className="mr-1"
                  style={{ maxHeight: "38px", maxWidth: "38px" }}
                />
              </a>
              <a
                href="https://twitter.com/ieeesrmist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios/50/ffffff/twitter-circled.png"
                  className="mr-1"
                  style={{ maxHeight: "38px", maxWidth: "38px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/ieeesrmist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios/50/ffffff/instagram-new.png"
                  className="mr-1"
                  style={{ maxHeight: "38px", maxWidth: "38px" }}
                />
              </a>
              <a
                href="https://www.medium.com/ieeesrmist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios/50/ffffff/medium.png"
                  className="mr-1"
                  style={{ maxHeight: "38px", maxWidth: "38px" }}
                />
              </a>
              <a
                href="https://github.com/IEEE-SRM-Student-Branch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios/50/ffffff/github.png"
                  className="mr-1"
                  style={{ maxHeight: "38px", maxWidth: "38px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/ieeesrmist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios/50/ffffff/facebook.png"
                  style={{ maxHeight: "38px", maxWidth: "38px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer pt-2">© 2020 Made with ❤️️ by IEEE SRM SB</div>
      <div className="priv">
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li className="mr-2 mb-2">
            <a
              className="text-muted"
              href="https://www.ieeesrmist.in/disclaimer"
              target="_blank"
            >
              Disclaimer
            </a>
          </li>
          <li className="mr-2 mb-2">
            <a
              className="text-muted"
              href="https://www.ieeesrmist.in/codeofconduct"
              target="_blank"
            >
              Code of Conduct
            </a>
          </li>
          <li className="mr-2 mb-2">
            <a
              className="text-muted"
              href="https://www.ieeesrmist.in/privacypolicy"
              target="_blank"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
