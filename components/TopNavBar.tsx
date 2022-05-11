import React from 'react'
import {openRef} from '../helpers'

interface TopNavBarProps {
    logoLink: string,
    joinLink: string,
    telegramLink: string,
    discordLink: string,
    shareLink: string,
}

const TopNavBar = (props:TopNavBarProps) => {
    const { logoLink, joinLink, telegramLink, discordLink, shareLink } = props
    return (
        <div className="row p-5 pt-4">
            <div className="col-4">
                <a href={logoLink}>
                    <img src="../static/img/logo.png" alt="logo" />
                </a>
            </div>
            <div className="col-4 d-flex p-0">
                <button type="button" className="btn btn-nftua trnsp p-0 me-5" onClick={() => openRef(joinLink)}>Приєднатись до проєкту</button>
                <button type="button" className="btn btn-nftua trnsp pe-0" onClick={() => openRef(telegramLink)}>
                    <img src="../static/img/telega.png" alt="telegram link" />
                </button>
                <button type="button" className="btn btn-nftua trnsp" onClick={() => openRef(discordLink)}>
                    <img src="../static/img/discord.png" alt="discord link" />
                </button>
            </div>
            <div className="col-4 d-flex justify-content-end">
                <button type="button" className="btn btn-nftua px-5" onClick={() => openRef(shareLink)}>Поділитись історією <span className="mx-1">&#10095;</span></button>
            </div>
        </div>
    )
}
export default TopNavBar