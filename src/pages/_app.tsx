import '@/styles/globals.css'
import { AppProps } from 'next/app'
import MainLayout from '@/components/layout/mainLayout'
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
          <Analytics />
        </MainLayout>
      </ThemeProvider>
    </>
  )
}
