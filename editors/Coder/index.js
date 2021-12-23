import React, { useState } from 'react'


let ControlledEditor = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    require('codemirror/lib/codemirror.css')
    require('codemirror/theme/material.css')
    require('codemirror/mode/xml/xml')
    require('codemirror/mode/javascript/javascript')
    require('codemirror/mode/css/css')
    ControlledEditor = require('react-codemirror2').Controlled
}

export default function Coder(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props
    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen(prevOpen => !prevOpen)}
                >
                    {/* <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /> */}
                    click
                </button>
            </div>
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