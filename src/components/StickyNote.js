import '../styles/StickyNote.css';

function StickyNote (props) {

    const {boardName, posX, posY} = props;

    return <div className="sticky-note-div" style={{
        position: "absolute",
        left: `${posX - 375}px`,
        top: `${posY - 75}px`,
    }}>
        <textarea className="sticky-note-textarea">
        </textarea>
    </div>
}

export default StickyNote;