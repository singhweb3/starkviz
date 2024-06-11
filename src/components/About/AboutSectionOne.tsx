import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = ({shortDisc}) => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        {shortDisc && 
        <div className="mb-9 mt-10">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-4xl xl:text-4xl">
        Who We Are 
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
        Established in 2010, Starkviz Technologies is your premier destination for innovative digital solutions. Specializing in web and mobile software development and design solutions, we offer end-to-end services tailored to your needs. <br/><br/>Our team leverages the latest technologies and methodologies to deliver impeccable solutions. We prioritize client satisfaction, helping businesses of all sizes realize their vision effortlessly. From startups to enterprises, our diverse clientele benefits from our comprehensive services. <br/><br/>Starkviz combines power, functionality, and reliability with flexibility and usability, ensuring your digital success. Experience the Starkviz difference and elevate your digital presence today.
        </p>
      </div>
        }
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Empower Your Digital Journey"
                paragraph="Starkviz Technologies is your gateway to innovative digital solutions. We specialize in crafting cutting-edge web and mobile applications, dynamic websites, and powerful browser extensions. Our commitment to quality and innovation ensures your digital presence stands out, delivering exceptional experiences to your users."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Creative Design" />
                    <List text="Quality Assurance" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Scalable Solutions" />
                    <List text="Agile Methodology" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[600px] lg:mr-0">
                <Image
                  src="/images/about/starviz.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:mr-0 rounded"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
