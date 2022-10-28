import '../styles/StickyNote.css';

function StickyNote (props) {

    const {posX, posY} = props;

    return <div className="sticky-note-div">
        <textarea className="sticky-note-textarea">
        </textarea>
    </div>
}

export default StickyNote;