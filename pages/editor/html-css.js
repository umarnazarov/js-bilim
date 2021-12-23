import React, { useState, useEffect } from 'react'
import Coder from '../../editors/Coder'

function Html() {
    const [html, setHtml] = useState('html')
    const [css, setCss] = useState('css')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [html, css])


    return (
        <>
            <div >
                <Coder
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Coder
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
            </div>
            <div >
                <iframe
                    srcDoc={srcDoc}
                    title='output'
                    sandbox='allow-scripts'
                    frameBorder='0'
                    width="100%"
                    height="100"
                />
            </div>
        </>
    )
}

export default Html 
