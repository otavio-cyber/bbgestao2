import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BB Gestão Empresarial – Assessoria para empresas',
  description:
    'A BB Gestão Empresarial atua na prestação de serviços de assessoria para empresas de médio porte. Fale com quem entende de gestão.',
  keywords:
    'assessoria empresarial, gestão, finanças, RH, operações, BPO, PME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
