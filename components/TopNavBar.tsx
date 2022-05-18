import React, {useState} from 'react'
import {openRef} from '../helpers'
import { LinkType } from '../types'

interface TopNavBarProps {
    logoLink: string,
    joinLink: string,
    telegramLink: string,
    discordLink: string,
    shareLink: string,
    manuItems: LinkType[],
}



const TopNavBar = (props:TopNavBarProps) => {
    const { logoLink, joinLink, telegramLink, discordLink, shareLink, manuItems } = props
    const [ showNavbar, setShowNavbar ] = useState(false)

    return (
        <div className="row p-5 pt-4">
            <div className="col-4 col-md-2 d-none d-lg-block">
                <a href={logoLink}>
                    <img src="../static/img/logo.png" alt="logo" />
                </a>
            </div>
            <div className="col-4 col-md-7 col-lg-5 offset-lg-2 d-flex p-0">
                <button type="button" className="btn btn-nftua trnsp p-0 me-5 d-none d-md-block" onClick={() => openRef(joinLink)}>Приєднатись до проєкту</button>
                <button type="button" className="btn btn-nftua trnsp pe-0" onClick={() => openRef(telegramLink)}>
                    <img src="../static/img/telega.png" alt="telegram link" />
                </button>
                <button type="button" className="btn btn-nftua trnsp" onClick={() => openRef(discordLink)}>
                    <img src="../static/img/discord.png" alt="discord link" />
                </button>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 d-none d-md-flex justify-content-end pe-0">
                <button type="button" className="btn btn-nftua px-5" onClick={() => openRef(shareLink)}>Поділитись історією <span className="mx-1 d-none d-lg-inline">&#10095;</span></button>
            </div>
            <div className='d-md-none col-2 offset-6'>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" onClick={() => {setShowNavbar(!showNavbar)}} type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
            <div className={`collapse-nav ${showNavbar ? 'show-nav' : ''}`}>
                <div className="bg-dark p-4 text-center">
                    <ul className="nav flex-column">
                        {manuItems.map((item, index) => {
                            return (
                                <li className="nav-item" key={`left-navbar-item-${index}`}>
                                    <a className="nav-link" href={item.url}>{item.name}</a>
                                </li>
                            )
                        })}
                        <hr />
                        <li className='nav-item'>
                            <button type="button" className="btn btn-nftua trnsp px-5" onClick={() => openRef(shareLink)}><strong>Поділитись історією</strong></button>
                        </li>
                        <li className='nav-item'>
                            <button type="button" className="btn btn-nftua trnsp px-5" onClick={() => openRef(joinLink)}><strong>Приєднатись до проєкту</strong></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TopNavBar