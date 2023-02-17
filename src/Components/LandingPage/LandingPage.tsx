import React from 'react';
import logo from '../../logo.svg';
import './LandingPage.css';
import background from '../../Images/background.png';
import Section from '../Section/Section';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
    return (
        <div className='App  ' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <div className='d-flex flex-column justify-content-center pt-5 ' style={{ minHeight: '100vh' }}>
                <div>
                    <div>
                        <b className='leadDevTitle'>Lead Dev.</b>
                    </div>

                    <div>
                        <b className='leadDevUnderTitle'>Leading the way in Web3.0 Development and Consultancy</b>
                    </div>
                </div>

                {/** Section */}
                <div className='mt-5'>
                    <Section></Section>
                </div>

                {/** paragraph */}

                <div className='mt-5'>
                    <b className='ourMission'>Our Mission</b>
                    <br></br>
                    <b className='empowering'>Empowering Clarity & Accessibility in the world of blockchain.</b>
                    <br></br>
                    <br></br>
                    <p>
                        <b>LeadDev</b> is a professional team of experts in the fields of blockchain technology, smart
                        contracts, and NFTs. Our expertise in product development, smart contract creation, and
                        blockchain consulting positions us to deliver customized solutions that meet the unique needs of
                        each client. We understand the complexities of blockchain technology and are dedicated to
                        educating our clients on how to effectively leverage these technologies for their business
                        needs. In addition, our specialization in NFT creation enables us to support our clients in
                        creating powerful, brand-representing assets. At Lead Dev, we are committed to delivering
                        unparalleled service and delivering the optimal solution for our clients' blockchain
                        requirements.
                    </p>
                </div>

                {/** Get in touch */}

                <div className='mt-5'>
                    <b className='ourMission'>Contact us</b>
                    <br></br>
                    <p>PilexLaflex@filsdeouf.com</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
