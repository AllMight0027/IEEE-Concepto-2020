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

export default Speakers;
