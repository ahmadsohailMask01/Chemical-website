"use client";

import React, { useState } from "react";
import styles from "../../../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import Cards from "./cards";
import electro from "../../../assets/electro.png";
import txtfact from "../../../assets/textfactory.png";
import cons from "../../../assets/cons.png";
import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";
import icon3 from "../../../assets/icon3.svg";
import { MdEngineering } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { AiFillExperiment } from "react-icons/ai";
import { SiFsecure } from "react-icons/si";
import { useRouter } from "next/navigation";
import { SiElectron } from "react-icons/si";
import { toast as notify } from "react-toastify";
import val1 from "../../../assets/val1.jpg";
import mis1 from "../../../assets/mis1.jpg";
import intro_gif from "../../../assets/intro_gif.gif";
import { BASE_API_URL } from "../../../utils/constants";

const MainPage = () => {
  const router = useRouter();
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [message, set_message] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${BASE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      notify.success("Contact Details sent Successfully!");
      router.refresh();
      set_name("");
      set_email("");
      set_phone("");
      set_message("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className={styles.section1}>
        <div className={styles.container}>
          <div className={styles.branding}>
            <h2 className={styles.h2}>Empowering Innovation in</h2>
            <h1 className={styles.h1}>Chemical Solutions</h1>
            <p className={styles.p}>
              At PAKChem Enterprises, we lead the way in providing cutting-edge
              chemical solutions for industrial needs with a commitment to
              innovation and quality.
            </p>
            <Image src={intro_gif} width={300} height={300} />
          </div>
          <div className={styles.container2}>
            <div className={styles.card}>
              <div className={styles.card_container}>
                <h3 className={styles.h3}>Pigment Binder</h3>
                <span className={styles.h4}>Best Coating Technology</span>
              </div>
              <div className={styles.clip} id="clip" />
            </div>

            <div className={styles.card}>
              <div className={styles.card_container}>
                <h3 className={styles.h3}>Silicon</h3>
                <span className={styles.h4}>Best Catalysis Research</span>
              </div>
              <div className={styles.clip} id="clip" />
            </div>
            <div className={styles.card}>
              <div className={styles.card_container}>
                <h3 className={styles.h3}>Lycra Protector</h3>
                <span className={styles.h4}>
                  Best Textile and Finishing Research
                </span>
              </div>
              <div className={styles.clip} id="clip" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.container3}>
          <div className={styles.column_div}>
            <span className={styles.p1}>Who we are</span>
            <span className={styles.p2}>Provide Chemical Solutions</span>
            <span className={styles.p3}>
              Deliver innovative, sustainable chemical solutions meeting
              industry needs while prioritizing safety, quality, and
              environmental stewardship for global impact.
            </span>
          </div>
        </div>
        <div className={styles.container4}>
          <Cards
            src={txtfact}
            card_title={"Textile Industry"}
            card_paragraph={
              "We provide dyes, finishes, and auxiliaries to the textile industry, enabling the production of fabrics with desired colors and performance properties, meeting diverse consumer needs"
            }
          />
          <Cards
            src={cons}
            card_title={"Construction Industry"}
            card_paragraph={
              "We supply binders for paints, coatings, adhesives, and sealants, ensuring strong adhesion and durability in construction materials. Additionally, they offer silicon-based sealants and caulks for waterproofing, weatherproofing, and sealing joints and gaps in buildings"
            }
          />
          <Cards
            src={electro}
            card_title={"Electronics Industry"}
            card_paragraph={
              "We provide binders crucial for encapsulating and protecting delicate electronic components, ensuring their longevity and performance. They also supply silicon wafers, essential for fabricating semiconductor devices like integrated circuits and microchips, powering modern electronics"
            }
          />
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.container5}>
          <div className={styles.information_div}>
            <div className={styles.info_div_container}>
              <span className={styles.info_div_heading}>
                We are leader in Industrial Market since 2020
              </span>
              <span className={styles.information_para}>
                Our company, Catalyst Innovations, pioneers cutting-edge
                chemical solutions, driven by a commitment to excellence,
                sustainability, and customer satisfaction. We blend innovation
                with expertise to redefine possibilities and empower industries
                worldwide.
              </span>
              <div className={styles.row1}>
                <div className={styles.properties_container}>
                  <MdEngineering className={styles.engineer} />
                  <div className={styles.user_info}>
                    <span className={styles.name}>Perfect Engineer</span>
                    <span className={styles.description_info}>
                      Our company seeks engineers who consistently deliver
                      exceptional work, embodying expertise, and innovation
                    </span>
                  </div>
                </div>
                <div className={styles.properties_container}>
                  <GiWallet className={styles.engineer} />
                  <div className={styles.user_info}>
                    <span className={styles.name}>Reasonable</span>
                    <span className={styles.description_info}>
                      Our company is committed to providing reasonably priced
                      products without compromising quality or performance
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.properties_container}>
                  <AiFillExperiment className={styles.engineer} />
                  <div className={styles.user_info}>
                    <span className={styles.name}>Quality Products</span>
                    <span className={styles.description_info}>
                      Our company is dedicated to producing high-quality
                      products that exceed customer expectations and uphold
                      stringent standards of excellence
                    </span>
                  </div>
                </div>
                <div className={styles.properties_container}>
                  <SiFsecure className={styles.engineer} />
                  <div className={styles.user_info}>
                    <span className={styles.name}>Safe & Secure</span>
                    <span className={styles.description_info}>
                      Our company prioritizes safety and security measures to
                      ensure a protected environment for employees, customers,
                      and stakeholders
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.section4}>
        <div className={styles.container6}>
          <hr className={styles.hr} />
          <span className={styles.trusted_head}>Our Trusted Partners</span>
          <hr className={styles.hr} />
        </div>
        <div className={styles.partners_container}>
          <span className={styles.partners_name}>PAKChem</span>
          <span className={styles.partners_name}>Indurance</span>
          <span className={styles.partners_name}>Chemixel</span>
          <span className={styles.partners_name}>Blenders</span>
        </div>
      </section> */}
      <section className={styles.section5}>
        <div className={styles.quote_container}>
          <div className={styles.values}>
            <Image
              src={val1}
              className={styles.values_img}
              alt="values_image"
            />
            <div className={styles.values_content}>
              <span className={styles.values_head}>Our Values</span>
              <span className={styles.values_desc}>
                Our company values innovation, constantly seeking new solutions
                to industry challenges. Sustainability is at our core, guiding
                our operations to minimize environmental impact. We prioritize
                safety, ensuring the well-being of our employees and
                communities. Excellence is our standard, reflected in the
                quality of our products and services.
              </span>
            </div>
          </div>
          <div className={styles.values}>
            <Image
              src={mis1}
              className={styles.values_img}
              alt="Mission_image"
            />
            <div className={styles.values_content}>
              <span className={styles.values_head}>Our Mission</span>
              <span className={styles.values_desc}>
                Our mission is to be a leading innovator in chemical solutions,
                addressing global needs with cutting-edge technologies. We
                strive for sustainability, developing eco-friendly products and
                processes to minimize environmental impact. Our commitment to
                safety drives our operations, ensuring the well-being of our
                employees, customers, and communities
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.Form}>
            <span className={styles.Form_head}>Request A Quote</span>
            <div className={styles.input_holder}>
              <input
                type="text"
                onChange={(e) => set_name(e.target.value)}
                value={name}
                placeholder="Name"
                className={styles.input}
                required={true}
              />
              <input
                type="email"
                onChange={(e) => set_email(e.target.value)}
                value={email}
                placeholder="Email"
                className={styles.input}
                required={true}
              />
              <input
                type="text"
                onChange={(e) => set_phone(e.target.value)}
                value={phone}
                placeholder="Phone"
                className={styles.input}
                required={true}
              />
              <textarea
                type="text"
                onChange={(e) => set_message(e.target.value)}
                value={message}
                placeholder="Message"
                className={`${styles.input} ${styles.textarea}`}
                required={true}
              />
              <button
                type="submit"
                className={styles.submit}
                title="Submit Details"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MainPage;
