import React from 'react'
import cls from './left_side_content.module.scss'

function index() {
    return (
        <div className={cls.container}>
            <div className={cls.content}>
                Article Content should be here
            </div>
        </div>
    )
}

export default index
