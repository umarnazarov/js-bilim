import React, { useState, useEffect } from 'react'
import Coder from '../../editors/Coder'

function JavaScript({ code }) {
    const [js, setJs] = useState(code || '')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <script>${js}</script>
        </html>
      `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [js])


    return (
        <>
            <div>
                <Coder
                    language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div>
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

export const getServerSideProps = async (context) => {
    return {
        props: {
            code: context.query.code || null
        }
    }
}
export default JavaScript
