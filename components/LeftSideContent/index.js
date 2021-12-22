import Link from 'next/link'
import { useRouter } from 'next/router';


import { ArrowRight, ArrowLeft } from '../../icons'
import cls from './left_side_content.module.scss'

function index({ content, filterSections }) {
    const router = useRouter()
    const allSections = filterSections.reduce((total, val) => [...total, ...val.childs], [])
    let moveTo = allSections.findIndex(v => v.includes(router.asPath.toString().replace(/[/, #]/g, ' ').split(" ")[1]))

    return (
        <div className={cls.container}>
            <div className={cls.content}>
                <p className={cls._title}>Ushbu Artiklda</p>
                <ul className={cls._links}>
                    {content.map(c => (
                        <li key={c.link} className={cls._link}>
                            <Link href={"#" + c}>{c.replace('-', ' ')}</Link>
                        </li>
                    ))}
                </ul>
                <div className={cls.movers}>
                    <p className={cls.mover_left}>
                        <Link href={allSections[moveTo - 1] || "/"} >PREVIOUS</Link>
                    </p>
                    <p className={cls.mover_right}>
                        <Link href={allSections[moveTo + 1] || "/"} >NEXT</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default index
