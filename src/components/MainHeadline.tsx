import React from 'react'
import { LinkType } from '../types'
// import LeftMenu from './LeftMenu'


interface MainHeadlineProps {
    menuItems: LinkType[]
}

const MainHeadline = (props:MainHeadlineProps) => {

    const { menuItems } = props

    return (
        <div className="main-block row px-5">

            <ul className="nav flex-column col-md-3 left-side-bar d-none d-md-block">
                {menuItems.map((item, index) => {
                    return (
                        <li className="nav-item" key={`left-navbar-item-${index}`}>
                            <a className="nav-link" href={item.url}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>

            <div className="col-12 col-sm-8 col-md-8 col-lg-6 px-0">
                <h1 className="main-heading mb-5 d-none d-lg-block">Герої воєнної України</h1>
                <h1 className="main-heading smaller mb-5 d-lg-none">Герої воєнної України</h1>
                <p className="col-12 col-md-7 col-lg-5 mb-5 main-subheading">Історії про самовідданих 
                    з 24 лютого по сьогодення</p>
                <br />
                <p className="my-5">Проєкт Ukraine War - це історія української війни в діях та образах сучасних героїв. Наша мета показати обличчя країни через конкретні приклади непересічних людей, щоб ця боротьба не стерлась з пам'яті українців та іноземців разом із повідомленнями стрічки новин.

                    Ukraine War - це жива енциклопедія, яка розвивається разом із нашою країною. Люди забувають події, проте пам'ятають людей. Саме тому наш акцент на особистостях. Аби кожен незалежно від локації і часу зміг відчути персональний зв'язок. І пам'ятати.
                    Тож коли ця війна закінчиться, наша історія перемоги буде не черговою статистикою, а біографією України в героях.</p>
            </div>

            <div className="col position-relative d-none d-md-block">
                <div className="zub3-bg">
                    <img src="../static/img/3zub.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default MainHeadline