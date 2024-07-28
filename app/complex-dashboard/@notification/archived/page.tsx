import Link from "next/link";

export default function page() {
    return (
        <>
            <div>Archived</div>
            <Link href={'/complex-dashboard'}>Default</Link>
        </>
    )
}