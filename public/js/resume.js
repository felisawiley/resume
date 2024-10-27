//console.log('Resume.js loaded');

//function testFunction() {
//    console.log('Test function executed');
//    alert('Test function executed');
//}

//document.addEventListener('DOMContentLoaded', function() {
//    console.log('DOM content loaded');
//    displayResume();
    
//    const downloadButton = document.getElementById('download-pdf');
//    if (downloadButton) {
//        console.log('Download button found');
//        downloadButton.addEventListener('click', testFunction);
//    } else {
//        console.error('Download button not found');
//    }
//});


const resumeData = {
    name: "FELISA WILEY",
    contact: {
        email: {
            text: "felisawiley@gmail.com",
            url: "mailto:felisawiley@gmail.com"
        },
        linkedin: {
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/felisawiley"
        },
        blog: {
            text: "Blog",
            url: "https://average-millennial.com"
        },
        github: {
            text: "Github",
            url: "https://github.com/felisawiley"
        }
    },
    education: [
        {
            degree: "BA Media & Communications and Philosophy",
            school: "Muhlenberg College"
        },
        {
            certification: "AWS Cloud Practitioner Certificate",
            date: "Awarded September 2023"
        }
    ],
    summary: "Results-driven Data Engineer with a track record of optimizing processes and infrastructure across sectors. Managed data integration affecting $60M+ monthly revenue, developed DBT models and implemented Snowflake solutions. Reduced manual work by 60%, automated 40+ monthly reports, and saved $250k quarterly. Skilled in translating complex data into actionable insights and maintaining client relationships. Seeking to leverage expertise in a dynamic environment to drive efficiency and financial savings.",
    experience: [
        {
            title: "Data Engineer E1",
            company: "ReUp - Remote",
            period: "Aug 2023 - Present",
            responsibilities: [
                "Contributed to the migration of complex database schemas from legacy systems to modern environments, ensuring data integrity and system functionality.",
                "Evaluated 20+ existing database schemas and their dependencies, identifying and addressing key migration challenges.",
                "Developed and implemented ETL processes to transform and integrate data into new database systems, providing detailed documentation of procedures."
            ]
        },
        {
            title: "Analytics Engineer Consultant",
            company: "Silver Creek Insights - Contract",
            period: "Aug 2023 - Oct 2024",
            responsibilities: [
                "Oversaw data integration processes for major partners accounting for $60M+ in monthly revenue, ensuring data integrity and compliance with government reporting requirements.",
                "Implemented data integration solutions that dramatically reduced weekly workload from 40 to 3 hours, significantly enhancing operational efficiency.",
                "Developed complex DBT models critical for accurate government filings, enabling the client to identify claimable subscribers and optimize monthly revenue reporting precisely."
            ]
        },
        {
            title: "Data Engineer E1 (Business Intelligence)",
            company: "Foursquare - Remote",
            period: "Sep 2021 - Aug 2023",
            responsibilities: [
                "Delivered data ingestions to BI data warehouse with special attention to data quality & minimizing reporting data gaps, saving Foursquare $250k+ a quarter.",
                "Expertly managed and optimized data integration with over 400 adtech partners.",
                "Established and maintained advanced ETL infrastructure."
            ]
        },
        {
            title: "Senior Account Manager",
            company: "Foursquare - Chicago, IL",
            period: "Apr 2018 - Sep 2021",
            responsibilities: [
                "Managed, optimized & QA'd monthly reporting processes for 40+ partners using Python and SQL to collect and clean semi- and structured data types and use Tableau to improve stakeholder dashboards.",
                "Worked closely with Sales Executives to maintain & grow agency-client relationships.",
                "Managed over 70 independent media agencies in Oklahoma, Texas & Arkansas & project managed client campaigns & goals."
            ]
        }
    ],
    skills: {
        technical: [
            "Programming Languages and Scripting: Python, SQL, JavaScript, HTML",
            "Data Engineering and Analytics: Data Engineering, ETL, Data Analysis, Data Wrangling, Data Documentation, QA, PostgreSQL",
            "Data Engineering and Management Tools: Airflow, Snowflake, CyberDuck, Paradime, Estuary",
            "Cloud Computing and Infrastructure: AWS, Google Cloud",
            "Data Analysis and Visualization Tools: Sigma Computing, Tableau",
            "Project Management and CRM Software: Salesforce, Jira",
            "Project and Client Management: Client Services, Sales, Project Management, Account Management",
            "Industry-Specific Technologies: Mobile Ad Technology (DSPs, DMPs, SSPs, AdTech"
        ],
        top: [
            "Data Engineering & ETL Processes",
            "SQL & Python Programming",
            "DBT Model Development",
            "Cloud Platforms (AWS, Google Cloud)",
            "Data Warehousing (Snowflake)",
            "Data Analysis & Visualization (Sigma Computing, Tableau)",
            "Process Optimization & Automation",
            "Client Relationship Management",
            "Project Management",
            "Data Quality Assurance"
        ]
    },
    projects: [
        {
            name: "PausePoint: Work-Life Balance Scheduler",
            date: "Launched in July 2024",
            technologies: "Libraries: dotenv, express, body-parser, path, google-auth-library, googleapis, moment-timezone, fs",
            description: [
                "Developed 'PausePoint', an innovative scheduler app that seamlessly integrates mindfulness practices into daily routines through Google Calendar synchronization.",
                "Implemented OAuth2 authentication and established secure, encrypted connections to ensure the protection and privacy of user data in compliance with high security standards.",
                "Utilized Node.js and PostgreSQL for sophisticated backend functionality, focusing on efficient data management and scalable storage solutions to optimize app performance.",
                "Designed and implemented intelligent algorithms to automatically identify free slots and schedule mindfulness reminders, enhancing the app's responsiveness and user experience."
            ]
        },
        // ... (other projects can be added here)
    ]
};
function displayResume() {
    const resumeContainer = document.getElementById('resume-container');
    resumeContainer.innerHTML = `
        <h2>${resumeData.name}</h2>
        <p>
            <a href="${resumeData.contact.email.url}" target="_blank">${resumeData.contact.email.text}</a> |
            <a href="${resumeData.contact.linkedin.url}" target="_blank">${resumeData.contact.linkedin.text}</a> |
            <a href="${resumeData.contact.blog.url}" target="_blank">${resumeData.contact.blog.text}</a> |
            <a href="${resumeData.contact.github.url}" target="_blank">${resumeData.contact.github.text}</a>
        </p>

        <h3>Education</h3>
        <ul>
            ${resumeData.education.map(edu => `
                <li>${edu.degree || edu.certification} - ${edu.school || edu.date}</li>
            `).join('')}
        </ul>

        <h3>Summary</h3>
        <p>${resumeData.summary}</p>

        <h3>Professional Experience</h3>
        ${resumeData.experience.map(exp => `
            <div>
                <h4>${exp.title}</h4>
                <p>${exp.company} | ${exp.period}</p>
                <ul>
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        `).join('')}

        <h3>Technical Skills</h3>
        <ul>
            ${resumeData.skills.technical.map(skill => `<li>${skill}</li>`).join('')}
        </ul>

        <h3>Top Skills</h3>
        <ul>
            ${resumeData.skills.top.map(skill => `<li>${skill}</li>`).join('')}
        </ul>

        <h3>Projects</h3>
        ${resumeData.projects.map(project => `
            <div>
                <h4>${project.name}</h4>
                <p>${project.date}</p>
                <p>${project.technologies}</p>
                <ul>
                    ${project.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
    `;
}

function generatePDF() {
    return new Promise((resolve, reject) => {
        const element = document.getElementById('resume-container');
        html2canvas(element).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf.jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

            // Add clickable links
            pdf.setFontSize(10); // Set a visible font size
            pdf.setTextColor(0, 0, 255); // Blue color for links

            // You'll need to adjust these coordinates based on your layout
            const linkY = 30; // Adjust this value as needed
            const linkSpacing = 5; // Space between links

            // Email link
            pdf.link(15, linkY, 100, 10, { url: resumeData.contact.email.url });

            // LinkedIn link
            pdf.link(15, linkY + linkSpacing, 40, 10, { url: resumeData.contact.linkedin.url });

            // Blog link
            pdf.link(60, linkY + linkSpacing, 30, 10, { url: resumeData.contact.blog.url });

            // GitHub link
            pdf.link(95, linkY + linkSpacing, 40, 10, { url: resumeData.contact.github.url });

            pdf.save('Felisa_Wiley_Resume.pdf');
            resolve();
        }).catch(error => {
            console.error('Error in html2canvas:', error);
            reject(error);
        });
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    displayResume();
    
    const downloadButton = document.getElementById('download-pdf');
    if (downloadButton) {
        downloadButton.addEventListener('click', async function(e) {
            e.preventDefault();
            downloadButton.disabled = true;
            downloadButton.textContent = 'Generating PDF...';
            
            try {
                await generatePDF();
                console.log('PDF generated successfully');
            } catch (error) {
                console.error('Error generating PDF:', error);
            } finally {
                downloadButton.disabled = false;
                downloadButton.textContent = 'Download PDF';
            }
        });
    }
});