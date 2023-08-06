import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import Image from "./Image";

function ImgList() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const url = `https://api.slingacademy.com/v1/sample-data/photos?limit=20`
    async function fetchData() {
        setLoading(true)
        const response = await axios.get(url)
        const photos = response.data.photos
        setData(photos)
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <div className="gellary">
                {(isLoading) ? <><div className="loading"></div></> : <>{data.map((photoData, idx) => <Image url={photoData.url} key={idx} id={photoData.id} />)}</>}
            </div>
        </>
    )
}

export default ImgList