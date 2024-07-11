import React from "react";
import { UserAgentType } from "../../common/common.inerface";
import Section1 from "../../components/Landing/Section1/Section1";
import Section2 from "../../components/Landing/Section2/Section2";
import Section3 from "../../components/Landing/Section3/Section3";

type Props = {
  userAgent: UserAgentType;
};

const Landing = ({ userAgent }: Props) => {
  return (
    <main>
      <Section1 userAgent={userAgent} />
      <Section2 userAgent={userAgent} />
      <Section3 userAgent={userAgent} />
    </main>
  );
};

export default Landing;
