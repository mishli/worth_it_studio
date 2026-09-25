// Structured content for the home page sections (stats, marquee, gallery, steps),
// keyed by lang so both home pages render the same includes.
module.exports = {
	he: {
		trialCta: "בואי נקבע אימון ניסיון",
		statsLabel: "Worth It במספרים",
		stats: [
			{ value: 5, label: "מתאמנות לכל היותר בכל אימון" },
			{ value: 100, suffix: "%", label: "התאמה אישית, גם באימון קבוצתי" },
			{ value: 2010, from: 1990, label: "השנה שבה הספורט שינה לי את החיים" }
		],
		marquee: [
			"אימוני כוח",
			"אימונים פונקציונליים",
			"אימוני ליבה",
			"TRX",
			"קטלבלס",
			"פילאטיס",
			"קבוצות קטנות",
			"יחס אישי"
		],
		gallery: {
			title: "הצצה לסטודיו",
			subtitle: "אנרגיה טובה, הרבה צחוק ועבודה רצינית.",
			images: [
				{ src: "/img/content/worth-it-studio-group-training.jpg", alt: "אימון קבוצתי בסטודיו Worth It" },
				{ src: "/img/content/hadas-worth-it-training-roxy.jpeg", alt: "הדס עם מתאמנת בסטודיו" },
				{ src: "/img/content/hadas-worth-it-working-out.jpg", alt: "אימון כוח עם מוט" },
				{ src: "/img/content/studio-worth-it-2.jpg", alt: "הסטודיו של Worth It" },
				{ src: "/img/content/hadas-worth-it-training-or.JPG", alt: "אימון סקוואט עם קטלבל" }
			]
		},
		steps: {
			title: "איך מתחילות?",
			items: [
				{
					title: "מדברות",
					text: "שולחת לי הודעה בוואטסאפ ונכיר קצת. אשמח לענות על כל שאלה."
				},
				{
					title: "אימון ניסיון",
					text: "את מכירה אותנו, ואנחנו מכירות אותך, את המטרות שלך ואת היכולות שלך."
				},
				{
					title: "המקום שלך בסטודיו",
					text: "קובעות יחד ימים ושעות קבועים. הימים שלך. השעות שלך. אף אחת לא תיקח לך אותם."
				}
			]
		}
	},
	en: {
		trialCta: "Book a trial session",
		statsLabel: "Worth It in numbers",
		stats: [
			{ value: 5, label: "Trainees max per session" },
			{ value: 100, suffix: "%", label: "Personally tailored, even in a group" },
			{ value: 2010, from: 1990, label: "The year fitness changed my life" }
		],
		marquee: [
			"Strength training",
			"Functional training",
			"Core training",
			"TRX",
			"Kettlebells",
			"Pilates",
			"Small groups",
			"Personal attention"
		],
		gallery: {
			title: "Inside the studio",
			subtitle: "Good energy, lots of laughs, and serious work.",
			images: [
				{ src: "/img/content/worth-it-studio-group-training.jpg", alt: "Group training at Worth It Studio" },
				{ src: "/img/content/hadas-worth-it-training-roxy.jpeg", alt: "Hadas with a trainee at the studio" },
				{ src: "/img/content/hadas-worth-it-working-out.jpg", alt: "Barbell strength training" },
				{ src: "/img/content/studio-worth-it-2.jpg", alt: "The Worth It studio space" },
				{ src: "/img/content/hadas-worth-it-training-or.JPG", alt: "Kettlebell squat training" }
			]
		},
		steps: {
			title: "How do we start?",
			items: [
				{
					title: "Let's talk",
					text: "Send me a WhatsApp message and let's get to know each other. I'm happy to answer any question."
				},
				{
					title: "Trial session",
					text: "You get to know us, and we get to know you, your goals and your abilities."
				},
				{
					title: "Your spot at the studio",
					text: "Together we set fixed days and times. Your days. Your hours. No one takes them from you."
				}
			]
		}
	}
};
