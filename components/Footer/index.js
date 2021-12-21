import cls from "./footer.module.scss"

function index() {
    return (
        <div className={cls.container}>
            <div className={cls.content}>
                <ul className={cls._links}>
                    <li className={cls._link}>2021 Umar</li>
                    <li className={cls._link}>Proekt haqida</li>
                    <li className={cls._link}>Biz bilan boglanish</li>
                </ul>
            </div>
        </div>
    )
}

export default index
