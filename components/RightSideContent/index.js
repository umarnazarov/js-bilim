import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import cls from './right_side_content.module.scss'

function Index({ filterSections }) {
    const router = useRouter()
    const [toggle, setToggle] = useState('')
    const [close, setClose] = useState(false)

    const handleToggle = (section) => {
        setToggle(toggle === section ? '' : section)
    }

    const checkStatus = (section) => {
        return toggle === section ? cls.toggleOn : ''
    }

    return (
        <div className={cls.container} id={close ? cls.closed : cls.opened}>
            <div className={cls.content}>
                <div className={cls._top}>
                    <h1 className={cls.title} >Kurs Content</h1>
                    <span onClick={() => setClose(!close)} className={cls._toggler}>|||</span>
                </div>
                {filterSections.map((s, inx) => (
                    <section className={cls.section} key={s.title}>
                        <div onClick={() => handleToggle(s.title)} className={cls._info}>
                            <h1 className={cls._title}>Section {inx + 1}: {s.title}</h1>
                            <span>{s.childs.length} artikl</span>
                        </div>  
                        <ul
                            className={cls._childs}
                            id={checkStatus(s.title)}
                        >
                            {
                                s.childs.map((c, inx) => (
                                    <li
                                        key={c.title}
                                        className={cls._child}
                                        style={{ backgroundColor: router.asPath.includes(`/${c}`) ? 'rgb(226, 226, 226)' : '#fff' }}
                                    >
                                        <Link href={c}>{inx + 1 + '. ' + c.replace("-", " ")}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Index
