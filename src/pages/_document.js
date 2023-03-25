import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@700&display=swap" rel="stylesheet"/>

        <Script  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></Script >
        <Script  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></Script >
        <Script  src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></Script >
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
