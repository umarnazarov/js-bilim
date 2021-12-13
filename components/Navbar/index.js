import Link from 'next/link'
import cls from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <div>
                <Link href="/" passHref>
                    <span className={cls.logo}>JS Bilim</span>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <button className={cls.btn}>Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar