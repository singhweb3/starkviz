import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Starkviz Technologies",
  description: "Established in 2010, Starkviz Technologies offers premier digital solutions: web/mobile development, design, and end-to-end services tailored to you.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About Starkviz Technologies"
        description="
        Established in 2010, Starkviz Technologies offers premier digital solutions: web/mobile development, design, and end-to-end services tailored to you."
      /> */}
      <AboutSectionOne shortDisc={true} />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
