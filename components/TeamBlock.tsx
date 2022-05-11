import React from 'react'

const TeamBlock = () => {
    return (
        <div className="team-block">
            <div className="row mt-5">
                <div className="col-6 offset-2">
                    <h2>Про команду</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 offset-4">
                    <p>Ми - команда добровольців, які хочуть зберегти живу українську історію на довгий час, та показати героїв країни в час війни. Ми присвячуємо час проекту на добровольчій основі, та не отримуємо прибутків</p>
                </div>
            </div>

            <div id="carouselExampleControlsNoTouchingTeam" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">

                  <div className="carousel-item active">
                      <div className="col-md-3">
                        <div className="card bg-dark text-white team-slide">
                            <div className="card-img-overlay">
                                <img src="../static/img/team1.png" alt="" />
                            </div>
                            <div className="card-img-overlay hover">
                                <img src="../static/img/team2.png" alt="" />
                            </div>
                            <h4 className="card-title">Director</h4>
                            <h5 className="card-title std-text">Mr. Artist</h5>
                        </div>
                      </div>
                  </div>

                  <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card bg-dark text-white team-slide">
                            <div className="card-img-overlay">
                                <img src="../static/img/team1.png" alt="" />
                            </div>
                            <div className="card-img-overlay hover">
                                <img src="../static/img/team2.png" alt="" />
                            </div>
                            <h4 className="card-title">Director 2</h4>
                            <h5 className="card-title std-text">Mr. Artist</h5>
                        </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card bg-dark text-white team-slide">
                            <div className="card-img-overlay">
                                <img src="../static/img/team1.png" alt="" />
                            </div>
                            <div className="card-img-overlay hover">
                                <img src="../static/img/team2.png" alt="" />
                            </div>
                            <h4 className="card-title">Director 3</h4>
                            <h5 className="card-title std-text">Mr. Artist</h5>
                        </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card bg-dark text-white team-slide">
                            <div className="card-img-overlay">
                                <img src="../static/img/team1.png" alt="" />
                            </div>
                            <div className="card-img-overlay hover">
                                <img src="../static/img/team2.png" alt="" />
                            </div>
                            <h4 className="card-title">Director 4</h4>
                            <h5 className="card-title std-text">Mr. Artist</h5>
                        </div>
                      </div>
                  </div>
                </div>
                <button className="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleControlsNoTouchingTeam" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon carousel-control-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleControlsNoTouchingTeam" data-bs-slide="next">
                  <span className="carousel-control-next-icon carousel-control-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}
export default TeamBlock