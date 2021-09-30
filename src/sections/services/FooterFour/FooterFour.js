import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, LanguageSwitchLink } from '~components'
import Footer from "./style"
import LogoBlack from "~image/logo/logo-black.png";
import Image from 'next/image';
import i18nextConfig from '~next-i18next.config'
import { useRouter } from 'next/router'

export default function FooterFour() {
    const router = useRouter()
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

    return(
        <Footer>
            <Container>
                <Footer.Box pb="30px">
                <Row className="justify-content-center justify-content-lg-between">
                    <Col xs="12" className="col-6 col-xxs-4 col-lg-4 col-md-5 col-xs-4">
                    <Footer.Logo>
                        <Footer.Box mb="30px" mbMD="0">
                            <Link to="#">
                                <Image src={LogoBlack} alt="logo" />
                            </Link>
                        </Footer.Box>
                    </Footer.Logo>
                    </Col>
                    <Col xs="12" className="col-lg-8 col-md-7">
                        <Footer.Menu>
                        <Footer.MenuItems><Link to="/">Home</Link></Footer.MenuItems>
                        <Footer.MenuItems><Link to="/about-us">About Us</Link></Footer.MenuItems>
                        <Footer.MenuItems><Link to="/blog/blogs-reguler">Blog</Link></Footer.MenuItems>
                        <Footer.MenuItems><Link to="/innerpage/contact/contact-1">Contact</Link>
                        </Footer.MenuItems>
                        </Footer.Menu>
                    </Col>
                </Row>
                </Footer.Box>
                <Footer.Copyright>
                <Footer.CopyrightText>© 2021 Fastland By FinestDevs. All Rights Reserved</Footer.CopyrightText>
                <Footer.SocialShare>
                    <Footer.SocialShareItem>
                        <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-square" />
                        </a>
                    </Footer.SocialShareItem>
                    <Footer.SocialShareItem>
                        <a href="https://twitter.com/">
                            <i className="fab fa-twitter" />
                        </a>
                    </Footer.SocialShareItem>
                    <Footer.SocialShareItem>
                        <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram" />
                        </a>
                    </Footer.SocialShareItem>
                    <Footer.SocialShareItem>
                        <a href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin" />
                        </a>
                    </Footer.SocialShareItem>
                </Footer.SocialShare>
                </Footer.Copyright>
            </Container>
        </Footer>
    )
}