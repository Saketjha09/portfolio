const logotext = "JAY";
const meta = {
    title: "Jay Bharuka",
    description: "I'm Jay Bharuka - Cloud & Full Stack Developer, Computer Science undergraduate specializing in Cloud Computing",
};

const introdata = {
    title: "I'm Jay Bharuka",
    animated: {
        first: "I code.",
        second: "I build apps.",
        third: "I solve problems.",
    },
    description: "Computer Science student specializing in Cloud Computing and Full Stack Development. I love creating innovative solutions using modern technologies like React, AWS, and Java. Currently pursuing B.Tech at SRM Institute of Science and Technology, I'm always eager to learn and tackle new challenges in the tech world.",
    your_img_url: "",
    resume_link: "https://docs.google.com/document/d/14108q2aGn_tcMH8KUkVODR9bZ2XBW6Fr/edit?usp=sharing&ouid=109851686402163957296&rtpof=true&sd=true",
};

const dataabout = {
    title: "About me",
    aboutme: "I'm pursuing B.Tech in Computer Science Engineering with specialization in Cloud Computing at SRM Institute of Science and Technology (expected May 2027). I'm passionate about full-stack development, system design, and cloud architecture. My strengths include system design, data structures & algorithms, and building scalable full-stack applications. I enjoy exploring modern technologies in the cloud computing space and solving complex problems through code.",
};

const worktimeline = [{
        jobtitle: "Intern",
        where: "360 One Wealth, Mumbai",
        date: "June 2024",
    },
    {
        jobtitle: "Computer Science Student",
        where: "SRM Institute of Science and Technology",
        date: "2023-2027",
    },
    
];

const skills = [{
        name: "Java",
        value: 70,
    },
    {
        name: "Python",
        value: 50,
    },
    {
        name: "React.js",
        value: 90,
    },
    {
        name: "JavaScript",
        value: 75,
    },
    {
        name: "C++",
        value: 80,
    },
    {
        name: "HTML/CSS",
        value: 90,
    },
    {
        name: "Tailwind CSS",
        value: 70,
    },
    {
        name: "MySQL",
        value: 80,
    },
    {
        name: "Firebase",
        value: 85,
    },
    {
        name: "AWS",
        value: 40,
    },
    
    {
        name: "Git/GitHub",
        value: 85,
    },
];

const certifications = [{
        title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
        issuer: "Oracle",
        link:"https://drive.google.com/file/d/1627F6IyzEfpojkMKTDX5ytPGVdhJOHFU/view",
        date: "2024",
        description: "Comprehensive certification covering OCI core services, networking, storage, compute, and security fundamentals.",
    },
];

const services = [{
        title: "Full Stack Development",
        description: "Building end-to-end web applications using React.js, Node.js, and modern databases. Expertise in creating responsive and scalable solutions with strong focus on system design and user experience.",
    },
    {
        title: "Cloud Architecture",
        description: "Designing and implementing cloud solutions using AWS services like Lambda, S3, SES, and SNS. Serverless architecture and cloud deployment with focus on scalability and cost optimization.",
    },
    {
        title: "Financial Analysis & Investment Planning",
        description: "Developed solid foundation in financial modeling, wealth management, and investment planning. Experience with equity markets, portfolio diversification, and tax optimization strategies. Skilled in data-driven financial analysis and market trend reporting using Excel and analytics tools.",
    },
];

const dataportfolio = [{
        img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
        description: "Hospital Patient Management System – React, Firebase, Gemini API integration for managing patients, prescriptions, and follow-ups",
        link: "https://github.com/jaybharuka/hpms",
    },
    {
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        description: "Get Lost – Smart Travel Planner – Java Swing application with MySQL database for travel planning with preferences and history",
        link: "https://github.com/jaybharuka/travel-planner",
    },
    {
        img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        description: "Carpool Booking System – MySQL-based DBMS project with normalized schema, joins, and triggers for ride sharing",
        link: "https://github.com/jaybharuka/carpooleasy",
    },
    {
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        description: "Serverless Sending App – AWS Lambda, S3, SES, SNS email/SMS app triggered via API Gateway and Step Functions",
        link: "https://github.com/jaybharuka/cloud-serverless",
    },
    {
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        description: "Route Finder & NLP Analytics App – React, Next.js, TypeScript with pathfinding algorithms and NLP sentiment analysis",
        link: "https://v0-modern-route-finder-app.vercel.app/",
    },
    {
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        description: "Portfolio Website – Modern React portfolio with Tailwind CSS, responsive design, and smooth animations",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "jaybharuka7@gmail.com",
    YOUR_FONE: "+91-9607425621",
    description: "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel free to reach out!",
    // After setting up EmailJS account, replace these with your actual values:
    // 1. Go to https://www.emailjs.com/ and create account
    // 2. Add email service (Gmail/Outlook) and copy Service ID
    // 3. Create email template and copy Template ID  
    // 4. Get Public Key from Account settings
    YOUR_SERVICE_ID: "service_2y5s68o", // Replace with your EmailJS Service ID
    YOUR_TEMPLATE_ID: "template_f1kbzsn", // Replace with your EmailJS Template ID
    YOUR_USER_ID: "CGnBYKXMgQQnfSgor", // Replace with your EmailJS Public Key
};

const socialprofils = {
    github: "https://github.com/jaybharuka",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/jaybharuka",
    twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    certifications,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
