const content = {
    product: {
        'Test 1': {
            title: 'Digital only',
            description:
                '',
            features: [
                'Weekly classic digital edition app',
                'Espresso, our morning briefing',
            ],
        },
        'Test 2': {
            title: 'Print only',
            description:
                '',
            features: [
                'Weekly print edition',
                'Espresso, our morning briefing',
            ],
        },
        'Test 3': {
            title: 'Print + Digital',
            description: 'Subheadline (sub head)',
            features: [
                'Weekly print edition',
                'Weekly classic digital edition app',
                'Espresso, our morning briefing',
            ],
        },
    },
};

export const faqSplash = [
    {
        title: 'You cannot open this after refresh, but you can after navigating back to this page from another',
        content:
            "This is because ssr of classNames does not work",
    },
];

export const faqBuilder = [
    {
        title: 'This will open because it has a jss classname',
        content:
            "See! Now navigate back to first page with the browser back button, and you will see the homepage accordian will have a jss classname",
    }
];

export const studentGift = [
    {
        title: '',
        icon: 'gradHat',
        button: 'See student options',
        offerTypeKey: 'STUDENT',
    },
    {
        title: ``,
        icon: 'present',
        button: 'See gift options',
        offerTypeKey: 'GIFT',
    },
];

export const unique = [
    {
        title: `If it matters in our world <br />we cover it - and cover it well.`,
        icon: 'pen',
    },
    {
        title: `Read by the world&#39;s <br />political and business <br />leaders`,
        icon: 'flag',
    },
    {
        title: `Available in the format<br /> that suits your life, where <br />ever you are.`,
        icon: 'clock',
    },
];

export const quotes = [
    {
        quote:
            "I've always been more interested in the future than in the past.",
        icon: 'econLetterE',
        author: 'Grace Hopper',
        role: 'Computer Scientist and all-round OG',
    },
    {
        quote:
            "I've always been more interested in the future than in the past.",
        icon: 'econLetterE',
        author: 'Grace Hopper',
        role: 'Computer Scientist and all-round OG',
    },
    {
        quote:
            "I've always been more interested in the future than in the past.",
        icon: 'econLetterE',
        author: 'Grace Hopper',
        role: 'Computer Scientist and all-round OG',
    },
];

export default content;
