import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const NavBar = () => {
    const Animate = () => useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 450,
        config: {
            duration: 300,
            easing: easings.easeCubic
        }
    })

    return (
        <nav>
            <h1>postIt</h1>
        </nav>
    )
}

export default NavBar