import { useState } from "react";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";

function App() {
    const [isHover, setIsHover] = useState(false);
    const { x, y } = useMousePosition();
    const size: number = isHover ? 400 : 40;

    return (
        <>
            <motion.div
                className="mask"
                animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.5,
                }}
            >
                <p
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    A visual designer - with skills that haven't been replaced
                    by A.I (yet) - making good shit only if the paycheck is
                    equally good.
                </p>
            </motion.div>
            <div className="body">
                <p>
                    I'm a <span>selectively skilled</span> product designer with
                    strong focus on producing high quality & impactful digital
                    experience.
                </p>
            </div>
        </>
    );
}

export default App;
