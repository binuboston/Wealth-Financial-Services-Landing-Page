export interface GoogleReview {
    name: string;
    rating: number;
    date: string;
    content: string;
}

export const googleReviews: GoogleReview[] = [
    {
        name: 'soumya babu',
        rating: 5,
        date: 'a month ago',
        content: 'Excellent service and very professional team. They explained all MF options clearly and guided me throughout the process. Highly recommended for anyone looking for genuine financial advice.',
    },
    {
        name: 'Jijith U',
        rating: 5,
        date: 'a month ago',
        content: 'I have been using their service for over than a year and they are helping me to build an SIP portfolio, they are really helpfull',
    },
    {
        name: 'Sreelakshmi K R',
        rating: 5,
        date: 'a month ago',
        content: 'Over a 2 years, they are handling my portfolio, very helpful and happy with their services.',
    },
];
