import React from 'react';
import { Grid } from '@mui/material';
import featuresImg1 from '../../assets/images/icon-1.png';
import featuresImg2 from '../../assets/images/icon-2.png';
import featuresImg3 from '../../assets/images/icon-3.png';

const OurFeatures = () => {
    return (
        <Grid>
            <div className="container-fluid bg-light bg-icon my-5 py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxwidth: '500px' }}>
                        <h1 className="display-5 mb-3">Our Features</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={featuresImg3} alt="" />
                                <h4 className="mb-3">Natural Process</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={featuresImg3} alt="" />
                                <h4 className="mb-3">Organic Products</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={featuresImg3} alt="" />
                                    <h4 className="mb-3">Biologically Safe</h4>
                                    <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default OurFeatures