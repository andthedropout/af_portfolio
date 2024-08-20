const data = [
	{
		slug: 'start',
		messages: [
			'Hey there, my name is Andrew, nice to meet you! Welcome to my personal website.',
			'How can I help you?',
		],
		answers: [
			{ label: 'Tell me about yourself.', link: '/chat/bio' },
			{ label: 'Show me your projects!', link: '/chat/portfolio' },
			{ label: 'How can I contact you?', link: '/chat/contact' },
		],
	},
	{
		slug: 'bio',
		messages: [
			"I am a pragmatic and solution-oriented Web Developer.",
			"Over the past 10 years, I have worked in eCommerce, SaaS, and digital marketing, in both startup and large corporate environments.",
			"Outside of my professional life, I enjoy travelling and expressing my creativity by playing the Saxophone/Guitar."],
		answers: [
			{ label: 'What technologies do you have experience with?', link: '/chat/tech' },
			{ label: "Show me some recent projects you've worked on.", link: '/chat/portfolio' },
		],
	},
	{
		slug: 'tech',
		messages: [
			"I've developed with everything from React, Next.js, and Gatsby - to building with WCAG-compliant native web components.",
			"Having built several high-volume eCommerce stores on Shopify, I have a deep understanding of how to drive conversions and track them.",
			"In my free time I am constantly pushing myself to stay ahead of the curve, experimenting with cutting edge AI and Blockchain tools."
		],
		answers: [
			{ label: 'Cool, show me some projects', link: '/chat/portfolio' },
		],
	},
	{
		slug: 'contact',
		messages: [
			'Feel free to send me an email at: metaphicker@gmail.com',
		],
		answers: [
			{
				label: "Show me your portfolio",
				link: '/chat/portfolio',
			},
		],
	},
	{
		slug: 'portfolio',
		messages: ['Wait just a moment, let me get my work history ...'],
	},
];

export default data;
