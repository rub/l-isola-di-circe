import React from "react";
import Logo from "../logo/logo";
import {
  footer,
  footerWrapper,
  content,
  main,
  column,
  footerLogo,
  columnTitle,
  columnInfo,
  columnNav,
  secondaryInfo,
} from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footer}>
      <div className={footerWrapper}>
        <div className={content}>
          <div className={main}>
            <div className={column}>
              <Logo className={footerLogo} />
            </div>
            <div className={column}>
              <h3 className={columnTitle}>Indirizzo</h3>
              <p className={columnInfo}>
                Viale Patrono d’Italia, 10,
                <br />
                06081, Santa Maria degli Angeli,
                <br />
                Assisi (PG)
              </p>
            </div>
            <div className={column}>
              <h3 className={columnTitle}>Contatti</h3>
              <ul className={columnNav}>
                <li>
                  <a href="/">info@lisoladicirce.it</a>
                </li>
                <li>
                  <a href="/">+ 39 075 670 8034</a>
                </li>
                <li>
                  <a href="/">+ 39 370 316 8983</a>
                </li>
                <li>
                  <a href="/">Whatsapp</a>
                </li>
              </ul>
            </div>
          </div>
          <aside className={secondaryInfo}>
            <p>&copy; {currentYear} L'Isola di Circe</p>
            <p>
              Progettato e sviluppato da{" "}
              <a
                href="https://alessiorapini.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alessio Rapini
              </a>
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
