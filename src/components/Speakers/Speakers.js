// import React from "react";
// import "./speakers.css";
// import Slider from "./Slider";
// const slideData = [
//     {
//         index: 0,
//         headline: "New Fashion Apparel",
//         button: "Shop now",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
//     },
//     {
//         index: 1,
//         headline: "In The Wilderness",
//         button: "Book travel",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
//     },
//     {
//         index: 2,
//         headline: "For Your Current Mood",
//         button: "Listen",
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
//     },
//     {
//         index: 3,
//         headline: "Focus On The Writing",
//         button: "Get Focused",
//         src:
//             "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
//     },
// ];
// export default function Speakers() {
//     return (
//         <div id="app">
//             {/* SliderControl(); */}
//             <Slider heading="Example Slider" slides={slideData} />
//         </div>
//     );
// }

import React from "react";
import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";

const fn = function () {
    /* do your action */
};

function Speakers() {
    return (
        <div>
            <Coverflow
                width="960"
                height="500"
                classes={{ background: "rgb(233, 23, 23)" }}
                className=""
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={true}
                clickable={true}
                active={0}
            >
                <div
                    onClick={() => fn()}
                    onKeyDown={() => fn()}
                    role="menuitem"
                    tabIndex="0"
                >
                    <img
                        src="http://andyyou.github.io/react-coverflow/images/album-1.png"
                        alt="title or description"
                        style={{
                            display: "block",
                            width: "100%",
                        }}
                    />
                </div>
                <img
                    src="http://andyyou.github.io/react-coverflow/images/album-2.png"
                    alt="title or description"
                    data-action="http://andyyou.github.io/react-coverflow/"
                />
                <img
                    src="http://andyyou.github.io/react-coverflow/images/album-3.png"
                    alt="title or description"
                    data-action="http://andyyou.github.io/react-coverflow/"
                />
            </Coverflow>
        </div>
    );
}
//     document.querySelector(".content")
// );

export default Speakers;
