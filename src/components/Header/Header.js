import './Header.css'

function Header() {
    return (
        <header className="suggestions-header">
            <h5 className="suggestions-title">6 Suggestions</h5>
            <dl>
                <dd>Sort by:</dd>
                <dt>Most Upvotes</dt>
            </dl>
            <button className="suggestions-button">+ Add Feedback</button>
        </header>

    )
}

export default Header