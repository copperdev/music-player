import styled from "styled-components"
import { device } from "../../utils/reponsive"

export const WrapperPlayer = styled.div`
    position: fixed;
    width: calc(100% - 40px);
    bottom: 80px;

    @media ${device.tablet} { 
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        width: calc(90% - 40px);
    }
    @media ${device.laptop} { 
        width: calc(50% - 40px);
    }
    @media ${device.desktop} { 
        width: calc(40% - 40px);
    }
`

export const Title = styled.div`
    margin-top: 22px;
    color: white;
    font-weight: bold;
    font-size: 20px;
`

export const Artist = styled.div`
    margin-top: 5px;
    font-weight: 600;
    font-size: 18px;
    color: lightgray;
`

export const ControlButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const PreviousButton = styled.div`
    width: 30px;

    &:hover {
        cursor: pointer;
    }
`

export const PlayButton = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 100%;
    text-align: center;
    
    svg {
        text-align: center;
        width: 50px;
        height: 50px;
    }

    &:hover {
        cursor: pointer;
    }
`

export const OtherButton = styled.div`
    width: 25px;
    fill: ${props => props.active ? `${props.color}` : "white"};
    
    &:hover {
        cursor: pointer;
    }   
`

export const NextButton = styled.div`
    width: 30px;

    &:hover {
        cursor: pointer;
    }   
`

export const WrapSlider = styled.div`
    margin-top: 10px;
`

export const Slider = styled.input`
    -webkit-appearance: none;
    max-width: 100%;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(to right, #fff 0%, #fff ${props => props.value * 100}%, #ffffff2b ${props => props.value * 100}%, #ffffff2b 100%);
    cursor: pointer;

    &::-webkit-slider-thumb {
        display: block;
        -webkit-appearance: none;
        border: none;
        width: 16px;
        height: 16px;
        border-color: white;
        border-radius: 50%;
        background: white;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        &::-webkit-slider-thumb {
            display: block;
        }
    }

    @media ${device.tablet} { 
        &::-webkit-slider-thumb {
            display: none;
        }
    }
`

export const TimeInfos = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`