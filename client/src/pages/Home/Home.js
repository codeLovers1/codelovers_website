import React from "react";
import { SlackInvitation, Layout } from "../../components/Common";
import Header from "../../components/Header/Header";
import Meetups from "../../components/Meetups/Meetups";
import Events from "../../components/Events/Events";

const Home = props => (
  <Layout>
    <Header />
    <Meetups />
    <Events />
    <SlackInvitation />
  </Layout>
);

export default Home;
