import React, { useState, useEffect } from 'react'
import Coder from '../../editors/Coder'

function Html() {
    const [html, setHtml] = useState('html')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
        </html>
      `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [html])


    return (
        <>
            <div >
                <Coder
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
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
