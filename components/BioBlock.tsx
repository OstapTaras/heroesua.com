import React from 'react'
import {openRef} from '../helpers'

interface BioBlockProps {
    shareLink: string,
}

const BioBlock = (props:BioBlockProps) => {
    const { shareLink } = props
    return (
        <div className="bio-block">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <h2>
                        Біографія України викарбована героями
                    </h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-5 offset-4">
                    <span className="lead">Якщо знаєте історії людей, які заслуговують бути
                        у списку Українських Героїв, напишіть нам</span>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-4 offset-2">
                    <button type="button" className="btn btn-nftua buy-btn px-5 lead" onClick={() => openRef(shareLink)}>
                        <span className="lead"><strong>Поділитись історією</strong></span> 
                        <span className="mx-1 lead">&#10095;</span>
                    </button>
                </div>
                <div className="col-5">
                    <img src="../static/img/eu-m.png" alt="" />
                </div>
            </div>

        </div>
    )
}
export default BioBlock