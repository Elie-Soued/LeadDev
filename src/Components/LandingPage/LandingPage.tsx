import React from 'react';
import './LandingPage.css';
import background from '../../Images/background.png';
import Section from '../Section/Section';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
    return (
        <div className='App  ' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <div className='d-flex flex-column justify-content-center pt-5 ' style={{ minHeight: '100vh' }}>
                <div className='pt-5'>
                    <div className='d-flex justify-content-start pt-5'>
                        <b className='leadDevTitle p-3 pb-0'>Lead Dev.</b>
                    </div>

                    <div className='d-flex justify-content-start'>
                        <b className='leadDevUnderTitle p-3 pt-0 '>
                            Leading the way in Web3.0 Development and Consultancy
                        </b>
                    </div>
                </div>

                {/** Section */}
                <div className='mt-5'>
                    <Section></Section>
                </div>

                {/** paragraph */}

                <div className='mt-5' style={{ textAlign: 'left' }}>
                    <b className='ourMission d-flex justify-content-start p-3'>Our Mission</b>

                    <b className='empowering d-flex justify-content-start p-3'>
                        Empowering Clarity & Accessibility in the world of blockchain.
                    </b>

                    <p
                        className='p-3'
                        style={{
                            textAlign: 'justify',
                        }}
                    >
                        <b>Lead Dev</b> is a professional team of experts in the fields of blockchain technology, smart
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

                <div className='mt-1'>
                    <p>
                        <b style={{ color: '#ef5dA8' }}>contactus@leaddev.com</b>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
