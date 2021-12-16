import Link from 'next/link'
import cls from './hero.module.scss'
import Navbar from "../Navbar"

function index() {
    return (
        <div className={cls.container}>
            <Navbar />
            <div className={cls.content}>
                <div>
                    <h1 className={cls._title}><span id={cls.underlineded}>Zamonaviy</span> Web dasturlash darsligi</h1>
                    <p className={cls._description}>Endi bu qanday amalga oshirildi. Oddiy, ammo batafsil tushuntirishlar bilan asosiy mavzulardan ilgor mavzulargacha.</p>
                    <div className={cls._btn}>
                        <Link href="/courses">Boshlash (Free)</Link>
                    </div>
                </div>
            </div>
            <div className={cls.socials}>
                <a className={cls.social} href='#' blank="true">Instagram</a>
                <a className={cls.social} href='#' blank="true">Github</a>
                <a className={cls.social} href='#' blank="true">Facebook</a>
            </div>
        </div>
    )
}

export default index
