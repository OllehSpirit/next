import Image from "next/image"
import Link from "next/link"
import { photos } from "./photos"

export default function page() {
    
    return (
        <>
            <div className="flex gap-x-5">
                {photos.map((photo, index) => {
                    return <Link href={`/photo-feed/${index + 1}`} key={index}>
                        <Image src={photo.url} alt={photo.name} width={500} height={100} />
                    </Link>
                })}
            </div>
        </>
    )
}
