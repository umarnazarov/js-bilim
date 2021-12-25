import React from 'react'

let ControlledEditor = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    require('codemirror/lib/codemirror.css')
    require('codemirror/theme/material.css')
    require('codemirror/mode/xml/xml')
    require('codemirror/mode/javascript/javascript')
    require('codemirror/mode/css/css')
    ControlledEditor = require('react-codemirror2').Controlled
}

export default function JsCoder(props) {
    const {
        language,
        value,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div>
            {ControlledEditor && <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />}
        </div>
    )
}