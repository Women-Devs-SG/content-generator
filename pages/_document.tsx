import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="bg-brand-offwhite text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
