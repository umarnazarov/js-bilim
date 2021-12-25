import React from 'react'

import Card from '../Card'

import cls from './courses.module.scss'

function Courses({ content }) {
    return (
        <div className={cls.container}>
            <div className={cls.content}>
                <h1 className={cls._title}>Mavjud artiklar</h1>
                <Card content={content} />
            </div>
        </div>
    )
}

export default Courses
