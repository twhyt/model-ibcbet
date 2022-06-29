import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import {
    Col,
    Dropdown,
    Menu,
    Row,
} from "antd"
import Container from "./container";
import Image from "next/image";
import ButtonCommon from "../common/common-button";
import LineIcon from "../icon-svg/line";

const languageData = [
    {
        "id": 1,
        "code": "th",
        "lang_name": "Thailand",
        "name": "ไทย",
        "icon": "https://wgcms-dev-api.commonservices.net/media/cms/lang/image/th.jpeg"
    },
    {
        "id": 2,
        "code": "en",
        "lang_name": "English",
        "name": "Engling",
        "icon": "https://wgcms-dev-api.commonservices.net/media/cms/lang/image/th.jpeg"
    },
]

const SiteHeader = (props: any) => {

    const menuLanguage = (
        <LanguageMenu>
            <div className="arrow_orange"></div>
            {languageData !== undefined && languageData.length > 0 &&
                languageData.map((item: any, key: any) => {
                    return (
                        <Fragment key={key}>
                            <Menu.Item>
                                <Row className="language_box">
                                    <Col className="language_logo">
                                        <Image src="/source/language-logo/thailand.png" alt="logo-ibcbet" width="100%" height="100%" layout="fill" />
                                    </Col>
                                    <Col>
                                        <p className="language_name">{item.name}</p>
                                    </Col>
                                </Row>
                            </Menu.Item>
                        </Fragment>
                    )
                })
            }
        </LanguageMenu>
    );

    const dropdownLanguage = () => {
        return (
            <Dropdown
                overlay={menuLanguage}
                trigger={['click']}
                placement="bottomRight"
                overlayClassName="dropdown_language"
            >
                <Col className="language_logo" onClick={e => e.preventDefault()}>
                    <Image src="/source/language-logo/thailand.png" alt="logo-ibcbet" width={24} height={24} />
                </Col>
            </Dropdown>
        )
    }

    return (
        <Container>
            <WraperHeader>

                {/* TOP BAR PC */}
                <div className="display_pc header">
                    <Col className="header_logo">
                        <div className="logo">
                            <Image src="/source/logo.png" alt="logo-ibcbet" layout="fill" />
                        </div>
                    </Col>
                    <Col className="header_content">
                        <Row className="time_and_language">
                            <Col>
                                <p>13:53:35 (GMT+7)</p>
                            </Col>
                            <Col>
                                {/* change language button */}
                                {dropdownLanguage}
                                {/* ###################### */}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ButtonCommon theme="secondary" >ลงทะเบียน</ButtonCommon>
                            </Col>
                            <Col>
                                <ButtonCommon theme="primary">ลงชื่อเข้าใช้</ButtonCommon>
                            </Col>
                            <Col>
                                <ButtonCommon icon={<LineIcon />} theme="thridary">ลงชื่อเข้าใช้</ButtonCommon>
                            </Col>
                        </Row>
                    </Col>
                </div>

                <div className="display_pc header" style={{ margin: "15px 0 0" }}>
                    <Col className="header_logo">
                        <div className="logo">
                            <Image src="/source/logo.png" alt="logo-ibcbet" layout="fill" />
                        </div>
                    </Col>
                    <Col className="header_content">
                        <Row className="time_and_language">
                            <Col>
                                <p>13:53:35 (GMT+7)</p>
                            </Col>
                            <Col>
                                {/* change language button */}
                                {dropdownLanguage}
                                {/* ###################### */}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="box-profile">
                                <Row align="middle">
                                    <p className="text">username</p>
                                </Row>
                            </Col>
                            <Col className="box-profile">
                                <Row align="middle">
                                    <p className="text">balance</p>
                                </Row>
                            </Col>
                            <Col>
                                <ButtonCommon theme="thridary">ฝาก</ButtonCommon>
                            </Col>
                            <Col>
                                <ButtonCommon theme="primary">ถอน</ButtonCommon>
                            </Col>
                        </Row>
                    </Col>
                </div>

                {/* TOP BAR MOBILE */}
                <div className="display_mobile">

                </div>

            </WraperHeader>
        </Container>
    );
};

const WraperHeader = styled.div`
    /* margin: 15px 0 0 ; */
    padding: 15px 0;

    p {
        font-size: 1rem;
    }

    .display_pc {
        display: flex;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .display_mobile {
        display: none;
        @media (max-width: 768px) {
            display: flex;
        }
    }

    .header {
        justify-content: space-between;
    }

    .header_logo {
        color: red;
    }

    .logo {
        width: 214.37px;
        height: 68.96px;
        position: relative;
    }
    
    .time_and_language {
        flex-flow: row;
        justify-content: flex-end;
    }

    .language_logo {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 15px;
        background-color: transparent;
    }

    .box-profile {
        margin: auto 5px;
        background-color: #fff;
        min-width: 180px;
        min-height: 35px;
        border: solid 1px #FF5000;
        border-radius: 18px;

        display: flex;
        align-items: center;
    }

    .text {
        margin: 0 5px;
        text-align: center;
    }
`

const LanguageMenu = styled(Menu) <any>`
    
    min-width: 150px;
    padding: 5px;
    border-radius: 15px;
    margin-right: 15px;
    margin-top: 5px;

    .arrow_orange {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;

        width: 20px;
        height: 20px;
        background-color: #FF5000;
    }

    .language_box {
        justify-content: flex-start;
        align-items: center;
        padding: 5px 0;
    }

    .language_logo {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        overflow: hidden;
        margin:0 15px;
        background-color: transparent;
    }

    .language_name {
        margin: 0;
        font-size: 1rem;
    }
`
export default SiteHeader;
