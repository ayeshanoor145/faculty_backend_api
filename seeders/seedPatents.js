const seedPatents = async () => {
    const module = await import('../models/patents.js');
    const PatentModel = module.default;
    const count = await PatentModel.countDocuments();
    if (count > 0) {
        console.log('Patents already seeded');
        return;
    }

    const patents = [

        // 1. Dr. Smith (Computer Science - AI/ML)
        {
            patent_granted: {
                ref_number: "US11223344B2",
                title: "Adaptive Neural Network Architecture for Low-Resource Language Processing",
                country: "United States",
                date: "2022-05-15",
                affiliation: "Massachusetts Institute of Technology",
                description: "Patent for transformer-based architecture optimized for low-resource NLP tasks, based on Dr. Smith's research in machine learning."
            }
        },

        // 2. Dr. Sarah (Data Science)
        {
            patent_granted: {
                ref_number: "US10998877A1",
                title: "Federated Learning System for Privacy-Preserving Healthcare Data Analysis",
                country: "United States",
                date: "2021-08-20",
                affiliation: "MIT",
                description: "Patent for a distributed machine learning system that preserves patient privacy while enabling healthcare analytics."
            }
        },

        // 3. Prof. Chen Wei (Deep Learning)
        {
            patent_granted: {
                ref_number: "CN202210567890",
                title: "3D Computer Vision System Using Hybrid Attention Mechanisms",
                country: "China",
                date: "2022-11-30",
                affiliation: "Tsinghua University",
                description: "Patent for a novel computer vision architecture combining spatial and channel attention mechanisms for 3D object recognition."
            }
        },

        // 4. Dr. Fatima Khan (Biomedical Engineering)
        {
            patent_submitted: {
                title: "Low-Cost EEG Headset for Brain-Computer Interfaces",
                submission_date: "2023-02-18",
                country: "Pakistan",
                affiliation: "LUMS",
                description: "Patent application for an affordable EEG-based BCI system designed for neurological rehabilitation in developing countries."
            }
        },

        // 5. Dr. Ahmed Mahmood (Electrical Engineering)
        {
            patent_granted: {
                ref_number: "PK2022000456",
                title: "AI-Based Smart Grid Optimization System for Developing Countries",
                country: "Pakistan",
                date: "2022-07-10",
                affiliation: "UET Lahore",
                description: "Patent for an intelligent grid management system that optimizes power distribution in unstable grid conditions."
            }
        },

        // 6. Dr. Maria Garcia (Environmental Science)
        {
            patent_submitted: {
                title: "Tropical Forest Carbon Sequestration Monitoring System",
                submission_date: "2023-01-25",
                country: "Mexico",
                affiliation: "UNAM",
                description: "Patent application for a satellite and ground sensor network to measure carbon capture in tropical ecosystems."
            }
        },

        // 7. Dr. James Wilson (Physics)
        {
            patent_granted: {
                ref_number: "GB2598765B",
                title: "Quantum Entanglement Measurement Device for Novel Superconductors",
                country: "United Kingdom",
                date: "2022-09-15",
                affiliation: "University of Cambridge",
                description: "Patent for a specialized apparatus to measure quantum entanglement properties in superconducting materials."
            }
        },

        // 8. Dr. Aisha Abdullah (Chemistry - Nanotech)
        {
            patent_granted: {
                ref_number: "SA2023001234",
                title: "Gold Nanoparticle Drug Delivery System for Targeted Cancer Therapy",
                country: "Saudi Arabia",
                date: "2023-03-05",
                affiliation: "King Saud University",
                description: "Patent for a nanoparticle-based system that delivers chemotherapy drugs directly to tumor cells."
            }
        },

        // 9. Dr. Robert Kim (Biotechnology)
        {
            patent_granted: {
                ref_number: "US11447788B2",
                title: "CRISPR-Cas9 Gene Editing Method for Drought-Resistant Crops",
                country: "United States",
                date: "2022-10-12",
                affiliation: "Harvard University",
                description: "Patent for a novel gene editing technique to enhance drought resistance in agricultural plants."
            }
        },

        // 10. Dr. Elena Petrova (Materials Science)
        {
            patent_granted: {
                ref_number: "RU2022156789",
                title: "Biodegradable Polymer Composite for Food Packaging",
                country: "Russia",
                date: "2022-12-20",
                affiliation: "Moscow State University",
                description: "Patent for an environmentally friendly polymer material that decomposes within 6 months."
            }
        },

        // 11. Dr. Ali Hassan (Mechanical Engineering - Robotics)
        {
            patent_submitted: {
                title: "AI-Powered Robotic Arm for Precision Manufacturing",
                submission_date: "2023-04-15",
                country: "Pakistan",
                affiliation: "UET Lahore",
                description: "Patent application for an industrial robotic system with adaptive learning capabilities for manufacturing processes."
            }
        },

        // 12. Dr. Sophia Rodriguez (NLP)
        {
            patent_granted: {
                ref_number: "ES2022304567",
                title: "Neural Machine Translation System for Indigenous Languages",
                country: "Spain",
                date: "2022-08-30",
                affiliation: "University of Barcelona",
                description: "Patent for a low-resource language translation system that works with minimal training data."
            }
        },

        // 13. Dr. Thomas Müller (Physics)
        {
            patent_granted: {
                ref_number: "DE202315678",
                title: "High-Temperature Superconducting Material Composition",
                country: "Germany",
                date: "2023-04-10",
                affiliation: "Max Planck Institute",
                description: "Patent for a novel material formulation that exhibits superconductivity at higher temperatures than conventional materials."
            }
        },

        // 14. Dr. Amina Ndiaye (Epidemiology)
        {
            patent_submitted: {
                title: "Community-Based Malaria Surveillance and Alert System",
                submission_date: "2022-11-15",
                country: "Senegal",
                affiliation: "Cheikh Anta Diop University",
                description: "Patent application for a mobile and satellite-based system to predict and alert about malaria outbreaks."
            }
        },

        // 15. Dr. Raj Patel (Biochemistry)
        {
            patent_granted: {
                ref_number: "CA3021456B",
                title: "Engineered Enzyme for Plastic Waste Degradation",
                country: "Canada",
                date: "2022-06-25",
                affiliation: "University of Toronto",
                description: "Patent for a genetically modified enzyme that breaks down PET plastics into recyclable components."
            }
        },

        // 16. Dr. Yuki Tanaka (Computer Engineering)
        {
            patent_granted: {
                ref_number: "JP2022156789",
                title: "Neuromorphic Computing Chip Architecture",
                country: "Japan",
                date: "2022-09-22",
                affiliation: "University of Tokyo",
                description: "Patent for a brain-inspired computing architecture that mimics neural networks for efficient AI processing."
            }
        },

        // 17. Dr. Carlos Mendez (Environmental Engineering)
        {
            patent_submitted: {
                title: "Low-Energy Membrane Desalination System",
                submission_date: "2023-03-18",
                country: "Mexico",
                affiliation: "National Autonomous University of Mexico",
                description: "Patent application for a water purification system that reduces energy consumption by 40% compared to conventional methods."
            }
        },

        // 18. Dr. Emma Wilson (Neuroscience)
        {
            patent_granted: {
                ref_number: "GB2601234B",
                title: "Non-Invasive Memory Enhancement Stimulation Device",
                country: "United Kingdom",
                date: "2023-01-30",
                affiliation: "University of Oxford",
                description: "Patent for a wearable device that uses targeted stimulation to enhance memory consolidation during sleep."
            }
        },

        // 19. Dr. Muhammad Ali (Mathematics)
        {
            patent_submitted: {
                title: "Computational Fluid Dynamics Optimization Algorithm",
                submission_date: "2022-10-05",
                country: "Pakistan",
                affiliation: "Quaid-i-Azam University",
                description: "Patent application for a numerical method that accelerates fluid flow simulations by 30% without loss of accuracy."
            }
        },

        // 20. Dr. Li Wei (Materials Science)
        {
            patent_granted: {
                ref_number: "CN2023102345",
                title: "Flexible Graphene-Based Electronic Skin for Wearable Devices",
                country: "China",
                date: "2023-02-28",
                affiliation: "Tsinghua University",
                description: "Patent for a stretchable graphene material that can be used as sensitive electronic skin for health monitoring."
            }
        },

        // 21. Dr. Anna Kowalski (Chemistry)
        {
            patent_granted: {
                ref_number: "PL2022005678",
                title: "Green Catalytic Process for Pharmaceutical Intermediate Synthesis",
                country: "Poland",
                date: "2022-07-15",
                affiliation: "University of Warsaw",
                description: "Patent for an environmentally friendly catalytic method that reduces waste in pharmaceutical manufacturing."
            }
        }
    ];


await PatentModel.insertMany(patents);
console.log('Patents seeded successfully');
};
export default seedPatents;