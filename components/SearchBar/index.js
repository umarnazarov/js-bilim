import React from 'react'
import cls from './searchBar.module.scss'

function SearchBar() {
    return (
        <form className={cls.content}>
            <input className={cls._serach} type="text" placeholder='Darslikni izlang' />
            <button className={cls._submit}>Qidirish</button>
        </form>
    )
}

export default SearchBar        
