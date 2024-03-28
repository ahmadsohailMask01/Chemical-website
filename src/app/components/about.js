import React from "react";
import styles from "../../../styles/about.module.css";
import Link from "next/link";
import Image from "next/image";
import ceo from "../../../assets/ceo.jpeg";
import {
  BiSolidQuoteSingleLeft,
  BiSolidQuoteSingleRight,
} from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { AiFillExperiment } from "react-icons/ai";
import { SiFsecure } from "react-icons/si";

const About = () => {
  return (
    <>
      <section className={styles.blogs_section}>
        <div className={styles.blog_container}>
          <div className={styles.head_div}>
            <span className={styles.blogs_heading}>
              An Innovative Cornerstone in Pakistan's Landscape
            </span>
            <span className={styles.sub_heading}>
              Driving innovation and sustainability in the chemical industry,
              shaping a brighter, cleaner future
            </span>
            <Link href="#" className={styles.btn}>
              Learn More &rarr;
            </Link>
          </div>
          <div className={styles.div2} />
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.sec2_container}>
          <div className={styles.info1}>
            <span className={styles.hi}> Hi, there!</span>
            <span className={styles.about}>We are Abstract Expression</span>
          </div>
          <div className={styles.info2}>
            <span className={styles.para}>
              PAKChem Enterprises pioneers transformative solutions within the
              chemical industry, specializing in the development and production
              of binders, silicon-based materials, and cutting-edge Lycra
              Protector formulations. With a commitment to innovation and
              sustainability, we cater to diverse sectors, from textiles to
              construction and electronics, enhancing product performance and
              longevity. Our dedication to quality, safety, and customer
              satisfaction positions us as a trusted partner, driving progress
              and excellence in every endeavor.
            </span>
            <Link href="#" className={styles.btn2}>
              Read More &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <span className={styles.interest}>What we do</span>
        <div className={styles.des1} />
        <div className={styles.des2} />
        <div className={styles.sec3_head_container}>
          <span className={styles.main_head1}>Provide Chemical Solutions</span>
          <br />
          <span className={styles.sub_2}>
            Deliver innovative, sustainable chemical solutions meeting industry
            needs while prioritizing safety, quality, and environmental
            stewardship for global impact
          </span>
        </div>
        <div className={styles.sec3_container}>
          <div className={styles.row}>
            <div className={styles.row_col}>
              <MdEngineering className={styles.icon} />
              <span className={styles.icon_head}>Perfect Engineer</span>
              <span className={styles.icon_para}>
                Our company seeks engineers who consistently deliver exceptional
                work, embodying expertise, and innovation
              </span>
            </div>
            <div className={styles.row_col}>
              <GiWallet className={styles.icon} />
              <span className={styles.icon_head}>Reasonable</span>
              <span className={styles.icon_para}>
                Our company is committed to providing reasonably priced products
                without compromising quality or performance
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.row_col}>
              <AiFillExperiment className={styles.icon} />
              <span className={styles.icon_head}>Quality Products</span>
              <span className={styles.icon_para}>
                Our company is dedicated to producing high-quality products that
                exceed customer expectations and uphold stringent standards of
                excellence
              </span>
            </div>
            <div className={styles.row_col}>
              <SiFsecure className={styles.icon} />
              <span className={styles.icon_head}>Safe & Secure</span>
              <span className={styles.icon_para}>
                Our company prioritizes safety and security measures to ensure a
                protected environment for employees, customers, and stakeholders
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.sec4_container}>
          <span className={styles.tech_intro}>
            <Image src={ceo} className={styles.ceo_picture} alt="CEO_Image" />
            <span className={styles.ceo_name}>Sohaib Manzoor</span>
            <span className={styles.ceo_head}>Ceo</span>
          </span>
          <span className={styles.tech_para}>
            <BiSolidQuoteSingleLeft className={styles.comma1} />
            Now you have the demand for chemical manufacturing or mixing. How do
            you decide which company is the best choice? Improper selection may
            lead to long delivery time, poor quality or waste of time and money.
            If you choose well, you will be surprised to find how much value
            your partner has added to your production process.
            <BiSolidQuoteSingleRight className={styles.comma2} />
          </span>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.sec4_container}>
          <span className={styles.tech_intro}>Our Values</span>
          <span className={styles.tech_para}>
            Our company values innovation, constantly seeking new solutions to
            industry challenges. Sustainability is at our core, guiding our
            operations to minimize environmental impact. We prioritize safety,
            ensuring the well-being of our employees and communities. Excellence
            is our standard, reflected in the quality of our products and
            services
          </span>
        </div>
        <div className={styles.sec4_container}>
          <span className={styles.tech_intro}>Our Mission</span>
          <span className={styles.tech_para}>
            Our mission is to be a leading innovator in chemical solutions,
            addressing global needs with cutting-edge technologies. We strive
            for sustainability, developing eco-friendly products and processes
            to minimize environmental impact. Our commitment to safety drives
            our operations, ensuring the well-being of our employees, customers,
            and communities
          </span>
        </div>
      </section>
      {/* <section className={styles.section5}>
        <div className={styles.sec5_container}>
          <span className={styles.sec5_head}>Our Clients</span>
          <div className={styles.clients_name}>
            <span className={styles.brands}>PAKChem</span>
            <span className={styles.brands}>Chemixel</span>
            <span className={styles.brands}>Blenders</span>
            <span className={styles.brands}>Indurance</span>
            <span className={styles.brands}>Mixels</span>
          </div>
          <div className={styles.clients_holder}>
            <div className={styles.clients_alternate}>
              <span className={styles.brands}>PAKChem</span>
              <span className={styles.brands}>Chemixel</span>
              <span className={styles.brands}>Blenders</span>
            </div>
            <div className={styles.clients_alternate}>
              <span className={styles.brands}>Indurance</span>
              <span className={styles.brands}>Mixels</span>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
