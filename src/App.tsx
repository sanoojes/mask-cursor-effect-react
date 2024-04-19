import { useState } from "react";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";

function App() {
    const [isHover, setIsHover] = useState(false);
    const { x, y } = useMousePosition();
    const size: number = isHover ? 400 : 40;

    return (
        <>
            <button
                type="button"
                className="absolute top-4 right-2 bg-gray-800 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 transition-colors z-50"
                onClick={() => {
                    open(
                        `https://github.com/sanoojes` +
                            import.meta.env.BASE_URL,
                        "SingleSecondaryWindowName"
                    );
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="2rem"
                    height="2rem"
                    fill="#fff"
                >
                    {" "}
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
            </button>
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
