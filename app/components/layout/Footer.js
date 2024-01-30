import LinkedInSocial from "../../../public/img/linkedinsocial.svg";
import FacebookSocial from "../../../public/img/facebook.svg";
import PhoneIcon from "../../../public/img/phone.svg";
import EmailIcon from "../../../public/img/email.svg";
import AppStoreDownload from "../../../public/img/app-store-download.svg";
import GooglePlayDownload from "../../../public/img/google-play-download.svg";
import FooterLogo from "../../../public/img/footer-logo.svg";
import styles from "./footer.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="container footer__top">
        <div className="container__inner top__inner">
          <div className="footer-block footer-company">
            <a href="#">
              <Image
                src={FooterLogo}
                alt="Gjensidige"
                className="footer-company__logo"
              />
            </a>
            <p className="footer-company__description">
              Informacija apie app ir kokią naudą useris turi ją naudodamasis.
              Lengvas polisų tvarkymas, naudojimas ir t.t.
            </p>
            <h3 className="footer-company__download-title">
              Mūsų programėlė dabar pasiekiama:
            </h3>
            <div className="footer-company__links">
              <a href="#">
                <Image
                  src={GooglePlayDownload}
                  alt="Google Play"
                  className="google-play-icon"
                />
              </a>
              <a href="#">
                <Image src={AppStoreDownload} alt="App Store" />
              </a>
            </div>
          </div>
          <div className="footer-block footer-nav">
            <nav>
              <div className="nav-block">
                <h4>Produktai</h4>
                <ul>
                  <li>
                    <a href="#">Vairuotojo privalomasis draudimas</a>
                  </li>
                  <li>
                    <a href="#">Kasko draudimas</a>
                  </li>
                  <li>
                    <a href="#">Busto draudimas</a>
                  </li>
                  <li>
                    <a href="#">Asmens draudimas</a>
                  </li>
                  <li>
                    <a href="#">Kelionės draudimas</a>
                  </li>
                  <li>
                    <a href="#">Turite drabuotojos sveikatos draudimą?</a>
                  </li>
                  <li>
                    <a href="#">Statybos darbų privalomasis draudimas</a>
                  </li>
                </ul>
              </div>
              <div className="nav-block">
                <h4>Apie Gjensidige</h4>
                <ul>
                  <li>
                    <a href="#">Apie įmonę</a>
                  </li>
                  <li>
                    <a href="#">Karjera</a>
                  </li>
                  <li>
                    <a href="#">Draudimo taisyklės</a>
                  </li>
                  <li>
                    <a href="#">Žiniasklaidai</a>
                  </li>
                  <li>
                    <a href="#">Tarpininkams</a>
                  </li>
                  <li>
                    <a href="#">Kontaktai</a>
                  </li>
                </ul>
              </div>
              <div className="nav-block">
                <h4>Informacija klientams</h4>
                <ul>
                  <li>
                    <a href="#">Atsitikus įvykiui</a>
                  </li>
                  <li>
                    <a href="#">Draudimo taisyklės</a>
                  </li>
                  <li>
                    <a href="#">Išskirtiniai pasiūlymai</a>
                  </li>
                  <li>
                    <a href="#">D.U.K.</a>
                  </li>
                  <li>
                    <a href="#">Slapukų nustatymai</a>
                  </li>
                  <li>
                    <a href="#">Privatumo politika</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="footer-block footer-newsletter">
            <h4>Naujienlaiškis:</h4>
            <p className="pb-sm">
              Prenumeruokite naujienlaiškį ir gaukite aktualias draudimo
              naujienas bei išskirtinius pasiūlymus pirmieji!
            </p>
            <p className="paragraph-bold pb-sm">Įrašykite savo el. paštą</p>
            <div className="input-block pb-sm">
              <input
                className="newsletter-input"
                type="email"
                required
                placeholder="Įveskite el. paštą"
              />
              <button className="newsletter-btn">Siųsti</button>
            </div>
            <p className="pb-sm">
              Daugiau informacijos apie Jūsų asmens duomenų tvarkymą skaitykite
              mūsų <a href="#">Asmens duomenų tvarkymo principuose</a>
            </p>
            <h4 className="pb-sm">Bendraukime:</h4>
            <div className="social-icons">
              <div className="social-icon">
                <Image src={PhoneIcon} alt="Phone" />
                <p>+370 5 2721626</p>
              </div>
              <div className="social-icon">
                <Image src={EmailIcon} alt="Email" />
                <p>
                  <a href="#">Rašykite mums</a>
                </p>
              </div>
              <div className="social-icon">
                <Image src={FacebookSocial} alt="Facebook" />
                <p>
                  <a href="#">Gjensidige Lietuva</a>
                </p>
              </div>
              <div className="social-icon">
                <Image src={LinkedInSocial} alt="LinkedIn" />
                <p>
                  <a href="#">Gjensidige Lietuva</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container footer__bottom">
        <div className="container__inner">
          <p>© Visos teisės saugomos „Gjensidige“</p>
        </div>
      </section>
    </footer>
  );
}
