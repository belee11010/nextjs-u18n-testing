import React from 'react';
import { Tab, Nav, Container, Col, Row } from 'react-bootstrap';
import FeatureTabPenLayout from './Components/FeatureTabPenLayout';
import FeatureImage from './Components/FeatureImages';
import Feature from './style';
import featureSectionData from '~data/translationjobs/Features';
import FeatureWidgetsBlock from './Components/FeatureWidgetsBlock';
import { useTranslation } from 'next-i18next';

export default function FeatureSection() {
  const { t } = useTranslation('translations');

  return (
    <Feature background="rgba(4, 105 , 117, 0.7)">
      <Container className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Feature.Tab>
            <Row className="justify-content-center">
              <Col className="col-xl-7 col-lg-8 col-md-10">
                <Nav className="nav nav-tabs" id="myTab" role="tablist">
                  <Nav.Link eventKey="first" className="nav-link">
                    {t('creator.features.first.menu')}
                  </Nav.Link>
                  <Nav.Link eventKey="second" className="nav-link">
                    {t('creator.features.second.menu')}
                  </Nav.Link>
                  <Nav.Link eventKey="third" className="nav-link">
                    {t('creator.features.third.menu')}
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Tab.Content className="tab-content">
              <Tab.Pane eventKey="first">
                <FeatureTabPenLayout
                  imageBlock={<FeatureImage name="payout.gif" />}
                  contentBlock={
                    <FeatureWidgetsBlock
                      tabLabel="first"
                      widgetData={featureSectionData.tabWidget1}
                    />
                  }
                  contentBlockTitle={t('creator.features.first.tabTitle', featureSectionData.featureTabTitle1)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <FeatureTabPenLayout
                  imageBlock={<FeatureImage name="partners.jpg" />}
                  contentBlock={
                    <FeatureWidgetsBlock
                      tabLabel="second"
                      widgetData={featureSectionData.tabWidget2}
                    />
                  }
                  contentBlockTitle={t('creator.features.second.tabTitle', featureSectionData.featureTabTitle2)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <FeatureTabPenLayout
                  imageBlock={<FeatureImage name="manage-team.jpg" />}
                  contentBlock={
                    <FeatureWidgetsBlock
                      tabLabel="third"
                      widgetData={featureSectionData.tabWidget3}
                    />
                  }
                  contentBlockTitle={t('creator.features.third.tabTitle', featureSectionData.featureTabTitle3)}
                />
              </Tab.Pane>
            </Tab.Content>
          </Feature.Tab>
        </Tab.Container>
      </Container>
    </Feature>
  );
}
