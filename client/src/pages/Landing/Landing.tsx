import React from "react";
import { UserAgentType } from "../../common/common.inerface";
import Section1 from "../../components/Landing/Section1/Section1";

type Props = {
  userAgent: UserAgentType;
};

const Landing = ({ userAgent }: Props) => {
  return (
    <main>
      <Section1 userAgent={userAgent} />
    </main>
  );
};

export default Landing;
