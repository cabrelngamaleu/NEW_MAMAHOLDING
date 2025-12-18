import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MAMAHOLDING S.A - Leader du Commerce en Gros',
  description: 'MAMAHOLDING S.A est un groupe leader dans le commerce en gros. Nos entités incluent CAC, TRINCO et ECOFOOD, offrant des solutions complètes pour vos besoins commerciaux.',
  keywords: ['MAMAHOLDING', 'commerce en gros', 'CAC', 'TRINCO', 'ECOFOOD', 'holding'],
  authors: [{ name: 'MAMAHOLDING S.A' }],
  openGraph: {
    title: 'MAMAHOLDING S.A - Leader du Commerce en Gros',
    description: 'Groupe leader dans le commerce en gros avec CAC, TRINCO et ECOFOOD',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={poppins.className}>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
