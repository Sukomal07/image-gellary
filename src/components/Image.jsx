import { Link } from "react-router-dom"

function Image({ url, id }) {
    return (
        <div className="photos">
            <Link to={`/${id}`}>
                <img src={url} alt="photos" id={id} />
            </Link>
        </div>
    )
}

export default Image