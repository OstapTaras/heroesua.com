import React from 'react'

const CentralBlock = () => {
    return (
        <div className="central-block">

            <div className="row">
                <div className="col-2"></div>
                <div className="col-9">
                    <h2>Твій цифровий слід
                        в історії. Придбай Українську NFT </h2>
                </div>
            </div>

            <div className="row">
                <div className="col-4 position-relative">
                    <img src="../static/img/tracer.png" alt="" className="anim-img a" />
                </div>

                <div className="col-4">
                    <p className="lead"><b>Коли ти купуєш NFT</b></p>
                    <p>Кошти, зібрані в рамках цього проекту, будуть спрямовані на героїв/їхні родини чи офіційні організації, які підтримують військові чи гуманітарні потреби.</p>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-nftua buy-btn p-0">
                        <div className="row">
                            <div className="col-8">
                                <p>Купити NFT</p>
                                <img src="../static/img/open_sea.png" alt="" />
                            </div>
                            <div className="col-4 right-arrow">
                                <img src="../static/img/right-arrow.png" alt="" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 position-relative" style={{height: '800px'}}>
                    <img src="../static/img/ghost.png" alt="" className="anim-img b" />
                </div>
                <div className="col-4 position-relative">
                    <img src="../static/img/empty.png" alt="" className="anim-img c" />
                </div>
            </div>


        </div>
    )
}
export default CentralBlock