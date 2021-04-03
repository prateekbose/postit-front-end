import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const Animate = (page) => useSpring({
    from: {
        opacity: 0
    },
    to: {
        opacity: (page === "Home")?1:0
    },
    delay: 450,
    config: {
        duration: 300,
        easing: easings.easeCubic
    }
})

const ImageAnimate = (index, page) => useSpring({
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    },
    delay: 450 + (450 * index),
    config: {
        duration: 300,
        easing: easings.easeCubic
    }
})

const Images = ({images, setPage, setIndex}) => {
    const setNextPage = () => {
        setPage("Text")
    }

    const ClickHandler = (index,) => {
        setIndex(index)
        setNextPage()
    }

    return images.map((item, index) => (
        <animated.div onClick={() => ClickHandler(index)} className="image" key={index} style={{...ImageAnimate(index), backgroundImage: `url(${item})`}}/>
    ))
}

const CardSelect = ({ images, page, setPage, setIndex }) => {

    return (
        <animated.section className="card-select" style={Animate(page)}>
            <h1>Select a card to use</h1>
            <div className="images">
                <Images images={images} setPage={setPage} setIndex={setIndex}/>
            </div>
        </animated.section>
    )
}

export default CardSelect