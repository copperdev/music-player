import AudioPlayer from "../AudioPlayer"

import { RootContainer, Container, Cover, Title } from "./styles"

const AudioContainer = ({ indexActiveSong, music, handlePrevious, handleNext, shuffleOrder }) => (
    <RootContainer>
        <Title>Music Player</Title>
        <Container>
            <Cover>
                <img src={music.cover} alt="cover" />
            </Cover>
        </Container>

        <AudioPlayer 
            shuffleOrder={shuffleOrder} 
            indexActiveSong={indexActiveSong} 
            music={music}
            handlePrevious={handlePrevious} 
            handleNext={handleNext} 
        />
    </RootContainer>
)

export default AudioContainer