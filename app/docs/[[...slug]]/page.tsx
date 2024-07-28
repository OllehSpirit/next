export default function docs({ params }: {
    params: {
        slug: string[]
    }
}) {
    return (
        <div>Docs {params.slug}</div>
    )
}
