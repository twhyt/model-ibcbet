import React from "react";
import styled from "styled-components";
import Container from "./container";
import SiteHeader from "./header";

const LayoutPage = (props: any) => {

  return (
    <WrapperContainer className={props.classContainer}>
        <div className="header">
            <SiteHeader/>
        </div>
        <Content>
            {props.children}
        </Content>
    </WrapperContainer>
  );
};

const WrapperContainer = styled.div`

    .header {
        width: 100%;
        position: sticky;
        top: 0;

        background: #E2E9F1;

        @media (max-width: 1440px) {
            padding: 0 10px;
        }
    }

    @-webkit-keyframes rotating /* Safari and Chrome */ {
        from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        }
        to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
        }
    }
    @keyframes rotating {
        from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        }
        to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
        }
    }
    .rotating {
        -webkit-animation: rotating 2s linear infinite;
        -moz-animation: rotating 2s linear infinite;
        -ms-animation: rotating 2s linear infinite;
        -o-animation: rotating 2s linear infinite;
        animation: rotating 2s linear infinite;
    }
`;

const Content = styled.div`
    
`

export default LayoutPage;
