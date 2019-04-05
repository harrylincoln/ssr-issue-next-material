const indexStyles = (theme) => {
    const baseFeatContent = {
        ...theme.pallete.primary.generalSelectorClasses.featureList,
        [theme.breakpoints.up('md')]: {
            minHeight: '14rem',
        },
    };

    return {
        ...theme.pallete.primary.global,
        ...theme.pallete.primary.atomics,
        ...theme.pallete.primary.typography,
        ...theme.pallete.primary.generalSelectorClasses,

        root: {
            flexGrow: 1,
        },

        // pageContainer: {
        //     margin: '2rem auto',
        //     [theme.breakpoints.up('lg')]: {
        //         maxWidth: 1440,
        //     },
        // },

        homeBlocksContainer: {
            padding: '2.4rem 0',
            [theme.breakpoints.up('md')]: {
                padding: '4rem',
            },
            [theme.breakpoints.up('lg')]: {
                padding: '6rem 4rem',
            },
        },

        featBlocksOuterContainer: {
            margin: '2rem auto',
            [theme.breakpoints.up('md')]: {
                width: 968,
            },
            [theme.breakpoints.up('lg')]: {
                width: 1440,
            },
        },

        featBlocksContainer: {
            backgroundColor: theme.pallete.primary.colors.berlin,
            margin: '-6rem 0 0 0',
            [theme.breakpoints.up('md')]: {
                backgroundColor: 'white',
                margin: '-6rem 2rem 2rem 2rem',
            },
        },

        studentGiftContent: {
            ...theme.pallete.primary.typography.desc3,
            [theme.breakpoints.down('md')]: {
                fontSize: '18px',
            },
        },

        contentBlock: {
            padding: '1.2rem 3rem',
        },

        productFeatures: {
            ...baseFeatContent,
            padding: '2rem 0',
            borderTop: `1px solid ${theme.pallete.primary.colors.london}`,
        },

        productFeatures_Feat: {
            paddingBottom: '2rem',
            ...baseFeatContent,
        },

        // blocks
        productBlocks__featured: {
            order: 1,
            backgroundColor: theme.pallete.primary.colors.athens,
            padding: '2px',
            margin: '-10rem 1.5rem 1.5rem 1.5rem',
            [theme.breakpoints.up('md')]: {
                margin: '-10rem 0 0 0',
                order: 1,
            },
            [theme.breakpoints.up('lg')]: {
                order: 2,
            },
        },
        productBlocks__nonFeatured1: {
            width: '100%',
            height: 'fit-content',
            order: 2,
            borderBottom: `2px solid ${theme.pallete.primary.colors.london}`,
            [theme.breakpoints.up('md')]: {
                order: 1,
            },
            [theme.breakpoints.only('md')]: {
                marginTop: '2rem',
                width: '49%',
                marginRight: '1%',
                border: `2px solid ${theme.pallete.primary.colors.london}`,
            },
            [theme.breakpoints.up('lg')]: {
                width: '29.1666666667%',
                borderLeft: `2px solid ${theme.pallete.primary.colors.london}`,
                borderTop: `2px solid ${theme.pallete.primary.colors.london}`,
            },
        },
        productBlocks__nonFeatured2: {
            width: '100%',
            height: 'fit-content',
            order: 3,
            borderBottom: `2px solid ${theme.pallete.primary.colors.london}`,
            [theme.breakpoints.only('md')]: {
                marginTop: '2rem',
                width: '49%',
                marginLeft: '1%',
                border: `2px solid ${theme.pallete.primary.colors.london}`,
            },
            [theme.breakpoints.up('md')]: {
                order: 3,
            },
            [theme.breakpoints.up('lg')]: {
                width: '29.1666666667%',
                borderRight: `2px solid ${theme.pallete.primary.colors.london}`,
                borderTop: `2px solid ${theme.pallete.primary.colors.london}`,
            },
        },
        productBlocks__featured__image: {
            [theme.breakpoints.only('md')]: {
                paddingLeft: '3rem',
            },
        },
        productBlocks__featured__head: {
            fontSize: '1.4rem',
            color: 'white',
            margin: '1rem 2rem',
            textTransform: 'uppercase',
        },
        productBlocks__featured__content: {
            backgroundColor: 'white',
            marginTop: '-0.5rem',
            [theme.breakpoints.up('md')]: {
                marginTop: 0,
            },
        },
        productBlocks__expandable: {
            backgroundColor: 'white',
        },
        productBlocks__expandable__btn: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
        },

        // feat blocks
        unique: {
            padding: '1.2rem 3rem',
            textAlign: 'center',
        },

        // Quote
        quoteContainer: {
            color: 'white',
            padding: '5rem',
        },
        quoteItem: {
            [theme.breakpoints.down('md')]: {
                display: 'none',
                '&:first-of-type': {
                    display: 'flex',
                },
            },
        },
    };
};

export default indexStyles;
