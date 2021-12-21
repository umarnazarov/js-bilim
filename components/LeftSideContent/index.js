import Link from 'next/link'
import cls from './left_side_content.module.scss'

function index({ content }) {
    return (
        <div className={cls.container}>
            <div className={cls.content}>
                <p className={cls._title}>Ushbu Artiklda</p>
                <ul className={cls._links}>
                    {content.map(c => (
                        <li className={cls._link}>
                            <Link href={"#" + c}>{c.replace('-', ' ')}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default index
