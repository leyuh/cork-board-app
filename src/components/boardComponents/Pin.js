import React, {useRef, useEffect} from 'react';



function Pin (props) {

    const { data, selectedComp, k} = props;

    const [posX, posY, color] = data;

    var div = useRef(null);

    useEffect(() => {
        if (selectedComp === div.current) {
            div.current.style["border"] = "0.5vw solid rgba(225, 30, 30)";
        } else {
            div.current.style["border"] = "0.5vw solid rgba(7, 7, 7, 0.2)";
        }
    }, [selectedComp])


    return <div className="pin-div" ref={div} k={k} style={{
        position: "absolute",
        left: `calc(${posX}px - 2.5vw)`,
        top: `calc(${posY}px - 2vw)`,
        "height": "2vw",
        "width": "2vw",
        "backgroundColor": color,
        "borderRadius": "1vw",
        "border": "0.5vw solid rgba(7, 7, 7, 0.2)",
        boxSizing: "border-box"
    }}></div>
}

export default Pin;