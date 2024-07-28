import Link from "next/link";

export default function page() {
  return (
    <>
      <div>Notification</div>
      <Link href={'/complex-dashboard/archived'}>Archived</Link>
    </>
  )
}