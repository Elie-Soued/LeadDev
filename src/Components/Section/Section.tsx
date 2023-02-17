import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sections } from '../../constants';
import sectionTitleImg from '../../Images/sectionTitle.png';
import sectionContentImg from '../../Images/sectionContent.png';

function Section(): JSX.Element {
    const buttonTitle = Object.keys(sections);
    const [sectionTitle, setSectionTile] = useState(`${sections['Product Dev'].title}`);
    const [sectionContent, setSectionContent] = useState(`${sections['Product Dev'].content}`);

    const changeSection = (title: string) => {
        setSectionTile(sections[title].title);
        setSectionContent(sections[title].content);
    };

    return (
        <div>
            <div>
                {buttonTitle.map((title, key) => {
                    return (
                        <button
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
            <div>
                <div
                    style={{
                        backgroundImage: `url(${sectionTitleImg})`,
                        backgroundSize: 'cover',
                    }}
                >
                    {sectionTitle}
                </div>
                <div
                    style={{
                        backgroundImage: `url(${sectionContentImg})`,
                        backgroundSize: 'cover',
                        color: 'black',
                        minHeight: '134px',
                    }}
                >
                    {sectionContent}
                </div>
            </div>
        </div>
    );
}

export default Section;
