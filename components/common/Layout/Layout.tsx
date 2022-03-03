import { ReactNode } from 'react'
import { Header, Footer } from '..'
import { useEffect } from 'react'

import Head from 'next/head'

export const siteTitle = 'The Coinhub Project'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const setTheme = () => {
    // checks if dark mode is enabled
    if (
      localStorage.getItem('thecoinhub:theme') === 'dark' ||
      (!('thecoinhub:theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    // sets theme every time the page is loaded
    setTheme()
  }, [])

  return (
    <div className="flex flex-col bg-white dark:bg-black text-slate-900 dark:text-slate-100">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Official site of Postmeify" />
        <meta name="og:title" content={siteTitle} />
        <title>The Coinhub</title>
      </Head>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}
