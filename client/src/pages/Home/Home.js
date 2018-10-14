import React from "react";
import { SlackInvitation, Layout } from "../../components/Common";
import Header from "../../components/Header/Header";
import Meetups from "../../components/Meetups/Meetups";

const Home = props => (
  <Layout>
    <Header />
    <Meetups />
    <SlackInvitation />
  </Layout>
);

export default Home;
