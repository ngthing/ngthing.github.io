import { Typography } from '@mui/material';
import { RouterLink } from '../components/Navigation';
import { pagesKey } from '../siteInfo';

export const mediaLink = {
    'Github': 'https://github.com/ngthing',
    'LinkedIn': 'https://www.linkedin.com/in/ngthinguyen',
    'EmailMe': 'mailto:thi@justthinguyen.com',
    'Email': 'thi@justthinguyen.com'
};

export const resumeLink = 'https://docs.google.com/document/d/1bYqGHmOM8DATNu2_mWSpdYh5Wyx66q35fQAcQBuUwxY/edit?usp=sharing';

export const fullName = 'Thi Nguyen'
export const mainSiteDescription = fullName + ' Software Engineer Personal Website'
export const Intro = () => (
    <Typography>
        <h2>Hi friend! ☀️</h2>
        <p>
            I’m Thi, by profession, a full-stack software engineer who spends most of the year in Northern Virginia/Washington, DC, USA.
            In July 2023, I decided to take a short break from my 9-5 job to work on projects that I've been wanting to do (like this website!).
        </p>
        <p>
            Sometimes, I love creating software to solve problems and improve daily efficiency for myself and others. I'm also passionate about learning and sharing my knowledge.
            Recently, I discovered my love for building React.js, TypeScript applications, and I'm working on a couple projects involving these two technologies, as well as writing tutorials to share what I learn.
        </p>

        <p>
            At other times, I enjoy being active and spending time outdoors, reading, traveling, and exploring new places.
            Besides work, I think life offers so many meaningful and exciting experiences! Therefore, if this site appears to be outdated, please do not think of me as a slacker (although you could be right sometimes...)!
            Because I might be somewhere enjoying a beautiful hike or bike ride, running, doing yoga, playing volleyball, reading a good book, practicing guitar, volunteering, or spending quality time with my family and friends.
            I really do take physical and mental health seriously, as well as work-life balance! 😁
        </p>

        <p>
            On this site, I hope you can find something useful about building web applications with TypeScript, React.js and programming in general in <RouterLink to={pagesKey['coding']['path']}>{pagesKey['coding']['name']}</RouterLink>.
            Occasionally, I will attempt to share about other topics that interest me in my <RouterLink to={pagesKey['blog']['path']}>{pagesKey['blog']['name']}</RouterLink>,
            such as active and frugal lifestyle, travel and travel hacking, climate change and conservation, or just random things I learn from building the life I love.
        </p>

        <p>
            Thanks for stopping by and I hope you have a beautiful day! 🌻
        </p>

        Sincerely,<br />
        {fullName}

    </Typography >
)

interface EducationHistory {
    degree: string, school: string, graduation: string, major: string, minor: string, more?: string
}
interface WorkHistory {
    position: string, company: string, duration: string, location?: string, details: string[]
}
interface Skills { [key: string]: string[] }

interface Resume {
    'SKILLS': Skills,
    'WORK HISTORY': WorkHistory[],
    'EDUCATION': EducationHistory[]
}
const ThiCollege = 'George Mason University'; const ThiCollegeLocation = 'Fairfax, VA';
export const ThiResumeContents: Resume = {
    'SKILLS': {
        'Front-end': ['TypeScript', 'React.js', 'JavaScript', 'HTML', 'CSS', 'ES6', 'Material UI', 'jQuery', 'Paper.js', 'Puppeteer'],
        'Back-end': ['Node.js', 'PHP', 'Java', 'Amazon DynamoDB', 'PostgreSQL', 'Firebase Realtime Database', 'RESTful APIs design']
    },
    'WORK HISTORY': [
        {
            position: 'Full Stack Software Engineer',
            company: 'Dulles Glass and Mirror',
            duration: 'August 2018 - July 2023',
            location: 'Manassas, VA',
            details: [
                "Designed, implemented, tested and shipped 50+ new features for both front-end (TypeScript, React.js, jQuery) and back-end (PHP, Java) of the glass manufacturing and customer relationship management applications used by the sales, operations, and fabrication departments at DGM.",
                "Developed the pricing algorithm to calculate product prices based on complex factors such as material, internal cutouts, exterior cuts, edgework, included hardware, type of products, different pricing modes for various users and customers.",
                "Managed the primary DynamoDB database with 20+ tables with key tables comprising 5000+ entries. Learned AWS services.",
                "Created a web scraping application using TypeScript and Puppeteer, allowing for the extraction of information from thousands of hardware products on vendor websites for integration into the company's database.",
                "Technical contributions led to increased sales and enabled the company to launch their franchise/partner program.",
                "Conducted direct and virtual training sessions and support for 10+ key users on a regular basis, gathering feedback on our applications and gaining insights into their business challenges and requests.",
                "Collaborated in reviewing customer requirements and designing software solutions and architectures with the direct manager and lead engineers.",
                "Frequently conducted code review, facilitated sprint planning meetings, technical meetings across 3 different teams to assess user's technical requirements, brainstorm solutions, and assign tasks to appropriate team members.",
                "Provided guidance and mentorship to three new engineers and three interns who joined the team during my time here."
            ]
        },
        {
            position: 'Software Engineer Intern',
            company: 'ScienceLogic',
            duration: 'January 2018 - May 2018',
            location: 'Reston, VA',
            details: [
                "Implemented 5+ new features that enhance the Search functionality within ScienceLogic's new UI such as adding search chips as users type in words in the search box, displaying results matching chips, and enabling chip editing, used React.js and Draft.js",
                "Implemented unit tests for the newly created features, utilizing Jest and Enzyme.",
                "Wrote comprehensive documentation detailing the functioning of the Search feature."
            ]

        },
        {
            position: 'Software Engineer Intern',
            company: 'ScienceLogic',
            duration: 'June 2017 - August 2017',
            location: 'Reston, VA',
            details: [
                "Developed \"Elmer Bot,\" a Slackbot designed to interface with the internal VM management tools.",
                "Wrote unit tests using the Jest testing framework for the new UI of ScienceLogic software.",
                "Participated in the Agile Software Development process, engaged in daily stand-ups, sprint planning sessions, and sprint reviews."
            ]
        },
        {
            position: 'Undergraduate Teaching Assistant',
            company: ThiCollege,
            duration: 'August 2016 - December 2017',
            location: ThiCollegeLocation,
            details: [
                "Provided support to 50+ students by answering their questions during office hours and through the Piazza forum.",
                "Offered constructive feedback while grading their assignments and group projects.",
                "Courses: CS 306 - Synthesis of Ethics and Law for the Computing Professional (Fall 2017), Computer Systems and Programming (C, x86 Assembly) (Spring 2017); Intro to Computer Programming (Python), Object-Oriented Programming (Java) (Fall 2016)"
            ]
        },
        {
            position: 'Undergraduate Researcher',
            company: ThiCollege,
            duration: 'June 2016 - August 2016',
            location: ThiCollegeLocation,
            details: [
                "Worked in a project funded by NSF: BIG DATA: Collaborative Research: Learning Data Analytics: Providing Actionable Insights to Increase CollegeStudent Success. Under supervision of Dr. Huzefa Rangwala.",
                "Designed and developed both front and back end for a degree planning web app using Django, Python, SQL,JQuery, AJAX. https://github.com/ngthing/SummerResearch2016-DegreePlannerWebApp"
            ]
        }
    ],
    'EDUCATION': [
        {
            degree: 'Bachelor of Science',
            school: ThiCollege,
            graduation: 'May 2018',
            major: 'Applied Computer Science concentration in Software Engineering',
            minor: 'Minor Economics',
            more: 'Magna Cum Laude'
        }
    ]
}