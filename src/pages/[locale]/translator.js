import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection1 from "~sections/translator/Hero1";
import ServicesSection from "~sections/translator/Services";
import ManageSection from "~sections/translator/Manage";
import AboutSection1 from "~sections/translator/About1";
import CtaSection from "~sections/translator/Cta";
import Process from "~sections/translator/Process";
import FooterTwo from "~sections/index/FooterTwo";
import HeaderButton from "~sections/translator/Header";

import { getStaticPaths, getI18nProps } from '~lib/getStatic'
import getSlug from '~lib/getSlug'

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
  buttonBlock: (
    <HeaderButton
      clasName="ms-auto d-none d-xs-inline-flex"
      btnText="Find a translator"
      mr="15px"
      mrLG="0"
    />
  ),
};

export default function Agency() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection1 />
      <ServicesSection />
      <ManageSection />
      <AboutSection1 />
      <Process />
      <CtaSection />
      <FooterTwo />
    </PageWrapper>
  );
}


export async function getStaticProps(ctx) {
  return {
    props: {
      ... await getI18nProps(ctx)
    }
  };
}

export { getStaticPaths }
