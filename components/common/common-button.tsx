import styled from "styled-components"
import { Button } from "antd";
import { ReactNode, useEffect, useState } from "react";

interface IButtonCommon {
    children: any;
    className?: string | undefined;
    disabled?: boolean | undefined;
    theme?: string | undefined;
    icon?: ReactNode | undefined
}

const ButtonCommon = (props:IButtonCommon) => {
    const { className='', disabled=false, theme="", icon, children } = props
    const [themeClass,setThemeClass] = useState({})
    // const test = "#BF2B00"
    useEffect(()=>{
        if(theme === "primary"){
            setThemeClass({normal:"#FD501E",hover:"#BF2B00",disabled:"#EACEC1"})
        } else if (theme === "secondary"){
            setThemeClass({normal:"#445D90",hover:"#243A67",disabled:"#D9E0E8"})
        } else if (theme === "thridary"){
            setThemeClass({normal:"#00BF3D",hover:"#12902B",disabled:"#ABE6B7"})
        }
    },[theme])

    console.log('test',theme);
    
    return (
        <ButtonCustom 
            className={`${className}`}
            disabled={disabled}
            type="primary"
            theme={themeClass}
            icon={icon}
        >
            {children}
        </ButtonCustom>
    )
}

const ButtonCustom = styled(Button)`
    min-width: 120px;
    min-height: 35px;
    margin: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    color: #fff;
    background-color: ${(props)=> props.theme?.normal || "#FD501E"};

    border: none;
    border-radius: 5px;

    font-size: 1;

    :focus ,:active {
        background-color: ${(props)=> props.theme?.normal || "#FD501E"};
    }

    :hover {
        background-color: ${(props)=> props.theme?.hover || "#BF2B00"};
    }

    :disabled {
        cursor: initial;

        color: #E9EEF4;
        background-color: ${(props)=> props.theme?.disabled || "#EACEC1"};

        :hover {
            background-color: ${(props)=> props.theme?.disabled || "#EACEC1"};
        }
    }

    ::after {
        --antd-wave-shadow-color: ${(props)=> props.theme?.normal || "#FD501E"} !important;
    }
`

export default ButtonCommon