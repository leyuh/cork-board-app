import '../styles/StickyNote.css';
import React, {useRef} from 'react';

function StickyNote (props) {

    const { posX, posY, content, boardIndex, updateInput, indx} = props;
    console.log(boardIndex, indx);

    const cont = useRef(content);

    return <div className="sticky-note-div" index={`sticky-note-div-${boardIndex}-${indx}`} style={{
        position: "absolute",
        left: `${posX - 375}px`,
        top: `${posY - 75}px`,
    }}>
        <textarea 
            className="sticky-note-textarea" 
            defaultValue={cont.current}
            onInput={e => updateInput(e, boardIndex, indx)}
        >
        </textarea>
    </div>
}

export default StickyNote;