import React from 'react';
import { PageWrapper } from '~components/Core';
import EcosystemSection from '~sections/ecosystem/PortfolioGridTwo';
import BreadCrumb from '~sections/ecosystem/BreadCrumb';
import FooterTwo from '~sections/index/FooterTwo';
import HeaderButton from '~sections/ecosystem/Header';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '~lib/getStatic';

export default function Agency() {
  const { t } = useTranslation('translations');

  return (
    <PageWrapper headerConfig={{
      headerClasses:
        'site-header site-header--menu-end light-header site-header--sticky',
      containerFluid: false,
      buttonBlock: (
        // eslint-disable-next-line react/no-children-prop
        <HeaderButton
          className="d-none d-sm-flex"
          btnText={t('common.header')}
          btnLink="https://www.localistars.app/register"
        />
      )
    }}>
      <Head>
        <title>{t('ecosystem.meta.title')}</title>
        <meta
          name="description"
          content={t('ecosystem.meta.description')}
        />
      </Head>

      <BreadCrumb title={t('ecosystem.title')} />
      <EcosystemSection />
      <FooterTwo />
    </PageWrapper>
  );
}

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };