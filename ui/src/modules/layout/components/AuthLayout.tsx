import Button from 'modules/common/components/Button';
import { __, bustIframe } from 'modules/common/utils';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
  AuthContent,
  AuthDescription,
  Authlayout,
  CenterContent,
  MobileRecommend
} from '../styles';

type Props = {
  content: React.ReactNode;
  type?: string;
};

class AuthLayout extends React.Component<Props, {}> {
  renderContent(desciption: string, link: string) {
    return (
      <MobileRecommend>
        <CenterContent>
          <div>
            <b>{__('erxes Inc')}</b>
            <div>{__(desciption)}</div>
          </div>
          <Button btnStyle="link" size="small" href={link}>
            {__('Get')}
          </Button>
        </CenterContent>
      </MobileRecommend>
    );
  }

  renderRecommendMobileVersion() {
    const { userAgent } = navigator;

    if (userAgent.indexOf('Mobile') !== -1) {
      if (userAgent.match(/Android/i)) {
        return this.renderContent(
          'Download android app for free on the Google play',
          'https://play.google.com/store/apps/details?id=io.erxes.erxes_android&fbclid=IwAR1bVPBSE0pC_KUNNjOJQA4upb1AuTUfqFcDaHTHTptyke7rNvuvb2mgwb0'
        );
      }
    }

    return null;
  }

  renderDesciption() {
    const { type } = this.props;

    return (
      <>
        <img src="/images/logo.png" alt="erxes" />
        <h1>
          {type === 'setup'
            ? __('Welcome to erxes')
            : __('Open Source Growth Marketing Platform')}
        </h1>
        {type === 'setup' && (
          <h2>Erxes is the partner your website needs for success</h2>
        )}
        <p>
          {type === 'setup'
            ? __(
                'You will configure several settings on this page. You will be able to change these settings in the erxes settings tab. You will be creating the top level administrator account profile. Please complete all the data in Initial Configuration Steps.'
              )
            : __(
                'Marketing, sales, and customer service platform designed to help your business attract more engaged customers. Replace Hubspot with the mission and community-driven ecosystem.'
              )}
        </p>
        {type !== 'setup' && <a href="/">« {__('Go to home page')}</a>}
      </>
    );
  }

  componentDidMount() {
    // click-jack attack defense
    bustIframe();
  }

  render() {
    const { content } = this.props;

    return (
      <Authlayout>
        <AuthContent>
          <Container>
            <Col md={{ span: 8, offset: 2 }}>
              <AuthDescription>{this.renderDesciption()}</AuthDescription>
            </Col>
            <Col md={{ span: 8, offset: 2 }}>{content}</Col>
          </Container>
        </AuthContent>
        {this.renderRecommendMobileVersion()}
      </Authlayout>
    );
  }
}

export default AuthLayout;
