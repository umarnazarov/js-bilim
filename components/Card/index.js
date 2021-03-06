import Link from 'next/link'
import React from 'react'
import cls from './card.module.scss'

function index({ content }) {
    return (
        <div className={cls.cards}>
            {
                content.map(c => (
                    <div key={c.id} className={cls._card}>
                        <div>
                            <h1 className={cls._name}>{c.title}</h1>
                            <p className={cls._description}>{c.description}</p>
                            <Link href={c.link} className={cls._btn}>Boshlash</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default index
