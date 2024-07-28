'use client';

import { inter } from '@/app/ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Metadata } from 'next';

import '@/styles/globals.css';

// export const metadata: Metadata = {
//   authors: { name: "Anas Attoum" },
//   title: 'next.js',
//   description: 'learn next.js now',
//   keywords:
//     "React.Js , Next.Js , Next.JS 14 , TailwindCSS, CSS, javascript , TypeScript",
//   icons: "/Me.jpg",
// }

const links = [
  { name: 'Home', href: '/' },
  { name: 'News', href: '/news' }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const path = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        {links.map((link, index) => {
          const isActive = path===link.href
          return <Link key={index} href={link.href} className={isActive?'font-bold text-red-400':''}>{link.name} </Link>
        })}
        {children}
      </body>
    </html>
  );
}