import React from 'react';
import logo from '../../logo.svg';
import './LandingPage.css';
import background from '../../Images/background.png';
import Section from '../Section/Section';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
    return (
        <div
            className='App  '
            style={{ border: '4px dashed red', backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
        >
            <div
                className='d-flex flex-column justify-content-around '
                style={{ border: '4px dashed green', height: '100vh' }}
            >
                {/** Title */}

                <div style={{ border: '4px dashed white' }}>
                    <div>
                        <b>Lead Dev.</b>
                    </div>

                    <div>
                        <b>Leading the way in Web3.0 Development and Consultancy</b>
                    </div>
                </div>

                {/** Section */}
                <div style={{ border: '4px dashed white' }}>
                    <Section></Section>
                </div>

                {/** paragraph */}

                <div style={{ border: '4px dashed white' }}>
                    <p>
                        LeadDev is a professional team of experts in the fields of blockchain technology, smart
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
            </div>
        </div>
    );
}

export default LandingPage;
