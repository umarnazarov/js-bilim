import React, { useEffect, useState } from 'react'
import JsCoder from '../JsCoder'

function JsConsole({ javascript }) {
    const [js, setJs] = useState(javascript || '')
    const [output, setOutput] = useState('')
    const [srcDoc, setSrcDoc] = useState('')

    const handleRun = () => {
        try {
            setOutput(new Function(js)())
            setSrcDoc(`
                <html>
                <body>${output}</body>
                <script>${js}</script>
                </html>
            `)
        } catch (e) {
            setOutput(e)
        }
    }

    const handleReset = () => {
        setJs(javascript)
        setSrcDoc(new Function(javascript)())
    }


    return (
        <div>
            <JsCoder
                language="javascript"
                value={js}
                onChange={setJs}
            />
            <button onClick={handleRun}>RUN</button>
            <button onClick={handleReset}>RESET</button>
            <div>
                <iframe
                    srcDoc={srcDoc}
                    title='output'
                    sandbox='allow-scripts'
                    frameBorder='0'
                    width="100%"
                />
            </div>
        </div>
    )
}

export default JsConsole
