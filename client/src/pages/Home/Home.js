import React from "react";
import { NavigationBar, SlackInvitation } from "../../components/Common";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Meetups from "../../components/Meetups/Meetups";
import Footer from "../../components/Footer/Footer";

const Home = props => (
  <div>
    <NavigationBar />
    <Header />
    <About />
    <Meetups />
    <SlackInvitation />
    <Footer />
  </div>
);

export default Home;
