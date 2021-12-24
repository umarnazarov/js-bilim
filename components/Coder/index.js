import React, { useState } from 'react'
import cls from './coder.module.scss'

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
        <div className={`${cls.editor_container} ${open ? '' : cls.collapsed}`}>
            <div className={cls._title}>
                <h3>{displayName}</h3>
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen(prevOpen => !prevOpen)}
                >
                    Collap
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