export const queryMaker = (html, css, js) => {
    return {
        html: `
    <!DOCTYPE html>
    <html>
        <title>HTML Tutorial</title>
    <body>

    ${html || ''}

    </body>
    </html>
    `,
        css: `${css || ''}`,
        js: `${js || ''}`,
    }
}