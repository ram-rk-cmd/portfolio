// /data.js

(function() {
    "use strict";

    // --- DATA for PROJECTS & ACHIEVEMENTS ---

    const projects = [
        {
            title: "Sign to Text",
            description: "An assistive application that translates sign language gestures into real-time text, helping bridge communication between deaf individuals and non-signers.",
            imageUrl: "images/signtotext.jpg", // Replace with an actual image path
            features: ["Real-time Translation", "High Accuracy Model", "Accessible UI", "OpenCV"],
            link: "https://github.com/ram-rk-cmd/sign_to_text"
        },
        {
            title: "Audio to Braille",
            description: "A specialized tool that converts spoken audio into Braille output, empowering visually impaired users to access auditory content through tactile feedback.",
            imageUrl: "images/audiotobraille.png", // Replace with an actual image path
            features: ["Speech-to-Text API", "Braille Conversion Algorithm", "Multi-language Support", "Real-time Output"],
            link: "#" // Add link if available
        },
        {
            title: "Hospital Management",
            description: "A platform for locating hospitals, viewing bed availability, and connecting with doctors. Designed to streamline emergency response and support informed healthcare choices.",
            imageUrl: "images/hospitalmanagement.png", // Replace with an actual image path
            features: ["Real-time Database", "Geolocation Search", "Doctor Specialty Filter", "User-friendly Interface"],
            link: "https://github.com/ram-rk-cmd/hosptial"
        },
        {
            title: "AskyourPDF",
            description: "An intelligent bot that answers questions based on the content of uploaded PDFs. It leverages NLP models to provide accurate, context-aware responses from complex documents.",
            imageUrl: "images/askyoutPDF.png", // Replace with an actual image path
            features: ["NLP Integration", "Document Parsing", "Context-aware AI", "Streamlit UI"],
            link: "https://github.com/ram-rk-cmd/AskyourPDF"
        },
        
    ];

    const achievements = [
        {
            title: "Codewar 1.0 – Winner",
            subtitle: "PARK Engineering College",
            description: "Won 1st place and a ₹10,000 cash prize at Codewar 1.0, a coding competition hosted by PARK Engineering College. Demonstrated fast problem-solving and strong programming skills in a competitive environment.",
            imageUrl: "images/RAMKUMAR CODEWAR.jpg", // Replace with an actual image path
            features: ["Competitive Programming", "Team Collaboration", "Algorithm Design", "Problem Solving"],
            link: "https://drive.google.com/file/d/12Fo-LN3sns0jg4IDluAJgpjpB1XU873j/view?usp=sharing" // Add a link to a certificate or announcement if available
        },
        {
            title: "Research Publication – Blockchain Voting Systems",
            subtitle: "ICCES 2024 Conference",
            description: "Co-authored and presented a research paper on secure voting systems using blockchain technology at the 9th International Conference on Communication and Electronics Systems (ICCES 2024).",
            imageUrl: "images/IEEE RK.png", // Replace with an actual image path
            features: ["Blockchain Technology", "Ethereum Smart Contracts", "Cryptography", "Academic Research"],
            link: "https://drive.google.com/file/d/1-rVNouQeo9lApiBNcaPy9cCC8Y8kByrt/view?usp=sharing"
        },
         {
            title: "Python Zero to Hero",
            subtitle: "GUVI Geek Networks",
            description: "Successfully completed the comprehensive 'Python Zero to Hero' course, covering fundamental to advanced concepts in Python programming. Certificate issued on October 24, 2023.",
            imageUrl: "images/GuviCertification.png", // Replace with the actual image path
            features: ["Core Python Concepts", "Data Structures", "Object-Oriented Programming", "Problem Solving"],
            link: "https://drive.google.com/file/d/1KebUqVdDlxx4qsmkD23VlIGG-qnsT-sQ/view?usp=sharing"
        },
        // --- NEW ACHIEVEMENT ADDED BELOW ---
        {
            title: "Generative AI for All",
            subtitle: "Infosys Springboard",
            description: "Completed the 'Generative AI for All' course offered by Infosys, gaining foundational knowledge in generative artificial intelligence concepts and applications. Course completed on January 30, 2025.",
            imageUrl: "images/GEN AI.jpg", // Replace with the actual image path
            features: ["Generative AI Fundamentals", "Large Language Models", "AI Applications", "Infosys Springboard"],
            link: "https://drive.google.com/file/d/1-78IFfqMn6RU06G9rvoXhWnyUzj2Z4Lb/view?usp=sharing"
        },
        {
            title: "NPTEL Certification – Industry 4.0 & IIoT",
            subtitle: "NPTEL",
            description: "Completed the 12-week NPTEL course on “Introduction to Industry 4.0 and Industrial Internet of Things,” scoring 72/100 and gaining advanced insights into smart systems and automation.",
            imageUrl: "images/Introduction to Industry 4.0 and Industrial Internet of Things.jpg", // Replace with an actual image path
            features: ["Industry 4.0 Concepts", "IoT Architecture", "Smart Systems", "Automation Technologies"],
            link: "https://drive.google.com/file/d/1mPvGv_g3GegRSgxUTpjTPHnglZpuZLrL/view?usp=sharing"
        },
        
    {
            title: "NPTEL Certification – Cloud Computing",
            subtitle: "NPTEL / IIT Kharagpur",
            description: "Successfully completed a 12-week NPTEL course on Cloud Computing, achieving a consolidated score of 65%. Gained in-depth knowledge of cloud architecture, services (IaaS, PaaS, SaaS), virtualization, and security principles.",
            imageUrl: "images/cloudcomputing.jpg", // The image you uploaded
            features: ["Cloud Architecture", "Virtualization", "Cloud Services (IaaS, PaaS, SaaS)", "Cloud Security"],
            link: "https://drive.google.com/file/d/1-u1NFdEZJyTPchoj4qJzW5VcXAZHyQo2/view?usp=sharing"
        }
    ];

    // --- ACCORDION BUILDER ---

    function createAccordionItem(item, index) {
        return `
            <div class="accordion-item">
                <button class="accordion-button" aria-expanded="${index === 0 ? 'true' : 'false'}">
                    <span class="accordion-title">${item.title}</span>
                    <i class='bx bx-plus accordion-icon'></i>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <div class="accordion-image">
                            <img src="${item.imageUrl}" alt="${item.title}">
                        </div>
                        <div class="accordion-text">
                            ${item.subtitle ? `<p class="accordion-subtitle">${item.subtitle}</p>` : ''}
                            <p>${item.description}</p>
                            <div class="accordion-features">
                                ${item.features.map(feature => `<span>${feature}</span>`).join('')}
                            </div>
                            ${item.link && item.link !== '#' ? `<a href="${item.link}" target="_blank" class="btn btn--secondary">Learn More</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderAccordion(containerId, data) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = data.map(createAccordionItem).join('');
        }
    }

    // --- INITIALIZATION ---

    document.addEventListener("DOMContentLoaded", () => {
        renderAccordion("projects-accordion-container", projects);
        renderAccordion("achievements-accordion-container", achievements);

        const accordionItems = document.querySelectorAll('.accordion-item');

        if (accordionItems.length > 0) {
            // Open the first item by default
            accordionItems[0].classList.add('active');

            accordionItems.forEach(item => {
                const button = item.querySelector('.accordion-button');
                button.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Optional: Close all other items
                    accordionItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });
                    
                    // Toggle the clicked item
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            });
        }
    });

})();