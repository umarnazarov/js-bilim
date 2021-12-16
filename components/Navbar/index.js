import Link from 'next/link'
import cls from './navbar.module.scss'

import search from '../../icons/search.svg'

const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <div className={cls._left_content}>
                <Link href="/" passHref>
                    <span className={cls.logo}>JS Bilim</span>
                </Link>
                <div className={cls._links}>
                    <span className={cls._link}>
                        <Link href="/" passHref>
                            <span className={cls.logo}>Biz haqda</span>
                        </Link>
                    </span>
                    <span className={cls._link}>

                        <Link href="/" passHref>
                            <span className={cls.logo}>Kurslar</span>
                        </Link>
                    </span>
                    <span className={cls._link}>
                        <Link href="/" passHref>
                            <span className={cls.logo}>Hissa qoshish</span>
                        </Link>
                    </span>
                </div>
            </div>
            <div className={cls._rigth_content}>
                <form className={cls._form}>
                    <input className={cls._search_field} placeholder='Izlash' />
                    <img src={search.src} />
                </form>
                <Link href="/" passHref>
                    <button className={cls.btn}>Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar