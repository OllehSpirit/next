import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: {
    newsId: string
  }
}

export const generateMetadata = ({
  params
}: Props): Metadata => {
  return {
    title: params.newsId
  }
}

export default function page({ params }: Props) {

  if (parseInt(params.newsId) > 10)
    notFound()

  return (
    <div>new number {params.newsId}</div>
  )
}
