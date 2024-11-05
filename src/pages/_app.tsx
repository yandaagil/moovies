import '@/styles/globals.css'
import { AppProps } from 'next/app'
import MainLayout from '@/components/layout/mainLayout'
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <MainLayout>
            <Component {...pageProps} />
            <Analytics />
          </MainLayout>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
