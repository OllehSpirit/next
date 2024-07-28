import Image from "next/image"
import { photos, photo } from "../../../photos"

export default function page({ params: { photoId } }: { params: { photoId: string } }) {
    const element: photo = photos.find((_, index) => { return index + 1 === parseInt(photoId) })!
    console.log("🚀 ~ page ~ element:", element)

    return (
        <div className="flex flex-col items-center">
            <Image src={element.url} alt={element.name} width={500} height={100} />
            <h1>{element.name}</h1>
            <h3>{element.photographer}</h3>
            <h6>{element.location}</h6>
        </div>
    )
}
