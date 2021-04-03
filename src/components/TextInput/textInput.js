import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const TextInput = ({ page, index }) => {
    const [text, setText] = useState("")

    const Animate = () => useSpring({
        from: {
            opacity: 0,
            zIndex: -1
        },
        to: {
            opacity: (page==="Text")?1:0,
            zIndex: (page==="Text")?999:-1
        },
        delay: 900,
        config: {
            duration: 300,
            easing: easings.easeCubic
        }
    })

    const GetCard = () => {
        window.location.href = `https://postit-back-end.herokuapp.com/${index}?text=${text}`
        
    }

    return (
        <animated.section className="text-input" style={Animate()}>
            <h1>Enter a short message</h1>
            <input value={text} onChange={(event) => setText(event.target.value)} type="text" placeholder="Message"></input>
            <button onClick={() => GetCard()}>Make my Postcard</button>
        </animated.section>
    )
}

export default TextInput