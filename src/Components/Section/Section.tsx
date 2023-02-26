import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sections.css';
import { sections } from '../../constants';
import sectionTitleImg from '../../Images/sectionTitle.png';
import sectionContentImg from '../../Images/sectionContent.png';

function Section(): JSX.Element {
    const buttonTitle = Object.keys(sections);
    const [sectionTitle, setSectionTile] = useState(`${sections['Product Dev'].title}`);
    const [sectionContent, setSectionContent] = useState(`${sections['Product Dev'].content}`);
    const [activeButton, setActiveButton] = useState('Product Dev');

    const changeSection = (title: string) => {
        setActiveButton(title);
        setSectionTile(sections[title].title);
        setSectionContent(sections[title].content);
    };

    return (
        <div className='pt-5'>
            <div className='d-flex justify-content-center align-items-center mb-3'>
                {buttonTitle.map((title, key) => {
                    return (
                        <button
                            className={`m-1 ${activeButton === title ? 'buttonActive' : 'buttonInactive'}`}
                            key={key}
                            onClick={() => {
                                changeSection(title);
                            }}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>

            <div className=' d-flex flex-column align-items-center justify-content-center'>
                <div
                    className='mb-1'
                    style={{
                        backgroundImage: `url(${sectionTitleImg})`,
                        backgroundSize: 'cover',
                        fontSize: '20px',
                        minHeight: '42px',
                        fontWeight: '700',
                        fontFamily: " 'Montserrat', sans-serif;",
                        width: '95%',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        border: '2px solid #ef5dA8 ',
                    }}
                >
                    {sectionTitle}
                </div>
                <div
                    className='p-3'
                    style={{
                        backgroundImage: `url(${sectionContentImg})`,
                        backgroundSize: 'cover',
                        color: 'black',
                        minHeight: '207px',
                        fontSize: '19px',
                        textAlign: 'justify',
                        width: '95%',
                        borderBottomLeftRadius: '18px',
                        borderBottomRightRadius: '18px',
                        border: '2px solid #ef5dA8 ',
                    }}
                >
                    {sectionContent}
                </div>
            </div>
        </div>
    );
}

export default Section;
