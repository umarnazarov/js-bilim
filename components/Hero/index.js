import React from 'react'
import SearchBar from '../SearchBar'
import cls from './hero.module.scss'

function index() {
    return (
        <div className={cls.container}>
            <div className={cls.content}>
                <div>
                    <h1 className={cls._title}>Zamonaviy JavaScript darsligi</h1>
                    <p className={cls._description}>Endi bu qanday amalga oshirildi. Oddiy, ammo batafsil tushuntirishlar bilan asosiy mavzulardan ilg'or mavzulargacha.</p>
                    <SearchBar />
                </div>
                <div className={cls.about}>
                    <h3 className={cls._mainText}>Mundarija</h3>
                    <p className={cls._mainDescrip}>Asosiy kurs JavaScript-ni dasturlash tili va brauzer bilan ishlashni qamrab oluvchi 2 qismdan iborat. Tematik maqolalarning qo'shimcha turkumlari ham mavjud.</p>
                </div>
            </div>
        </div>
    )
}

export default index
