import { useEffect, useState } from "react"

const useImage = (fileName) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/${fileName}`)
                setImage(response.default)
            } catch (e) {
                console.log(e)
            }
        }

        fetchImage()
    }, [fileName])

    return {
        image
    }
}

export default useImage;