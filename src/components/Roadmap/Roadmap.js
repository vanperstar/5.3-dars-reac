
import './Roadmap.css'

function Roadmap() {
    return (
        <div className="roadmap">
            <div className="roadmap-item">
                <h4 className="roadmap-title">Roadmap</h4>
                <a className="roadmap-link" href="#">View</a>
                <ul className="roadmap-item">
                <li className="roadmap-planned roadmap--medifair">Planned
                    <span className="roadmap-span">3</span>
                </li>
                <li className="roadmap-progres roadmap--medifair">In-Progress
                    <span className="roadmap-span">2</span>
                </li>
                <li className="roadmap-live roadmap--medifair">Live
                    <span className="roadmap-span">1</span>
                </li>
                </ul>
            </div>
        </div>

    )
}

export default Roadmap