type Section = {
    title: string;
    content: string;
};

const sections: Record<string, Section> = {
    'Product Dev': {
        title: 'Product Development',
        content:
            'We provide innovative, custom-made Blockchain solutions for a variety of applications, ranging from Non-Fungible Token (NFT) collections to gaming experiences in the Metaverse.',
    },
    'Smart Contract': {
        title: 'Smart-Contract Development',
        content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores neque minima explicabo delectus ratione ullam incidunt facilis ea ducimus suscipit? Totam nisi dolores magnam alias!',
    },
    Consultancy: {
        title: 'Consultancy',
        content:
            'We offer consulting services on blockchain technology, tokenomics, decentralized finance, and NFTs. We help businesses use these technologies to achieve their goals.',
    },
    'Nft & Meta': {
        title: "The Metaverse and NFT's",
        content:
            'We Help clients create perfect NFTs to represent their brand and Provide guidance on how to best use the Metaverse and NFTs for brand promotion.',
    },
};

export { sections };
