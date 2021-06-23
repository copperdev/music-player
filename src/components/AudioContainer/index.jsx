import { useEffect, useState } from "react"
import { getLyrics } from "../../api/requests"
import AudioPlayer from "../AudioPlayer"

import { RootContainer, Container, Cover, Title, LyricsContainer, LyricsWrapper, CurrentLyrics, CurrentLyricsAnimation, NextLyrics } from "./styles"

const AudioContainer = ({ indexActiveSong, music, handlePrevious, handleNext, shuffleOrder }) => {
    const [animation, setAnimation] = useState(false)
    const [showLyrics, setShowLyrics] = useState(false)
    const [lyrics, setLyrics] = useState([])
    const [currentLyrics, setCurrentLyrics] = useState([])

    useEffect(() => {
        getLyrics(music.title)
            .then(res => {
                setLyrics(res)
                setCurrentLyrics(["[...]", res[0].lyrics])
            })
            .catch(err => {
                setLyrics([])
                setCurrentLyrics(["Aucun lyrics disponible"])
            })
    }, [music])  
    
    useEffect(() => {
        setAnimation(!animation)
    }, [currentLyrics])

    return (
        <>
            <RootContainer>
                <Title>Music Player</Title>
                <Container>
                    <Cover onClick={() => setShowLyrics(!showLyrics)}>
                        <img src={music.cover} alt="cover" />
                    </Cover>
                </Container>
                
                <AudioPlayer 
                    shuffleOrder={shuffleOrder} 
                    indexActiveSong={indexActiveSong} 
                    music={music}
                    lyrics={lyrics}
                    setCurrentLyrics={setCurrentLyrics}
                    handlePrevious={handlePrevious} 
                    handleNext={handleNext} 
                />
            </RootContainer>
            {showLyrics && (
                <LyricsContainer onClick={() => setShowLyrics(false)}>
                    <LyricsWrapper>
                        {animation ? <CurrentLyrics>{currentLyrics[0]}</CurrentLyrics> : <CurrentLyricsAnimation>{currentLyrics[0]}</CurrentLyricsAnimation>}
                        <NextLyrics>{currentLyrics[1]}</NextLyrics>
                    </LyricsWrapper>
                </LyricsContainer>
            )}
        </>
    )
}
export default AudioContainer