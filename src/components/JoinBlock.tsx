import React from 'react'
import { openRef } from '../helpers'

interface JoinBlockProps {
    joinLink: string,
    discordLink: string,
    telegramLink: string,
}

const JoinBlock = (props:JoinBlockProps) => {
    const { joinLink, discordLink, telegramLink } = props;
    return (
        <div className='join-block'>
            <div className='row'>
                <div className='col-8 offset-2'>
                    <h2>Долучайся до
                        місії та стань членом
                        команди як:
                    </h2>

                </div>
            </div>

            <div className='row positions-row my-5'>
                <div className='col-4 offset-4'>
                    <div className='row std-text lead'>
                        <div className='col-4'>Художник</div>
                        <div className='col-4'>Дизайнер</div>
                        <div className='col-4'>Whoever</div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-3 offset-2'>
                    <button type="button" className="btn btn-nftua buy-btn px-5 lead" onClick={() => openRef(joinLink)}>
                        <span className="lead"><strong>Приєднатись</strong></span> 
                        <span className="mx-1 lead">&#10095;</span>
                    </button>
                </div>
                <div className='col-7 gray-bg'>
                    <div className='row'>
                        <div className='col-6'>
                            <button type="button" className="btn btn-nftua buy-btn px-5 lead gray-bg" onClick={() => openRef(discordLink)}>
                                <span className="lead mx-4"><strong>Наш Discord</strong></span> 
                                <img src="../static/img/discord.png" alt=""  className='social-icon'/>  
                            </button>
                        </div>
                        <div className='col-6'>
                        <button type="button" className="btn btn-nftua buy-btn px-5 lead gray-bg" onClick={() => openRef(telegramLink)}>
                                <span className="lead mx-4"><strong>Наш Telegram</strong></span> 
                                <img src="../static/img/telega.png" alt=""  className='social-icon'/>  
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default JoinBlock;