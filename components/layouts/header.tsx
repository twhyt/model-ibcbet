import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Button,
    Col,
    Row
} from "antd"
import Container from "./container";
import Image from "next/image";
import ButtonCommon from "../common/common-button";
import LineIcon from "../icon-svg/line";

const SiteHeader = (props: any) => {
    return (
        <Container>
            <WraperHeader>

                {/* TOP BAR PC */}
                <div className="display_pc header">
                    <Col className="header_logo">
                        <div className="logo">
                            <Image src="/source/logo.png" alt="logo-ibcbet" layout="fill"/>
                        </div>
                    </Col>
                    <Col className="header_content">
                        <Row className="time_and_language">
                            <Col>
                                <p>13:53:35 (GMT+7)</p>
                            </Col>
                            <Col className="language">
                                <Image src="/source/language-logo/thailand.png" alt="logo-ibcbet" width={24} height={24} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ButtonCommon theme="secondary">ลงทะเบียน</ButtonCommon>
                            </Col>
                            <Col>
                                <ButtonCommon theme="primary">ลงชื่อเข้าใช้</ButtonCommon>
                            </Col>
                            <Col>
                                <ButtonCommon icon={<LineIcon/>} theme="thridary">ลงชื่อเข้าใช้</ButtonCommon>
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

    .language {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 15px;
    }

`

export default SiteHeader;
