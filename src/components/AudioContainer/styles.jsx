import styled, { keyframes } from "styled-components"
import { device } from "../../utils/reponsive"
import { fadeInUp } from "react-animations"

export const RootContainer = styled.div`
    margin: auto;
    padding: 20px;
`

export const Container = styled.div`
    width: calc(100% - 40px);
    margin: auto;
    
    @media ${device.tablet} { 
        width: 95%;
    }
    @media ${device.laptop} { 
        width: calc(70% - 40px);
    }
    @media ${device.desktop} { 
        width: calc(50% - 40px);
    }
    @media ${device.desktopL} { 
        width: calc(40% - 40px);
    }
`

export const Title = styled.p`
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: 600;
`

export const Cover = styled.div`
    text-align: center;
    margin-top: 50px;
    img {
        width: 300px;
    }

    &:hover {
        cursor: pointer;
    }

    @media ${device.mobileS} { 
        margin-top: 20px;
        img {
            width: 200px;
        }
    }

    @media ${device.mobileM} { 
        margin-top: 30px;
        img {
            width: 300px;
        }
    }

    @media ${device.mobileL} { 
        img {
            width: 300px;
        }
    }

    @media ${device.tablet} { 
        img {
            width: 350px;
        }
    }

    @media ${device.laptop} { 
        margin-top: 20px;
        img {
            width: 400px;
        }
    }
    @media ${device.laptopL} { 
        margin-top: 40px;
        img {
            width: 450px;
        }
    }
    @media ${device.desktop} { 
        margin-top: 70px;
        img {
            width: 700px;
        }
    }
    @media ${device.desktopL} { 
        margin-top: 50px;
    }
`

export const LyricsContainer = styled.div`
    position: absolute;
    background: #000000db;
    top: 0;
    width: 100%;
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`

export const LyricsWrapper = styled.div`
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    padding: 0 20px;

    @media ${device.mobileS} { 
        margin-top: 20px;
    }

    @media ${device.mobileM} { 
        margin-top: 300px;
    }

    @media ${device.mobileL} { 
        margin-top: 150px;
    }

    @media ${device.tablet} { 
        font-size: 50px;
        margin-top: 200px;
    }

    @media ${device.laptopL} { 
        margin-top: 350px;
    }
`

const fadeInUpAnimation = keyframes`${fadeInUp}`

export const CurrentLyrics = styled.p`
    color: white;
    animation: 0.2s ${fadeInUpAnimation};
`

export const CurrentLyricsAnimation = styled(CurrentLyrics)``

export const NextLyrics = styled.p`
    font-size: 18px;
    color: gray;
`

export const NextLyricsAnimation = styled(NextLyrics)``