import React from "react";
import Layout from "../../components/Layout/Layout";
import Section1 from "./section1";
import "../../styles/HomeStyle.css"
import Section2 from "./section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

function Home() {
  return (
    <>
      <Layout>
      {/* Home Section 1 */}
      <Section1/>
      {/* About Section2  */}
      <Section2/>
      {/* Home section3 menu */}
      <Section3/>
      {/* Home section 4 */}
      <Section4/>
      {/* Home Section 5  */}
      <Section5/>
      {/* Home Section 6 */}
      <Section6/>
      </Layout>
    </>
  );
}

export default Home;
