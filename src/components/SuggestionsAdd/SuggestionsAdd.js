import './SuggestionsAdd.css'

function SuggestionsAdd(props) {
    return(
        <div className="suggestions-add">
            <button className="btn suggestions-add-btn">{props.AddBtn}</button>
            <div className="suggestions-add-item">
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
                <button className="feature-btn-enhancement feature-desc btn">{props.button}</button>
            </div>
            <span>{props.span}</span>
        </div>

    )
}

export default SuggestionsAdd