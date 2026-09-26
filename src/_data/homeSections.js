// Structured content for the home page sections (hero, manifesto, stats, marquee, gallery, steps),
// keyed by lang so both home pages render the same includes.
module.exports = {
	he: {
		trialCta: "בואי נקבע אימון ניסיון",
		hero: {
			eyebrow: "סטודיו בוטיק לאימוני כוח · תל אביב",
			lines: ["ברוכה הבאה", "לבית החדש שלך", "לכושר ולאושר בתל אביב!"],
			mark: 1,
			imageAlt: "מתאמנות Worth It עם הדס בסטודיו",
			studioLink: { url: "/the-studio/", label: "בואי להכיר את הסטודיו" },
			facts: [
				{ value: "5", label: "מתאמנות לכל היותר באימון" },
				{ value: "100%", label: "התאמה אישית, גם בקבוצה" },
				{ value: "✦", label: "ימים ושעות קבועים, המקום שלך שמור" }
			]
		},
		manifesto: {
			text: "אני מבטיחה לא לוותר לך, ולא לתת לך לוותר לעצמך, עד שנשיג יחד את המטרות שלך.",
			sign: "הדס משלי ויספלנר"
		},
		galleryHint: "גללי להצצה",
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
				{ src: "/img/content/worth-it-studio-group-session.jpg", alt: "אימון קבוצתי בסטודיו Worth It" },
				{ src: "/img/content/worth-it-studio-team-selfie.jpg", alt: "הדס ומתאמנות מחייכות בסטודיו" },
				{ src: "/img/content/worth-it-studio-kettlebell-swings.jpg", alt: "מתאמנות בתרגיל סווינג עם קטלבל" },
				{ src: "/img/content/worth-it-studio-plank.jpg", alt: "מתאמנת בפלאנק על מזרן" },
				{ src: "/img/content/worth-it-studio-mom-and-baby.jpg", alt: "אימון אמא ותינוק בסטודיו" },
				{ src: "/img/content/worth-it-studio-kettlebell.jpg", alt: "מתאמנת בתרגיל כוח עם קטלבל" }
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
		hero: {
			eyebrow: "Boutique strength training studio · Tel Aviv",
			lines: ["Your new home", "for fitness & happiness", "in Tel Aviv!"],
			mark: 0,
			imageAlt: "Worth It trainees with Hadas at the studio",
			studioLink: { url: "/en/the-studio/", label: "Get to know the studio" },
			facts: [
				{ value: "5", label: "Trainees max per session" },
				{ value: "100%", label: "Personally tailored, even in a group" },
				{ value: "✦", label: "Fixed days & times, your spot is saved" }
			]
		},
		manifesto: {
			text: "I promise not to give up on you, and not to let you give up on yourself, until we reach your goals together.",
			sign: "Hadas Mishli Weisflener"
		},
		galleryHint: "Scroll for a peek",
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
				{ src: "/img/content/worth-it-studio-group-session.jpg", alt: "Group training at Worth It Studio" },
				{ src: "/img/content/worth-it-studio-team-selfie.jpg", alt: "Hadas and trainees smiling at the studio" },
				{ src: "/img/content/worth-it-studio-kettlebell-swings.jpg", alt: "Trainees doing kettlebell swings" },
				{ src: "/img/content/worth-it-studio-plank.jpg", alt: "A trainee holding a plank on the mat" },
				{ src: "/img/content/worth-it-studio-mom-and-baby.jpg", alt: "A mom-and-baby workout at the studio" },
				{ src: "/img/content/worth-it-studio-kettlebell.jpg", alt: "A trainee doing a kettlebell strength exercise" }
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
