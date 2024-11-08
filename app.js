// Show/Hide Back to Top Button
window.onscroll = function () {
	let backToTopBtn = document.getElementById("backToTopBtn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		backToTopBtn.style.display = "block";
	} else {
		backToTopBtn.style.display = "none";
	}
};

// Scroll to Top
function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Employment data 
const jobs = [
	// Personal Projects
	{
		title: "Full Stack Web Developer at Personal Projects",
		duration: "January 2019 — Present",
		websites: [
			"https://maktabatulabrar.com",
			"https://rashedmamun.com",
			"https://www.willisteoproperties.com",
			"https://prptoronto.ca",
			"https://keshascleaningservices.com",
			"https://www.coreconstructs.com",
			"https://dhibangladesh.com",
			"https://dopementor.com",
			"https://dmishowroom.com",
			"https://niloyitinstitute.com",
			"https://inalyzeproperty.com",
			"https://mhdubaifashion.com",
			"https://www.glucofort-canada.ca",
			"https://jesminjuthi.github.io/big-project/",
			"https://dentist-medico-service.web.app/",
			"https://food-delivery-a4f61.web.app/",
			"http://learnera.academy/",
			"https://sarkaritinstittue.com",
			"https://teeency.com",
			"https://satkhiraonlineshopping.com",
			"https://nhdgraphic.com",
			"https://ctwpteseandapparel.com",
			"https://graphicdabr.com",
		],
		responsibilities: [
			"Independently designed, developed, and deployed multiple websites.",
			"Utilized a variety of technologies to deliver responsive, user-friendly sites.",
			"Engaged in all stages of development from concept to deployment.",
			"Managed hosting and maintenance of deployed projects.",
		],
	},
	// WP Org
	{
		title: "Plugin Developer at WordPress.org",
		duration: "February, 2023 — Present",
		plugins: ["https://wordpress.org/plugins/bangla-number-converter/"],
		responsibilities: [
			"Regularly update the plugin to ensure compatibility with the latest version of WordPress and maintain its functionality.",
		],
	},
	// Qbiz
	{
		title: "Web Developer at Qbiz",
		duration: "March, 2024 — Present",
		websites: [
			"https://www.xpandage.com/",
			"https://dev.askken.io/",
			"https://texasgiantinsurance.com/jobs/",
			"https://insurmypolicy.com/smartlink/sam",
			"Chatbot",
		],
		responsibilities: [
			"Build custom WordPress, Shopify, and Coded websites.",
			"Use responsive design for a good experience on all devices.",
			"Maintain websites with updates, backups, and security fixes.",
			"Collaborate with clients to understand their needs and offer tailored solutions.",
			"Improve website speed by optimizing code and fixing problems.",
		],
	},
	// JSBD
	{
		title: "Elementor Expert at JS Bangladesh",
		duration: "January 2021 — Present",
		websites: ["https://jsbangladesh.com", "https://jsbangladesh.com/dsa/"],
		responsibilities: [
			"Provided guidance and mentorship to aspiring web developers.",
			"Developed visually appealing and user-friendly website designs.",
			"Implemented effective marketing strategies to promote the platform.",
			"Handled end-to-end web development tasks efficiently.",
			"Collaborated closely with cross-functional teams.",
		],
	},
	// Zenscape
	{
		title: "WordPress Developer at Zenscape Marketing",
		duration: "February 2021 — May 2023",
		websites: [
			"https://zenscapemarketing.com/",
			"https://eqmrealty.com/",
			"https://kingcs.com/",
			"https://thirdeyecrystal.com/",
			"https://elysianart.shop/",
			"loomhomes",
			"mazenaziza",
			"high-vibrant",
		],
		responsibilities: [
			"Develop custom WordPress themes and plugins.",
			"Ensure website functionality and responsiveness.",
			"Conducting website maintenance, including updates, backups, and security enhancements",
			"Collaborating with clients to understand their requirements and deliver tailored solutions",
			"Optimizing website performance through code optimization and troubleshooting issues",
		],
	},
	// Sylvex
	{
		title: "Web Developer at Sylvex Innovation",
		duration: "February, 2023 — February, 2024",
		websites: [
			"https://australianreformingcatholics.au/",
			"https://robocook.com.au/",
			"https://sylvex.com.au/",
			"http://cherryburst.com.au/",
			"https://eastandwestpaitingservices.com.au/",
			"https://desibazaar.com.au/",
			"https://www.ricerice.au/",
		],
		responsibilities: [
			"Develop and customize WordPress themes and plugins to meet project requirements.",
			"Implement and maintain responsive design principles to ensure optimal user experience across devices.",
			"Collaborate with design and content teams to create visually appealing and engaging websites.",
			"Conduct regular site performance monitoring, optimization, and troubleshooting to ensure smooth functioning.",
			"Stay updated on industry trends and best practices to suggest and implement innovative solutions for clients' websites.",
		],
	},
	// TemplateMonster
	{
		title: "Elementor Expert - WordPress at TemplateMonster",
		duration: "November, 2021 — Present",
		websites: ["https://seogram.jesminjuthi.com/"],
		responsibilities: [
			"Designing and developing custom widgets for Elementor to enhance the theme's functionality.",
			"Ensuring compatibility with Elementor updates and maintaining the widgets to meet current standards.",
			"Providing timely support and updates to users who have purchased the theme on TemplateMonster.",
			"Conducting quality assurance testing to identify and fix any bugs or issues in the widgets.",
			"Collaborating with the Elementor community to gather feedback and continuously improve the widgets for better user experience.",
		],
	},
	// GPIT
	{
		title: "Full Stack Web Developer at GPIT",
		duration: "June, 2021 — October, 2024",
		websites: [
			"https://zafincorp.com/",
			"https://homegates.zafincorp.com/",
			"https://wroughtirongate.co.za/",
		],
		responsibilities: [
			"Designing and developing custom WordPress themes and plugins to meet client requirements.",
			"Implementing responsive web design principles to ensure the website functions flawlessly across all devices.",
			"Conducting regular maintenance and updates to WordPress websites to ensure optimal performance and security.",
			"Collaborating with clients to understand their needs and provide technical support and solutions.",
			"Testing and debugging websites to ensure they meet quality standards and deliver a seamless user experience.",
		],
	},
	// Niloy IT
	{
		title: "Web Design Mentor at Niloy IT Institute",
		duration: "December, 2023 — November 2024",
		responsibilities: [
			"Providing guidance and mentorship to students in web design principles and best practices.",
			"Developing curriculum and lesson plans to ensure comprehensive coverage of web design concepts.",
			"Conducting workshops and practical sessions to help students enhance their design skills.",
			"Offering constructive feedback on students' projects and assignments to support their learning and growth.",
			"Keeping up-to-date with the latest trends and technologies in web design to provide relevant and valuable insights to students.",
		],
	},
	// Three Phrase
	{
		title: "Frontend Mentor at Three Phrase Academy",
		duration: "August, 2021 — December, 2023",
		responsibilities: [
			"Guiding students in learning frontend development concepts and technologies.",
			"Providing feedback on students' projects and assignments to help them improve.",
			"Conducting one-on-one or group mentoring sessions to address students' questions and concerns.",
			"Creating educational materials and resources to supplement the learning process.",
			"Collaborating with other mentors and staff to ensure a cohesive learning experience for students.",
		],
	},
	// GDLC
	{
		title: "Front-End Mentor at Graphics Design Live Class",
		duration: "December, 2021 — December, 2022",
		responsibilities: [
			"Collaborating with designers to understand project requirements and translate design concepts into interactive user interfaces.",
			"Writing clean, efficient, and maintainable code using HTML, CSS, and JavaScript to implement designs accurately.",
			"Ensuring cross-browser and cross-device compatibility of the front-end code to deliver a seamless user experience.",
			"Conducting code reviews, testing, and debugging to identify and fix issues in the front-end code base.",
			"Staying updated on industry trends and best practices in front-end development to enhance design implementation and user interaction.",
		],
	},
	// SSB
	{
		title: "Web Design Support Mentor at Shikhbe Sobai",
		duration: "January, 2021 — May, 2021",
		responsibilities: [
			"Providing guidance and support to students in learning web design concepts",
			"Offering feedback on students' design projects to help them improve their skills",
			"Assisting students in troubleshooting technical issues related to web design",
			"Conducting workshops and training sessions to enhance students' knowledge in web design",
			"Collaborating with other mentors to create a comprehensive learning experience for students",
		],
	},
];

// job cards
function renderJobs(jobs) {
	const jobContainer = document.getElementById("jobContainer");
	jobContainer.innerHTML = "";

	jobs.forEach((job) => {
		const jobCard = document.createElement("div");
		jobCard.classList.add("job-card", "additional-class");

		const resourceLabel = job.websites
			? "Websites"
			: job.plugins
			? "Plugins"
			: "";
		const resources = job.websites || job.plugins || [];

		const resourceSection =
			resources.length > 0
				? `<div><strong>${resourceLabel}:</strong><div class="website-links">${resources
						.map((item) => `<a href="${item}" target="_blank">${item}</a>`)
						.join("<br>")}</div></div>`
				: "";

		jobCard.innerHTML = `
            <h3><i class="fas fa-briefcase"></i> ${job.title}</h3>
            <div class="job-details">${job.duration}</div>
            ${resourceSection} <!-- Only added if resourceSection is not empty -->
            <div class="responsibilities"><strong>Responsibilities:</strong>
                <ul>
                    ${job.responsibilities
											.map((task) => `<li>${task}</li>`)
											.join("")}
                </ul>
            </div>
        `;

		jobContainer.appendChild(jobCard);
	});
}

renderJobs(jobs);
