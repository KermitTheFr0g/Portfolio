import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-background text-white min-h-screen max-h-full'>
      <Component {...pageProps} />
    </div>
  )
}
