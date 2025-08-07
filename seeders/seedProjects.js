const seedProjects = async () => {
    const module = await import('../models/projects.js');
    const ProjectModel = module.default;
    const count = await ProjectModel.countDocuments();
    if (count > 0) {
        console.log('Projects already seeded');
        return;
    }


    const projects = [

        // 1. Dr. Smith's Project
        {
            awardedBy: {
                name: "Higher Education Commission (HEC)",
                type: "National",
                country: "Pakistan",
                website: "https://hec.gov.pk"
            },
            pi: "Dr. Smith",
            coPi: ["Dr. Muhammad Ali", "Dr. Fatima Khan"],
            worth: {
                value: 4500000,
                currency: "PKR"
            },
            title: "AI for Agricultural Optimization in Punjab",
            startDate: "2023-03-01",
            completionDate: "2025-12-31",
            status: "Active",
            description: "Developing ML models for crop yield prediction and resource optimization"
        },

        // 2. Dr. Sarah's Project
        {
           awardedBy: {
                name: "National Science Foundation",
                type: "International",
                country: "USA",
                website: "https://www.nsf.gov"
            },
            pi: "Dr. Sarah",
            coPi: ["Dr. Robert Kim"],
            worth: {
                value: 850000,
                currency: "USD"
            },
            title: "Advanced Data Science Techniques",
            startDate: "2023-01-15",
            completionDate: "2026-06-30",
            status: "Active",
            description: "Developing novel data analysis methods for large-scale datasets"
        },

        // 3. Prof. Chen Wei's Project
        {
            awardedBy: {
                name: "National Natural Science Foundation of China",
                type: "National",
                country: "China",
                website: "http://www.nsfc.gov.cn"
            },
            pi: "Prof. Chen Wei",
            worth: {
                value: 3200000,
                currency: "CNY"
            },
            title: "Deep Learning Architectures for Medical Imaging",
            startDate: "2022-09-01",
            completionDate: "2025-08-31",
            status: "Active",
            description: "Developing AI models for automated medical diagnosis"
        },

        // 4. Dr. Fatima Khan's Project
        {
           awardedBy: {
                name: "Higher Education Commission (HEC)",
                type: "National",
                country: "Pakistan",
                website: "https://hec.gov.pk"
            },
            pi: "Dr. Fatima Khan",
            coPi: ["Dr. Ahmed Mahmood"],
            worth: {
                value: 3800000,
                currency: "PKR"
            },
            title: "Neural Interface Technologies",
            startDate: "2023-05-01",
            completionDate: "2025-12-31",
            status: "Active",
            description: "Developing affordable neural interface devices for medical applications"
        },

        // 5. Dr. Ahmed Mahmood's Project
        {
            awardedBy: {
                name: "Engineering and Physical Sciences Research Council",
                type: "National",
                country: "UK",
                website: "https://epsrc.ukri.org"
            },
            pi: "Dr. Ahmed Mahmood",
            worth: {
                value: 350000,
                currency: "GBP"
            },
            title: "Smart Grid Optimization",
            startDate: "2022-11-01",
            completionDate: "2024-10-31",
            status: "Active",
            description: "Developing optimization algorithms for modern power grids"
        },

        // 6. Dr. Maria Garcia's Project
        {
            awardedBy: {
                name: "European Research Council",
                type: "International",
                country: "EU",
                website: "https://erc.europa.eu"
            },
            pi: "Dr. Maria Garcia",
            coPi: ["Dr. Carlos Mendez"],
            worth: {
                value: 1200000,
                currency: "EUR"
            },
            title: "Climate Change Mitigation Strategies",
            startDate: "2023-03-01",
            completionDate: "2027-02-28",
            status: "Active",
            description: "Developing strategies for carbon sequestration in tropical regions"
        },

        // 7. Dr. James Wilson's Project
        {
            awardedBy: {
                name: "National Science Foundation",
                type: "International",
                country: "USA",
                website: "https://www.nsf.gov"
            },
            pi: "Dr. James Wilson",
            worth: {
                value: 950000,
                currency: "USD"
            },
            title: "Quantum Computing Research",
            startDate: "2023-02-15",
            completionDate: "2026-12-31",
            status: "Active",
            description: "Advancing quantum computing technologies for practical applications"
        },

        // 8. Dr. Aisha Abdullah's Project
        {
          awardedBy: {
                name: "King Abdullah University of Science and Technology",
                type: "National",
                country: "Saudi Arabia",
                website: "https://www.kaust.edu.sa"
            },
            pi: "Dr. Aisha Abdullah",
            coPi: ["Dr. Elena Petrova"],
            worth: {
                value: 2800000,
                currency: "SAR"
            },
            title: "Nanotechnology for Drug Delivery",
            startDate: "2023-04-01",
            completionDate: "2026-03-31",
            status: "Active",
            description: "Developing nanoparticle-based drug delivery systems"
        },

        // 9. Dr. Robert Kim's Project
        {
            awardedBy: {
                name: "National Research Foundation of Korea",
                type: "National",
                country: "South Korea",
                website: "https://www.nrf.re.kr"
            },
            pi: "Dr. Robert Kim",
            worth: {
                value: 420000000,
                currency: "KRW"
            },
            title: "CRISPR Gene Editing Applications",
            startDate: "2023-01-10",
            completionDate: "2025-12-31",
            status: "Active",
            description: "Developing agricultural applications of CRISPR technology"
        },

        // 10. Dr. Elena Petrova's Project
        {
            awardedBy: {
                name: "Russian Science Foundation",
                type: "National",
                country: "Russia",
                website: "https://rscf.ru"
            },
            pi: "Dr. Elena Petrova",
            coPi: ["Dr. Li Wei"],
            worth: {
                value: 15000000,
                currency: "RUB"
            },
            title: "Biodegradable Polymer Composites",
            startDate: "2023-03-15",
            completionDate: "2026-03-14",
            status: "Active",
            description: "Developing eco-friendly polymer materials for industrial use"
        },

        // 11. Dr. Ali Hassan's Project
        {
          awardedBy: {
                name: "Higher Education Commission (HEC)",
                type: "National",
                country: "Pakistan",
                website: "https://hec.gov.pk"
            },
            pi: "Dr. Ali Hassan",
            worth: {
                value: 3200000,
                currency: "PKR"
            },
            title: "Industrial Robotics Automation",
            startDate: "2023-02-01",
            completionDate: "2025-01-31",
            status: "Active",
            description: "Developing AI-powered robotic systems for manufacturing"
        },

        // 12. Dr. Sophia Rodriguez's Project
        {
          awardedBy: {
                name: "National Scientific and Technical Research Council",
                type: "National",
                country: "Argentina",
                website: "https://www.conicet.gov.ar"
            },
            pi: "Dr. Sophia Rodriguez",
            coPi: ["Dr. Thomas Müller"],
            worth: {
                value: 2800000,
                currency: "ARS"
            },
            title: "Multilingual NLP Systems",
            startDate: "2023-04-01",
            completionDate: "2026-03-31",
            status: "Active",
            description: "Developing natural language processing for low-resource languages"
        },

        // 13. Dr. Thomas Müller's Project
        {
          awardedBy: {
                name: "German Research Foundation",
                type: "National",
                country: "Germany",
                website: "https://www.dfg.de"
            },
            pi: "Dr. Thomas Müller",
            worth: {
                value: 480000,
                currency: "EUR"
            },
            title: "Superconducting Materials Research",
            startDate: "2022-12-01",
            completionDate: "2025-11-30",
            status: "Active",
            description: "Investigating novel superconducting materials for energy applications"
        },

        // 14. Dr. Amina Ndiaye's Project
        {
           awardedBy: {
                name: "World Health Organization",
                type: "International",
                country: "Switzerland",
                website: "https://www.who.int"
            },
            pi: "Dr. Amina Ndiaye",
            coPi: ["Dr. Raj Patel"],
            worth: {
                value: 1200000,
                currency: "USD"
            },
            title: "Malaria Prevention Strategies",
            startDate: "2023-01-01",
            completionDate: "2026-12-31",
            status: "Active",
            description: "Developing innovative malaria control methods for West Africa"
        },

        // 15. Dr. Raj Patel's Project
        {
           awardedBy: {
                name: "Canadian Institutes of Health Research",
                type: "National",
                country: "Canada",
                website: "https://cihr-irsc.gc.ca"
            },
            pi: "Dr. Raj Patel",
            worth: {
                value: 620000,
                currency: "CAD"
            },
            title: "Industrial Enzyme Engineering",
            startDate: "2023-03-01",
            completionDate: "2026-02-28",
            status: "Active",
            description: "Developing engineered enzymes for industrial applications"
        },

        // 16. Dr. Yuki Tanaka's Project
        {
            awardedBy: {
                name: "Japan Society for the Promotion of Science",
                type: "National",
                country: "Japan",
                website: "https://www.jsps.go.jp"
            },
            pi: "Dr. Yuki Tanaka",
            coPi: ["Dr. Anna Kowalski"],
            worth: {
                value: 45000000,
                currency: "JPY"
            },
            title: "Neuromorphic Computing Architectures",
            startDate: "2023-04-01",
            completionDate: "2026-03-31",
            status: "Active",
            description: "Developing brain-inspired computing systems"
        },

        // 17. Dr. Carlos Mendez's Project
        {
           awardedBy: {
                name: "National Council of Science and Technology",
                type: "National",
                country: "Mexico",
                website: "https://www.conacyt.gob.mx"
            },
            pi: "Dr. Carlos Mendez",
            worth: {
                value: 2800000,
                currency: "MXN"
            },
            title: "Advanced Water Treatment Technologies",
            startDate: "2023-02-15",
            completionDate: "2025-12-31",
            status: "Active",
            description: "Developing membrane technologies for water purification"
        },

        // 18. Dr. Emma Wilson's Project
        {
           awardedBy: {
                name: "Wellcome Trust",
                type: "International",
                country: "UK",
                website: "https://wellcome.org"
            },
            pi: "Dr. Emma Wilson",
            coPi: ["Dr. Muhammad Ali"],
            worth: {
                value: 850000,
                currency: "GBP"
            },
            title: "Cognitive Neuroscience of Memory",
            startDate: "2023-01-01",
            completionDate: "2026-12-31",
            status: "Active",
            description: "Investigating neural mechanisms of memory formation"
        },

        // 19. Dr. Muhammad Ali's Project
        {
            awardedBy: {
                name: "Higher Education Commission (HEC)",
                type: "National",
                country: "Pakistan",
                website: "https://hec.gov.pk"
            },
            pi: "Dr. Muhammad Ali",
            worth: {
                value: 3500000,
                currency: "PKR"
            },
            title: "Mathematical Modeling of Fluid Dynamics",
            startDate: "2023-03-01",
            completionDate: "2025-12-31",
            status: "Active",
            description: "Developing advanced mathematical models for fluid systems"
        },

        // 20. Dr. Li Wei's Project
        {         
            awardedBy: {
                name: "National Natural Science Foundation of China",
                type: "National",
                country: "China",
                website: "http://www.nsfc.gov.cn"
            },
            pi: "Dr. Li Wei",
            coPi: ["Dr. Yuki Tanaka"],
            worth: {
                value: 2800000,
                currency: "CNY"
            },
            title: "Graphene-Based Electronic Devices",
            startDate: "2023-04-01",
            completionDate: "2026-03-31",
            status: "Active",
            description: "Developing next-generation electronic devices using graphene"
        },

        // 21. Dr. Anna Kowalski's Project
        {
           awardedBy: {
                name: "European Research Council",
                type: "International",
                country: "EU",
                website: "https://erc.europa.eu"
            },
            pi: "Dr. Anna Kowalski",
            worth: {
                value: 950000,
                currency: "EUR"
            },
            title: "Green Catalytic Processes",
            startDate: "2023-02-01",
            completionDate: "2026-01-31",
            status: "Active",
            description: "Developing environmentally friendly catalytic processes for industry"
        }

    ];


    
    await ProjectModel.insertMany(projects);
    console.log('Projects seeded successfully');
};
export default seedProjects;