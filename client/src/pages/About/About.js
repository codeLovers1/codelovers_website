import React from "react";
import { Layout } from "../../components/Common/";
import AboutContent from "../../components/AboutContent/AboutContent.js";
import "./About.css";

const About = props => (
  <Layout>
    <div className="About-section">
      <AboutContent />
    </div>
  </Layout>
);

export default About;
