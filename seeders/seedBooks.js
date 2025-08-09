const seedBooks = async () => {
    const module = await import('../models/books.js');
    const BookModel = module.default;
    const count = await BookModel.countDocuments();
    if (count > 0) {
        console.log('Books already seeded');
        return;
    }

    const books = [

        // 1. Dr. Smith (Computer Science - AI)
        {
            user: "64d4f8b2c9e77b1a2c8b4567",
            title: "Advanced Machine Learning Techniques",
            authors: ["Dr. Smith", "Dr. Sarah"],
            publicationDate: "2022-03-10",
            publishingAgency: "AI Publications",
            scope: "International",
            isHECRecognized: true,
            pages: 450,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Deep Neural Networks",
                    author: "Dr. Smith",
                    bookTitle: "Advanced Machine Learning Techniques",
                    publicationDate: "2022-03-10",
                    publishingAgency: "AI Publications",
                    pages: 45,
                    language: "English"
                }
            ]
        },

        // 2. Dr. Sarah (Computer Science - Data Science)
        {
            user: "64d4f8b2c9e77b1a2c8b4568",
            title: "Big Data Analytics: Principles and Practice",
            authors: ["Dr. Sarah"],
            publicationDate: "2021-07-15",
            publishingAgency: "Data Science Press",
            scope: "International",
            isHECRecognized: true,
            pages: 380,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Data Preprocessing Techniques",
                    author: "Dr. Sarah",
                    bookTitle: "Big Data Analytics: Principles and Practice",
                    publicationDate: "2021-07-15",
                    publishingAgency: "Data Science Press",
                    pages: 30,
                    language: "English"
                }
            ]
        },

        // 3. Prof. Chen Wei (Computer Science - Deep Learning)
        {
            user: "64d4f8b2c9e77b1a2c8b4569",
            title: "Deep Learning Architectures",
            authors: ["Prof. Chen Wei"],
            publicationDate: "2020-11-20",
            publishingAgency: "Neural Networks Publishing",
            scope: "International",
            isHECRecognized: true,
            pages: 420,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Convolutional Neural Networks",
                    author: "Prof. Chen Wei",
                    bookTitle: "Deep Learning Architectures",
                    publicationDate: "2020-11-20",
                    publishingAgency: "Neural Networks Publishing",
                    pages: 50,
                    language: "English"
                }
            ]
        },

        // 4. Dr. Fatima Khan (Biomedical Engineering - Neural Engineering)
        {
            user: "64d4f8b2c9e77b1a2c8b4570",
            title: "Brain-Computer Interfaces: Fundamentals and Applications",
            authors: ["Dr. Fatima Khan"],
            publicationDate: "2019-05-12",
            publishingAgency: "Medical Engineering Press",
            scope: "International",
            isHECRecognized: true,
            pages: 320,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Non-invasive BCI Systems",
                    author: "Dr. Fatima Khan",
                    bookTitle: "Brain-Computer Interfaces: Fundamentals and Applications",
                    publicationDate: "2019-05-12",
                    publishingAgency: "Medical Engineering Press",
                    pages: 35,
                    language: "English"
                }
            ]
        },

        // 5. Dr. Ahmed Mahmood (Electrical Engineering - Power Systems)
        {
            user: "64d4f8b2c9e77b1a2c8b4571",
            title: "Smart Grid Technologies for Developing Countries",
            authors: ["Dr. Ahmed Mahmood"],
            publicationDate: "2018-09-30",
            publishingAgency: "Energy Solutions Publishing",
            scope: "National",
            isHECRecognized: true,
            pages: 280,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Renewable Energy Integration",
                    author: "Dr. Ahmed Mahmood",
                    bookTitle: "Smart Grid Technologies for Developing Countries",
                    publicationDate: "2018-09-30",
                    publishingAgency: "Energy Solutions Publishing",
                    pages: 40,
                    language: "English"
                }
            ]
        },

        // 6. Dr. Maria Garcia (Environmental Science - Climate Change)
        {
            user: "64d4f8b2c9e77b1a2c8b4572",
            title: "Climate Change in Latin America: Impacts and Solutions",
            authors: ["Dr. Maria Garcia", "Dr. Carlos Mendez"],
            publicationDate: "2021-04-22",
            publishingAgency: "Environmental Studies Press",
            scope: "International",
            isHECRecognized: true,
            pages: 360,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Carbon Sequestration in Tropical Forests",
                    author: "Dr. Maria Garcia",
                    bookTitle: "Climate Change in Latin America: Impacts and Solutions",
                    publicationDate: "2021-04-22",
                    publishingAgency: "Environmental Studies Press",
                    pages: 25,
                    language: "English"
                }
            ]
        },

        // 7. Dr. James Wilson (Physics - Quantum Mechanics)
        {
            user: "64d4f8b2c9e77b1a2c8b4573",
            title: "Quantum Computing: Theory and Practice",
            authors: ["Dr. James Wilson"],
            publicationDate: "2020-02-18",
            publishingAgency: "Physics World Publications",
            scope: "International",
            isHECRecognized: true,
            pages: 400,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Quantum Algorithms",
                    author: "Dr. James Wilson",
                    bookTitle: "Quantum Computing: Theory and Practice",
                    publicationDate: "2020-02-18",
                    publishingAgency: "Physics World Publications",
                    pages: 60,
                    language: "English"
                }
            ]
        },

        // 8. Dr. Aisha Abdullah (Chemistry - Nanotechnology)
        {
            user: "64d4f8b2c9e77b1a2c8b4574",
            title: "Nanomaterials for Medical Applications",
            authors: ["Dr. Aisha Abdullah"],
            publicationDate: "2019-08-15",
            publishingAgency: "Nano Science Press",
            scope: "International",
            isHECRecognized: true,
            pages: 340,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Targeted Drug Delivery Systems",
                    author: "Dr. Aisha Abdullah",
                    bookTitle: "Nanomaterials for Medical Applications",
                    publicationDate: "2019-08-15",
                    publishingAgency: "Nano Science Press",
                    pages: 45,
                    language: "English"
                }
            ]
        },

        // 9. Dr. Robert Kim (Biotechnology - Genetic Engineering)
        {
            user: "64d4f8b2c9e77b1a2c8b4575",
            title: "CRISPR Technology: Principles and Applications",
            authors: ["Dr. Robert Kim"],
            publicationDate: "2021-01-10",
            publishingAgency: "Biotech Publications",
            scope: "International",
            isHECRecognized: true,
            pages: 380,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Agricultural Applications of CRISPR",
                    author: "Dr. Robert Kim",
                    bookTitle: "CRISPR Technology: Principles and Applications",
                    publicationDate: "2021-01-10",
                    publishingAgency: "Biotech Publications",
                    pages: 50,
                    language: "English"
                }
            ]
        },

        // 10. Dr. Elena Petrova (Materials Science - Polymers)
        {
            user: "64d4f8b2c9e77b1a2c8b4576",
            title: "Sustainable Polymer Materials",
            authors: ["Dr. Elena Petrova"],
            publicationDate: "2020-06-25",
            publishingAgency: "Materials Science Press",
            scope: "International",
            isHECRecognized: true,
            pages: 320,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Biodegradable Composites",
                    author: "Dr. Elena Petrova",
                    bookTitle: "Sustainable Polymer Materials",
                    publicationDate: "2020-06-25",
                    publishingAgency: "Materials Science Press",
                    pages: 40,
                    language: "English"
                }
            ]
        },

        // 11. Dr. Ali Hassan (Mechanical Engineering - Robotics)
        {
            user: "64d4f8b2c9e77b1a2c8b4577",
            title: "Industrial Robotics and Automation",
            authors: ["Dr. Ali Hassan"],
            publicationDate: "2019-10-15",
            publishingAgency: "Engineering Solutions Press",
            scope: "National",
            isHECRecognized: true,
            pages: 350,
            language: "English",
            chapters: [
                {
                    chapterTitle: "AI in Manufacturing Robotics",
                    author: "Dr. Ali Hassan",
                    bookTitle: "Industrial Robotics and Automation",
                    publicationDate: "2019-10-15",
                    publishingAgency: "Engineering Solutions Press",
                    pages: 55,
                    language: "English"
                }
            ]
        },

        // 12. Dr. Sophia Rodriguez (Computer Science - NLP)
        {
            user: "64d4f8b2c9e77b1a2c8b4578",
            title: "Natural Language Processing for Low-Resource Languages",
            authors: ["Dr. Sophia Rodriguez"],
            publicationDate: "2021-03-05",
            publishingAgency: "Computational Linguistics Press",
            scope: "International",
            isHECRecognized: true,
            pages: 290,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Machine Translation Challenges",
                    author: "Dr. Sophia Rodriguez",
                    bookTitle: "Natural Language Processing for Low-Resource Languages",
                    publicationDate: "2021-03-05",
                    publishingAgency: "Computational Linguistics Press",
                    pages: 35,
                    language: "English"
                }
            ]
        },

        // 13. Dr. Thomas Müller (Physics - Condensed Matter)
        {
            user: "64d4f8b2c9e77b1a2c8b4579",
            title: "Superconductivity in Novel Materials",
            authors: ["Dr. Thomas Müller"],
            publicationDate: "2018-12-10",
            publishingAgency: "Physics Research Publications",
            scope: "International",
            isHECRecognized: true,
            pages: 410,
            language: "English",
            chapters: [
                {
                    chapterTitle: "High-Temperature Superconductors",
                    author: "Dr. Thomas Müller",
                    bookTitle: "Superconductivity in Novel Materials",
                    publicationDate: "2018-12-10",
                    publishingAgency: "Physics Research Publications",
                    pages: 65,
                    language: "English"
                }
            ]
        },

        // 14. Dr. Amina Ndiaye (Epidemiology - Infectious Diseases)
        {
            user: "64d4f8b2c9e77b1a2c8b4580",
            title: "Malaria Control in West Africa",
            authors: ["Dr. Amina Ndiaye"],
            publicationDate: "2019-07-20",
            publishingAgency: "Public Health Press",
            scope: "Regional",
            isHECRecognized: true,
            pages: 270,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Community-Based Interventions",
                    author: "Dr. Amina Ndiaye",
                    bookTitle: "Malaria Control in West Africa",
                    publicationDate: "2019-07-20",
                    publishingAgency: "Public Health Press",
                    pages: 30,
                    language: "English"
                }
            ]
        },

        // 15. Dr. Raj Patel (Biochemistry - Enzymology)
        {
            user: "64d4f8b2c9e77b1a2c8b4581",
            title: "Enzyme Engineering for Industrial Applications",
            authors: ["Dr. Raj Patel"],
            publicationDate: "2020-09-15",
            publishingAgency: "Biochemical Engineering Press",
            scope: "International",
            isHECRecognized: true,
            pages: 330,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Metabolic Pathway Optimization",
                    author: "Dr. Raj Patel",
                    bookTitle: "Enzyme Engineering for Industrial Applications",
                    publicationDate: "2020-09-15",
                    publishingAgency: "Biochemical Engineering Press",
                    pages: 45,
                    language: "English"
                }
            ]
        },

        // 16. Dr. Yuki Tanaka (Computer Engineering - Computer Architecture)
        {
            user: "64d4f8b2c9e77b1a2c8b4582",
            title: "Next-Generation Computer Architectures",
            authors: ["Dr. Yuki Tanaka"],
            publicationDate: "2021-11-10",
            publishingAgency: "Computer Engineering Press",
            scope: "International",
            isHECRecognized: true,
            pages: 380,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Neuromorphic Computing Systems",
                    author: "Dr. Yuki Tanaka",
                    bookTitle: "Next-Generation Computer Architectures",
                    publicationDate: "2021-11-10",
                    publishingAgency: "Computer Engineering Press",
                    pages: 50,
                    language: "English"
                }
            ]
        },

        // 17. Dr. Carlos Mendez (Environmental Engineering - Water Treatment)
        {
            user: "64d4f8b2c9e77b1a2c8b4583",
            title: "Advanced Water Treatment Technologies",
            authors: ["Dr. Carlos Mendez"],
            publicationDate: "2020-04-18",
            publishingAgency: "Environmental Engineering Press",
            scope: "Regional",
            isHECRecognized: true,
            pages: 310,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Membrane Desalination Systems",
                    author: "Dr. Carlos Mendez",
                    bookTitle: "Advanced Water Treatment Technologies",
                    publicationDate: "2020-04-18",
                    publishingAgency: "Environmental Engineering Press",
                    pages: 40,
                    language: "English"
                }
            ]
        },

        // 18. Dr. Emma Wilson (Neuroscience - Cognitive Neuroscience)
        {
            user: "64d4f8b2c9e77b1a2c8b4584",
            title: "Memory Systems in the Brain",
            authors: ["Dr. Emma Wilson"],
            publicationDate: "2019-10-05",
            publishingAgency: "Neuroscience Research Press",
            scope: "International",
            isHECRecognized: true,
            pages: 350,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Neural Mechanisms of Memory Formation",
                    author: "Dr. Emma Wilson",
                    bookTitle: "Memory Systems in the Brain",
                    publicationDate: "2019-10-05",
                    publishingAgency: "Neuroscience Research Press",
                    pages: 55,
                    language: "English"
                }
            ]
        },

        // 19. Dr. Muhammad Ali (Mathematics - Applied Mathematics)
        {
            user: "64d4f8b2c9e77b1a2c8b4585",
            title: "Mathematical Modeling of Fluid Dynamics",
            authors: ["Dr. Muhammad Ali"],
            publicationDate: "2018-05-20",
            publishingAgency: "Applied Mathematics Press",
            scope: "International",
            isHECRecognized: true,
            pages: 420,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Numerical Methods for Fluid Flow",
                    author: "Dr. Muhammad Ali",
                    bookTitle: "Mathematical Modeling of Fluid Dynamics",
                    publicationDate: "2018-05-20",
                    publishingAgency: "Applied Mathematics Press",
                    pages: 60,
                    language: "English"
                }
            ]
        },

        // 20. Dr. Li Wei (Materials Engineering - Nanomaterials)
        {
            user: "64d4f8b2c9e77b1a2c8b4586",
            title: "Graphene-Based Materials and Applications",
            authors: ["Dr. Li Wei"],
            publicationDate: "2021-02-15",
            publishingAgency: "Advanced Materials Press",
            scope: "International",
            isHECRecognized: true,
            pages: 370,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Electronic Applications of Graphene",
                    author: "Dr. Li Wei",
                    bookTitle: "Graphene-Based Materials and Applications",
                    publicationDate: "2021-02-15",
                    publishingAgency: "Advanced Materials Press",
                    pages: 45,
                    language: "English"
                }
            ]
        },

        // 21. Dr. Anna Kowalski (Chemistry - Organic Chemistry)
        {
            user: "64d4f8b2c9e77b1a2c8b4587",
            title: "Green Catalysis in Organic Synthesis",
            authors: ["Dr. Anna Kowalski"],
            publicationDate: "2020-08-10",
            publishingAgency: "Chemistry Innovations Press",
            scope: "International",
            isHECRecognized: true,
            pages: 340,
            language: "English",
            chapters: [
                {
                    chapterTitle: "Sustainable Catalytic Processes",
                    author: "Dr. Anna Kowalski",
                    bookTitle: "Green Catalysis in Organic Synthesis",
                    publicationDate: "2020-08-10",
                    publishingAgency: "Chemistry Innovations Press",
                    pages: 40,
                    language: "English"
                }
            ]
        }








    ];

    await BookModel.insertMany(books);
    console.log('Books seeded Successfully');
};
export default seedBooks;