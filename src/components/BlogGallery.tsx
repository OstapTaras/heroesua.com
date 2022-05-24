import React from 'react'

const BlogGallery = () => {
    return (
        <div className="slider-block">

        <div className="row">
            <div className="col-2"></div>
            <div className="col-10"><h2 className="main-heading">Відкрий для себе</h2></div>
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-8"><h2 className="">вікіпедію героїзму</h2></div>
            <div className="col-4"></div>
            <p className="col-8 my-5 main-subheading">Історії про самовідданих 
                з 24 лютого по сьогодення</p>
        </div>

        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
            <div className="carousel-inner">

              <div className="carousel-item active">
                  <div className="col-md-4">
                      <div className="card bg-dark text-white">
                        <img src="../static/img/Rectangle.png" className="card-img" alt="..." />
                        <div className="card-img-overlay card-main">
                          <h5 className="card-title std-text">"Привид" Києва знищив
                            49 російських літаків</h5>
                        </div>
                        <div className="card-img-overlay card-info">
                            <div className="card-img-overlay blur-bg"></div>
                            <h3 className="card-title">"Привид" Києва знищив
                                49 російських літаків</h3>
                        </div>
                        <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill std-text">
                            + NFT
                        </span>
                      </div>
                  </div>
              </div>

              <div className="carousel-item">
                <div className="col-md-4">
                    <div className="card bg-dark text-white">
                        <img src="../static/img/Rectangle2.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                          <h5 className="card-title std-text">Card title</h5>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-4">
                    <div className="card bg-dark text-white">
                        <img src="../static/img/Rectangle3.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                          <h5 className="card-title std-text">Card title</h5>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <button className="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon carousel-control-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon carousel-control-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>

    </div>
    )
}
export default BlogGallery