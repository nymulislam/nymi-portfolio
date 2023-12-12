import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_titel">Naym</h1>

        <ul className="footer_list">
          <li className="">
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li className="">
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li className="">
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="" className="footer_social-link" target="_black">
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://linkedin.com/in/nymulislam"
            className="footer_social-link"
            target="_black"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/nymulislam"
            className="footer_social-link"
            target="_black"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer_copy">
          &copy; {currentYear}{" "}
          <a href="/https://linkedin.com/in/nymulislam" target="_blank">NAYMI</a> All Rights
          Reserved.{""}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
