import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/layout'
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ThemeProvider>
  )
}
