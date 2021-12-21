import React from 'react'
import { courses } from '../../mock-data/courses-data'
import cls from './card.module.scss'

function index() {
    return (
        <div className={cls.cards}>
            {
                courses.map(c => (
                    <div key={c.title} className={cls._card}>
                        <div>
                            {/* <img className={cls._image} src={c.image} /> */}
                            <h1 className={cls._name}>{c.title}</h1>
                            <p className={cls._author}>Muallif: {c.author}</p>
                            <p className={cls._description}>{c.description}</p>
                            <button className={cls._btn}>Boshlash</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default index