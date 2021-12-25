import React, { useState, useEffect } from 'react'
import Coder from '../components/Coder'

function JavaScript({ html5, css3, javaScript }) {
    const [js, setJs] = useState(javaScript || '')
    const [html, setHtml] = useState(html5 || '')
    const [css, setCss] = useState(css3 || '')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [html, css, js])


    return (
        <>
            <div className='containerEditor'>
                <Coder
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Coder
                    language="css"
                    displayName="Css"
                    value={css}
                    onChange={setCss}
                />
                <Coder
                    language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div className='output'>
                <iframe
                    srcDoc={srcDoc}
                    title='output'
                    sandbox='allow-scripts'
                    frameBorder='0'
                    width="100%"
                    height="100"
                    className='output-frame'
                />
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    return {
        props: {
            html5: context.query.html || null,
            css3: context.query.css || null,
            javaScript: context.query.js || null
        }
    }
}
export default JavaScript
