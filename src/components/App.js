import React from 'react'

export default function App (props) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />

        <meta property='og:url' content='Site' />
        <meta property='og:site_name' content='Site' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:width' content='480' />
        <meta name='twitter:image:height' content='480' />

        <meta property='og:title' content={props.meta.title} />
        <meta name='twitter:title' content={props.meta.title} />
        <title>{props.meta.title}</title>

        <meta name='description' content={props.meta.description} />
        <meta property='og:description' content={props.meta.description} />
        <meta name='twitter:description' content={props.meta.description} />

        <meta property='og:image' content='/graph.jpg' />
        <meta name='twitter:image' content='/graph.jpg' />

        <link href='/main.css' rel='stylesheet' />
      </head>
      <body>
      
        <div id='root'>{props.children}</div>
        <script src='/index.js' />
      </body>
    </html>
  )
}
