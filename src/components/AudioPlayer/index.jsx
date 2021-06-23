import { useCallback, useEffect, useState } from "react"
import ReactPlayer from 'react-player/lazy'
import { timeFormat } from "../../utils/Utils"
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg"
import { ReactComponent as PauseIcon } from "../../assets/icons/pause.svg"
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg"
import { ReactComponent as PreviousIcon } from "../../assets/icons/previous.svg"
import { ReactComponent as LoopIcon } from "../../assets/icons/loop.svg"
import { ReactComponent as ShuffleIcon } from "../../assets/icons/shuffle.svg"

import { WrapperPlayer, Title, Artist, ControlButtons, PreviousButton, PlayButton, NextButton, OtherButton, WrapSlider, Slider, TimeInfos } from "./styles"

const AudioPlayer = ({ music, handlePrevious, handleNext, indexActiveSong, shuffleOrder, lyrics, setCurrentLyrics }) => {
    const [player, setPlayer] = useState()
    const [play, setPlay] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [time, setTime] = useState(0)
    const [currentTime, setCurrentTime] = useState("0:00")
    const [duration, setDuration] = useState()
    const [loop, setLoop] = useState(false)
    const [seeking, setSeeking] = useState(false)

    const keyDownHandler = useCallback(e => {
        if (e.keyCode === 32) {
            setPlay(!play)
        }
    }, [play])

    useEffect(() => {
        window.addEventListener("keydown", keyDownHandler)
        return () => {
            window.removeEventListener("keydown", keyDownHandler)
        }
    }, [keyDownHandler])

    const handlerShuffle = () => {
        setShuffle(!shuffle)
        shuffleOrder(!shuffle)
    }

    useEffect(() => {
        setTime(0)
        setCurrentTime("0:00")
        setCurrentLyrics(["[...]"])
        const metaThemeColor = document.querySelector("meta[name=theme-color]")
        metaThemeColor.setAttribute("content", music.coverColor)
        document.body.style.backgroundImage = `linear-gradient(${music.coverColor}, rgba(0, 0, 0, 0.911), #000)`
    }, [music, indexActiveSong, setCurrentLyrics])

    const ref = (player) => {
        setPlayer(player)
    }

    const handleDuration = (e) => {
        setDuration(timeFormat(e))
    }

    const handleSeekMouseDown = () => {
        setSeeking(true)
    }
    
    const handleSeekChange = e => {
        setTime(parseFloat(e.target.value))
        setCurrentTime(timeFormat(e.target.value * (player.getDuration() - e.target.value)))
    }
    
    const handleSeekMouseUp = e => {
        setSeeking(false)
        setCurrentTime(timeFormat(e.target.value * (player.getDuration() - e.target.value)))
        player.seekTo(parseFloat(e.target.value))
    }

    const handleProgress = (state) => {
        if (state.played >= 0.995 && !loop) {
            setTime(0)
            setCurrentTime("0:00")
            handleNext()
        } 
        if (!seeking) {
            const indexLyrics = lyrics.findIndex(item => timeFormat(item.seconds - music.lyricsDelay) === timeFormat(state.playedSeconds))
            if (indexLyrics !== -1) {
                setCurrentLyrics([lyrics[indexLyrics].lyrics, lyrics[indexLyrics+1].lyrics])
            }
            setCurrentTime(timeFormat(state.playedSeconds))
            setTime(parseFloat(state.played))
        }
    }

    const handlePreviousButton = () => {
        if (time < 0.01) {
            handlePrevious()
        } else {
            setCurrentTime("0:00")
            setTime(0)
            player.seekTo(0)
        }
    }

    return (
        <WrapperPlayer>
            <ReactPlayer 
                ref={ref}
                width="0px"
                height="0px"
                url={music.url} 
                playing={play}
                loop={loop}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />

            <div>
                <Title>{music.title}</Title>
                <Artist>{music.artist}</Artist>
            </div>
            
            <WrapSlider>
                <Slider
                    type="range" min={0} max={0.999999} step="any"
                    value={time}
                    onTouchStart={handleSeekMouseDown}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onTouchEnd={handleSeekMouseUp}
                    onMouseUp={handleSeekMouseUp}
                />
                <TimeInfos>
                    <p>{currentTime}</p>
                    <p>{duration}</p>
                </TimeInfos>
            </WrapSlider>

            <ControlButtons>
                <OtherButton active={shuffle} color={music.coverColor} onClick={() => handlerShuffle()}>
                    <ShuffleIcon />
                </OtherButton>
                <PreviousButton onClick={() => handlePreviousButton()}>
                    <PreviousIcon />
                </PreviousButton>
                <PlayButton onClick={() => setPlay(!play)}>
                    {play ? <PauseIcon /> : <PlayIcon />}
                </PlayButton>
                <NextButton onClick={() => handleNext()}>
                    <NextIcon />
                </NextButton>
                <OtherButton active={loop} color={music.coverColor} onClick={() => setLoop(!loop)}>
                    <LoopIcon />
                </OtherButton>
            </ControlButtons>
        </WrapperPlayer>
    )
}

export default AudioPlayer