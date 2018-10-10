import React from "react";
import { SlackInvitation } from "../../components/Common";
import Header from "../../components/Header/Header";
import Meetups from "../../components/Meetups/Meetups";

const Home = props => (
  <div>
    <Header />
    <Meetups />
    <SlackInvitation />
  </div>
);

export default Home;
