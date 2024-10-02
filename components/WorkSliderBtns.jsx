"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ contoinerStyles, btnStyles, iconsStyles }) => {
const swiper = useSwiper();
        return (
                <div className={contoinerStyles}>
                    <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                        <PiCaretLeftBold className={iconsStyles}/>
                    </button>
                    <button className={btnStyles}onClick={() => swiper.slideNext()}>
                        <PiCaretRightBold className={iconsStyles} />
                    </button>
                </div>
   );
};
export default WorkSliderBtns;