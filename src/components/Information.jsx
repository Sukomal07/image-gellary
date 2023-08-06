import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Information() {
    const { id } = useParams()
    const [data, setdata] = useState([])
    const [isLoading, setLoading] = useState(true)
    async function fetchData() {
        setLoading(true)
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        setdata({
            name: response.data.photo.title,
            desc: response.data.photo.description,
            src: response.data.photo.url
        })
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="details">
            {(isLoading) ? <><div className="loading loading2"></div></> : <>
                <img src={data.src} alt="photo" className="photo" />
                <div className="sub-details">
                    <h2>{data.name}</h2>
                    <span>{data.desc}</span>
                </div>
            </>}
        </div>
    )
}

export default Information