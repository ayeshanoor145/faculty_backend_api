const seedPublications = async () => {
    const module = await import('../models/publications.js');
    const PublicationModel = module.default;
    const count = await PublicationModel.countDocuments();
    if (count > 0) {
        console.log('Publications already seeded');
        return;
    }


    const publications = [

        // 1. Dr. Smith (Computer Science - AI/ML)
        {
            _id: "6896d42a045cf05360fea879", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4567", // Reference to Dr. Smith's user ID
            "publications":
            {
                "author": "Dr. Smith (Corresponding Author)",
                "coAuthors": ["Chen W", "Rodriguez S", "Wilson J"],
                "title": "Transformer Architectures for Low-Resource NLP Tasks",
                "journalName": "Nature Machine Intelligence",
                "publishingYear": 2023,
                "volume": 1,
                "impactFactor": 25.898,
                "citation": "Smith, Chen W, Rodriguez S, Wilson J. Transformer Architectures for Low-Resource NLP Tasks. Nat Mach Intell. 2023 Jan;5(1):45-58.",
                "doi": "10.1038/s42256-022-00542-1",
                "journalType": "International",
                "hecRecognized": true,

            },
        },

        // 2. Dr. Sarah (Data Science)
        {
            _id: "6896d42a045cf05360fea880", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4568", // Reference to Dr. Sarah's user ID
            "publications": [
                {
                    "author": "Dr. Sarah (Corresponding Author)",
                    "coAuthors": ["Kim R", "Garcia M"],
                    "title": "Federated Learning for Privacy-Preserving Healthcare Analytics",
                    "journalName": "Scientific Data",
                    "publishingYear": 2023,
                    "volume": 2,
                    "impactFactor": 8.501,
                    "citation": "Sarah, Kim R, Garcia M. Federated Learning for Privacy-Preserving Healthcare Analytics. Sci Data. 2023 Feb;10(1):1-12.",
                    "doi": "10.1038/s41597-023-01954-1",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 3. Prof. Chen Wei (Deep Learning)
        {
            _id: "6896d42a045cf05360fea881", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4569", // Reference to Prof. Chen Wei's user ID
            "publications": [
                {
                    "author": "Prof. Chen Wei (Corresponding Author)",
                    "coAuthors": ["Li W", "Müller T"],
                    "title": "Attention Mechanisms in 3D Computer Vision",
                    "journalName": "International Journal of Computer Vision",
                    "publishingYear": 2022,
                    "volume": 4,
                    "impactFactor": 13.369,
                    "citation": "Chen W, Li W, Müller T. Attention Mechanisms in 3D Computer Vision. IJCV. 2022 Dec;130(12):2875-2896.",
                    "doi": "10.1007/s11263-022-01663-1",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 4. Dr. Fatima Khan (Biomedical Engineering)
        {
            _id: "6896d42a045cf05360fea882", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4570", // Reference to Dr. Fatima Khan's user ID
            "publications": [
                {
                    "author": "Dr. Fatima Khan (Corresponding Author)",
                    "coAuthors": ["Abdullah A", "Patel R"],
                    "title": "Low-Cost EEG-Based Brain-Computer Interfaces for Paralysis Patients",
                    "journalName": "Journal of Neural Engineering",
                    "publishingYear": 2023,
                    "volume": 1,
                    "impactFactor": 5.043,
                    "citation": "Khan F, Abdullah A, Patel R. Low-Cost EEG-Based Brain-Computer Interfaces for Paralysis Patients. J Neural Eng. 2023 Jan;20(1):015003.",
                    "doi": "10.1088/1741-2552/acab3e",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 5. Dr. Ahmed Mahmood (Electrical Engineering)
        {
            _id: "6896d42a045cf05360fea883", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4571", // Reference to Dr. Ahmed Mahmood's user ID
            "publications": [
                {
                    "author": "Dr. Ahmed Mahmood (Corresponding Author)",
                    "coAuthors": ["Hassan A", "Mendez C"],
                    "title": "AI-Optimized Smart Grids for Developing Countries",
                    "journalName": "IEEE Transactions on Smart Grid",
                    "publishingYear": 2022,
                    "volume": 3,
                    "impactFactor": 9.653,
                    "citation": "Mahmood A, Hassan A, Mendez C. AI-Optimized Smart Grids for Developing Countries. IEEE Trans Smart Grid. 2022 May;13(3):2345-2358.",
                    "doi": "10.1109/TSG.2022.3145678",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 6. Dr. Maria Garcia (Environmental Science)
        {
            _id: "6896d42a045cf05360fea884", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4572", // Reference to Dr. Maria Garcia's user ID
            "publications": [
                {
                    "author": "Dr. Maria Garcia (Corresponding Author)",
                    "coAuthors": ["Ndiaye A", "Wilson E"],
                    "title": "Carbon Sequestration in Tropical Rainforests: A 10-Year Study",
                    "journalName": "Nature Climate Change",
                    "publishingYear": 2023,
                    "volume": 2,
                    "impactFactor": 28.660,
                    "citation": "Garcia M, Ndiaye A, Wilson E. Carbon Sequestration in Tropical Rainforests: A 10-Year Study. Nat Clim Change. 2023 Feb;13(2):156-165.",
                    "doi": "10.1038/s41558-022-01578-0",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 7. Dr. James Wilson (Physics - Quantum)
        {
            _id: "6896d42a045cf05360fea885", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4573", // Reference to Dr. James Wilson's user ID
            "publications": [
                {
                    "author": "Dr. James Wilson (Corresponding Author)",
                    "coAuthors": ["Petrova E", "Tanaka Y"],
                    "title": "Quantum Entanglement in Novel Superconducting Materials",
                    "journalName": "Physical Review Letters",
                    "publishingYear": 2022,
                    "volume": 4,
                    "impactFactor": 9.185,
                    "citation": "Wilson J, Petrova E, Tanaka Y. Quantum Entanglement in Novel Superconducting Materials. Phys Rev Lett. 2022 Apr;128(16):160503.",
                    "doi": "10.1103/PhysRevLett.128.160503",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 8. Dr. Aisha Abdullah (Chemistry - Nanotech)
        {
            _id: "6896d42a045cf05360fea886", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4574", // Reference to Dr. Aisha Abdullah's user ID
            "publications": [
                {
                    "author": "Dr. Aisha Abdullah (Corresponding Author)",
                    "coAuthors": ["Kowalski A", "Kim R"],
                    "title": "Gold Nanoparticle Drug Delivery Systems for Cancer Therapy",
                    "journalName": "ACS Nano",
                    "publishingYear": 2023,
                    "volume": 1,
                    "impactFactor": 15.881,
                    "citation": "Abdullah A, Kowalski A, Kim R. Gold Nanoparticle Drug Delivery Systems for Cancer Therapy. ACS Nano. 2023 Jan;17(1):325-341.",
                    "doi": "10.1021/acsnano.2c08912",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 9. Dr. Robert Kim (Biotechnology)
        {
            _id: "6896d42a045cf05360fea887", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4575", // Reference to Dr. Robert Kim's user ID
            "publications": [
                {
                    "author": "Dr. Robert Kim (Corresponding Author)",
                    "coAuthors": ["Patel R", "Khan F"],
                    "title": "CRISPR-Cas9 Gene Editing in Drought-Resistant Crops",
                    "journalName": "Nature Biotechnology",
                    "publishingYear": 2022,
                    "volume": 3,
                    "impactFactor": 54.908,
                    "citation": "Kim R, Patel R, Khan F. CRISPR-Cas9 Gene Editing in Drought-Resistant Crops. Nat Biotechnol. 2022 Mar;40(3):401-412.",
                    "doi": "10.1038/s41587-021-01139-4",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 10. Dr. Elena Petrova (Materials Science)
        {
            _id: "6896d42a045cf05360fea888", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4576", // Reference to Dr. Elena Petrova's user ID
            "publications": [
                {
                    "author": "Dr. Elena Petrova (Corresponding Author)",
                    "coAuthors": ["Li W", "Kowalski A"],
                    "title": "Biodegradable Polymer Composites for Sustainable Packaging",
                    "journalName": "Advanced Materials",
                    "publishingYear": 2023,
                    "volume": 2,
                    "impactFactor": 32.086,
                    "citation": "Petrova E, Li W, Kowalski A. Biodegradable Polymer Composites for Sustainable Packaging. Adv Mater. 2023 Feb;35(8):2209145.",
                    "doi": "10.1002/adma.202209145",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 11. Dr. Ali Hassan (Mechanical Engineering - Robotics)
        {
            _id: "6896d42a045cf05360fea889", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4577", // Reference to Dr. Ali Hassan's user ID
            "publications": [
                {
                    "author": "Dr. Ali Hassan (Corresponding Author)",
                    "coAuthors": ["Smith", "Tanaka Y"],
                    "title": "AI-Powered Industrial Robotics for Smart Manufacturing",
                    "journalName": "IEEE Transactions on Robotics",
                    "publishingYear": 2022,
                    "volume": 4,
                    "impactFactor": 6.721,
                    "citation": "Hassan A, Smith, Tanaka Y. AI-Powered Industrial Robotics for Smart Manufacturing. IEEE Trans Robot. 2022 Aug;38(4):2345-2360.",
                    "doi": "10.1109/TRO.2022.3163718",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 12. Dr. Sophia Rodriguez (NLP)
        {
            _id: "6896d42a045cf05360fea890", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4578", // Reference to Dr. Sophia Rodriguez's user ID
            "publications": [
                {
                    "author": "Dr. Sophia Rodriguez (Corresponding Author)",
                    "coAuthors": ["Chen W", "Sarah"],
                    "title": "Neural Machine Translation for Indigenous Languages",
                    "journalName": "Computational Linguistics",
                    "publishingYear": 2023,
                    "volume": 1,
                    "impactFactor": 4.571,
                    "citation": "Rodriguez S, Chen W, Sarah. Neural Machine Translation for Indigenous Languages. Comput Linguist. 2023 Jan;49(1):45-78.",
                    "doi": "10.1162/coli_a_00456",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 13. Dr. Thomas Müller (Physics)
        {
            _id: "6896d42a045cf05360fea891", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4579", // Reference to Dr. Thomas Müller's user ID
            "publications": [
                {
                    "author": "Dr. Thomas Müller (Corresponding Author)",
                    "coAuthors": ["Wilson J", "Li W"],
                    "title": "High-Temperature Superconductivity in Layered Materials",
                    "journalName": "Nature Physics",
                    "publishingYear": 2022,
                    "volume": 3,
                    "impactFactor": 19.684,
                    "citation": "Müller T, Wilson J, Li W. High-Temperature Superconductivity in Layered Materials. Nat Phys. 2022 Mar;18(3):256-270.",
                    "doi": "10.1038/s41567-021-01439-1",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 14. Dr. Amina Ndiaye (Epidemiology)
        {
            _id: "6896d42a045cf05360fea892", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4580", // Reference to Dr. Amina Ndiaye's user ID
            "publications": [
                {
                    "author": "Dr. Amina Ndiaye (Corresponding Author)",
                    "coAuthors": ["Garcia M", "Patel R"],
                    "title": "Climate Change and Malaria Transmission in West Africa",
                    "journalName": "The Lancet Planetary Health",
                    "publishingYear": 2023,
                    "volume": 2,
                    "impactFactor": 19.173,
                    "citation": "Ndiaye A, Garcia M, Patel R. Climate Change and Malaria Transmission in West Africa. Lancet Planet Health. 2023 Feb;7(2):e145-e156.",
                    "doi": "10.1016/S2542-5196(22)00312-3",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 15. Dr. Raj Patel (Biochemistry)
        {
            _id: "6896d42a045cf05360fea893", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4581", // Reference to Dr. Raj Patel's user ID
            "publications": [
                {
                    "author": "Dr. Raj Patel (Corresponding Author)",
                    "coAuthors": ["Kim R", "Abdullah A"],
                    "title": "Enzyme Engineering for Plastic Degradation",
                    "journalName": "Nature Catalysis",
                    "publishingYear": 2022,
                    "volume": 4,
                    "impactFactor": 30.471,
                    "citation": "Patel R, Kim R, Abdullah A. Enzyme Engineering for Plastic Degradation. Nat Catal. 2022 Apr;5(4):324-338.",
                    "doi": "10.1038/s41929-022-00775-6",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 16. Dr. Yuki Tanaka (Computer Engineering)
        {
            _id: "6896d42a045cf05360fea894", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4582", // Reference to Dr. Yuki Tanaka's user ID
            "publications": [
                {
                    "author": "Dr. Yuki Tanaka (Corresponding Author)",
                    "coAuthors": ["Hassan A", "Smith"],
                    "title": "Neuromorphic Computing Architectures for Edge Devices",
                    "journalName": "IEEE Micro",
                    "publishingYear": 2023,
                    "volume": 1,
                    "impactFactor": 3.172,
                    "citation": "Tanaka Y, Hassan A, Smith. Neuromorphic Computing Architectures for Edge Devices. IEEE Micro. 2023 Jan;43(1):25-37.",
                    "doi": "10.1109/MM.2022.3212345",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 17. Dr. Carlos Mendez (Environmental Engineering)
        {
            _id: "6896d42a045cf05360fea895", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4583", // Reference to Dr. Carlos Mendez's user ID
            "publications": [
                {
                    "author": "Dr. Carlos Mendez (Corresponding Author)",
                    "coAuthors": ["Mahmood A", "Garcia M"],
                    "title": "Low-Energy Desalination Technologies for Arid Regions",
                    "journalName": "Nature Water",
                    "publishingYear": 2023,
                    "volume": 2,
                    "impactFactor": 18.000,
                    "citation": "Mendez C, Mahmood A, Garcia M. Low-Energy Desalination Technologies for Arid Regions. Nat Water. 2023 Mar;1(3):234-248.",
                    "doi": "10.1038/s44221-023-00034-3",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 18. Dr. Emma Wilson (Neuroscience)
        {
            _id: "6896d42a045cf05360fea896", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4584", // Reference to Dr. Emma Wilson's user ID
            "publications": [
                {
                    "author": "Dr. Emma Wilson (Corresponding Author)",
                    "coAuthors": ["Ndiaye A", "Khan F"],
                    "title": "Neural Mechanisms of Memory Consolidation During Sleep",
                    "journalName": "Nature Neuroscience",
                    "publishingYear": 2022,
                    "volume": 3,
                    "impactFactor": 28.771,
                    "citation": "Wilson E, Ndiaye A, Khan F. Neural Mechanisms of Memory Consolidation During Sleep. Nat Neurosci. 2022 Mar;25(3):401-415.",
                    "doi": "10.1038/s41593-021-00993-4",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 19. Dr. Muhammad Ali (Mathematics)
        {
            _id: "6896d42a045cf05360fea897", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4585", // Reference to Dr. Muhammad Ali's user ID
            "publications": [
                {
                    "author": "Dr. Muhammad Ali (Corresponding Author)",
                    "coAuthors": ["Müller T", "Chen W"],
                    "title": "Mathematical Modeling of Turbulent Fluid Flow",
                    "journalName": "Journal of Fluid Mechanics",
                    "publishingYear": 2023,
                    "volume": 1,
                    "impactFactor": 4.103,
                    "citation": "Ali M, Müller T, Chen W. Mathematical Modeling of Turbulent Fluid Flow. J Fluid Mech. 2023 Jan;954:A45.",
                    "doi": "10.1017/jfm.2022.1054",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 20. Dr. Li Wei (Materials Science)
        {
            _id: "6896d42a045cf05360fea898", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4586", // Reference to Dr. Li Wei's user ID
            "publications": [
                {
                    "author": "Dr. Li Wei (Corresponding Author)",
                    "coAuthors": ["Petrova E", "Tanaka Y"],
                    "title": "Graphene-Based Flexible Electronics for Wearable Devices",
                    "journalName": "Advanced Functional Materials",
                    "publishingYear": 2022,
                    "volume": 4,
                    "impactFactor": 19.924,
                    "citation": "Li W, Petrova E, Tanaka Y. Graphene-Based Flexible Electronics for Wearable Devices. Adv Funct Mater. 2022 Apr;32(16):2201234.",
                    "doi": "10.1002/adfm.202201234",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        },

        // 21. Dr. Anna Kowalski (Chemistry)
        {
            _id: "6896d42a045cf05360fea899", // Unique ID for the publication
            user: "64d4f8b2c9e77b1a2c8b4587", // Reference to Dr. Anna Kowalski's user ID
            "publications": [
                {
                    "author": "Dr. Anna Kowalski (Corresponding Author)",
                    "coAuthors": ["Abdullah A", "Patel R"],
                    "title": "Green Catalytic Processes for Pharmaceutical Synthesis",
                    "journalName": "ACS Sustainable Chemistry & Engineering",
                    "publishingYear": 2023,
                    "volume": 2,
                    "impactFactor": 9.224,
                    "citation": "Kowalski A, Abdullah A, Patel R. Green Catalytic Processes for Pharmaceutical Synthesis. ACS Sustain Chem Eng. 2023 Feb;11(6):2234-2248.",
                    "doi": "10.1021/acssuschemeng.2c05678",
                    "journalType": "International",
                    "hecRecognized": true,

                }
            ]
        }


    ];
    await PublicationModel.insertMany(publications);
    console.log('Publications seeded successfully');
};
export default seedPublications;