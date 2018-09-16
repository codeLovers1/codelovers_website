import React from "react";
import { SlackInvitation } from "../../components/Common";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Meetups from "../../components/Meetups/Meetups";

const Home = props => (
  <div>
    <Header />
    <About />
    <Meetups />
    <SlackInvitation />
  </div>
);

export default Home;
