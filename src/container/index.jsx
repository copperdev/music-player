import { useEffect, useState } from "react"
import AudioContainer from "../components/AudioContainer"
import { musics } from "../helper/musics"
import { shuffleArray } from "../utils/Utils"
import "./index.css"

const App = () => {
  const [songs, setSongs] = useState([])
  const [indexActiveSong, setIndexActiveSong] = useState(0)
  const [order, setOrder] = useState([])

  useEffect(() => {
    setSongs(musics)
    const orderTemp = []
    Array.from(new Array(musics.length)).forEach((item, index) => {
      orderTemp.push(index)
    })
    setOrder(orderTemp)
    setIndexActiveSong(orderTemp[0])
  }, [])

  const handlePrevious = () => {
    const index = order.findIndex(item => item === indexActiveSong)
    const previous = index-1
    if (previous < 0) {
      setIndexActiveSong(order[order.length-1])
    } else if (previous >= 0 && order.length > previous) {
      setIndexActiveSong(order[previous])
    }
  }

  const handleNext = () => {
    const index = order.findIndex(item => item === indexActiveSong)
    const next = index+1
    if (next >= order.length) {
      setIndexActiveSong(order[0])
    } else if (next >= 0 && order.length > next) {
      setIndexActiveSong(order[next])
    }
  }

  const shuffleOrder = (shuffle) => {
    let orderTemp = []

    if (shuffle) {
      orderTemp = shuffleArray(order)
      setOrder(orderTemp)
    } else {
      Array.from(new Array(musics.length)).forEach((item, index) => {
        orderTemp.push(index)
      })
    }
    const indexBefore = order.findIndex(item => item === indexActiveSong)
    const index = orderTemp.findIndex(item => item === indexActiveSong)

    if (indexBefore !== index) {
      setIndexActiveSong(index)
    }
    setOrder(orderTemp)
  }

  return songs.length && (
    <AudioContainer shuffleOrder={shuffleOrder} indexActiveSong={indexActiveSong} music={songs[indexActiveSong]} handlePrevious={handlePrevious} handleNext={handleNext} />
  )
}

export default App
