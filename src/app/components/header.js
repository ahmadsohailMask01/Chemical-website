import React from "react";
import styles from "../../../styles/header.module.css";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { FcSearch } from "react-icons/fc";
import { RiAccountBoxLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Header = () => {
  return (
    <div className={styles.nav_bar}>
      <section className={styles.section1}>
        <div className={styles.container}>
          <div className={styles.logos_div}>
            <AiFillFacebook className={styles.facebook} />
            <FaTwitterSquare className={styles.twitter} />
            <AiFillLinkedin className={styles.linkin} />
            <AiOutlineInstagram className={styles.insta} />
          </div>
          <div className={styles.info_div}>
            <Link href="/about?section=1" className={styles.links}>
              About Us
            </Link>
            <span className={styles.vertical}>|</span>
            <Link href="/about" className={styles.links}>
              Terms Of Service
            </Link>
            <span className={styles.vertical}>|</span>
            <Link href="/about" className={styles.links}>
              Privacy Policy
            </Link>
            <span className={styles.vertical}>|</span>
            <Link href="/about" className={styles.links}>
              FAQ
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.container2}>
          <div className={styles.sec2div1}>
            <Image src={logo} className={styles.logo_image} alt="Logo_image" />
            <div className={styles.branding}>
              <h1 className={styles.branding_name}>PAKChem Enterprises</h1>
              <h5 className={styles.subheading}>Marketplace</h5>
            </div>
          </div>
          <div className={styles.sec2div2}>
            <div className={styles.phone_div}>
              <FiPhoneCall id="phone_number" className={styles.phone} />
              <div className={styles.phone_label_div}>
                <label htmlFor="phone_number" className={styles.phone_label}>
                  Call Us
                </label>
                <number style={{ width: `200%`, color: `darkgrey` }}>
                  0334-4102442
                  <br />
                  0321-8884433
                </number>
              </div>
            </div>
            <div className={styles.mail_div}>
              <LuMailOpen id="mail" className={styles.mail_icon} />
              <div className={styles.mail_label_div}>
                <label htmlFor="mail" className={styles.mail_label}>
                  Send Us Mail
                </label>
                <font className={styles.mail_label_font}>
                  info.industrypakchem924@gmail.com
                </font>
              </div>
            </div>
            <div className={styles.items}>
              <Link
                href={"/admin_login"}
                className={styles.admin}
                title="Login to Admin Page!"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.container3}>
          <div className={styles.sec3div1}>
            <Link href="/" className={styles.links_style}>
              Home
            </Link>
            <Link href="/about" className={styles.links_style}>
              About Us
            </Link>
            <Link href="/products" className={styles.links_style}>
              Products
            </Link>
            <Link href="/contact" className={styles.links_style}>
              Contact
            </Link>
          </div>
          <div className={styles.sec3div2}>
            <font style={{ marginLeft: `20%` }}>Need Estimate?</font>
            <font
              style={{
                fontWeight: `1000`,
                fontSize: `30px`,
                marginLeft: `15%`,
              }}
            >
              Request a Quote
            </font>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
