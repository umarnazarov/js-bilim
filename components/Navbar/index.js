import Link from 'next/link'
import cls from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <Link href="/" passHref>
                <h2>Tutorials</h2>
            </Link>
            <Link href="/about" passHref>
                <p>About Project</p>
            </Link>
        </nav>
    )
}

export default Navbar