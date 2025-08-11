const seedPersonalDetails = async () => {
    const module = await import("../models/personalDetails.js");
    const PersonalDetailModel = module.default;
    const count = await PersonalDetailModel.countDocuments();
    if (count > 0) {
        console.log("PersonalDetails already seeded");
        return;
    }

    const personalDetails = [
        {
            _id: "6896d42a045cf05360fea873",
            user: "64d4f8b2c9e77b1a2c8b4567", // Reference to Dr. Smith's user ID
            fullName: "Dr. Smith",
            academicTitle: "Professor",
            designation: "Senior Research Fellow",
            subject: "Computer Science",
            majorSpecialization: "Artificial Intelligence",
            researchArea: [
                "Machine Learning",
                "Natural Language Processing",
                "Computer Vision",
            ],
            nationality: {
                type: "single",
                countries: ["Pakistan"],
            },
            researcherId: "A-1234-5678",
            researcherUrl: "https://www.researcherid.com/A-1234-5678",
            orcidId: "0000-0001-2345-6789",
            orcidUrl: "https://orcid.org/0000-0001-2345-6789",
            googleScholarLink: "https://scholar.google.com/citations?user=XYZ123",
            email: "smith@gmail.com",
            contactNumber: "03234567891",
            biosketch:
                "Dr. Smith is a leading expert in Artificial Intelligence with over 15 years of experience in machine learning applications. As a Professor of Computer Science, he has published over 100 peer-reviewed papers in top-tier conferences and journals.",
        },

        {
            _id: "6896d42a045cf05360fea874",
            user: "64d4f8b2c9e77b1a2c8b4568", // Reference to Dr. Sarah's user ID
            fullName: "Dr. Sarah",
            academicTitle: "Professor",
            designation: "Department Head",
            subject: "Computer Science",
            majorSpecialization: "Data Science",
            researchArea: ["Big Data", "Machine Learning"],
            nationality: { type: "single", countries: ["USA"] },
            researcherId: "B-2345-6789",
            researcherUrl: "https://researcherid.com/B-2345-6789",
            orcidId: "0000-0002-3456-7890",
            orcidUrl: "https://orcid.org/0000-0002-3456-7890",
            googleScholarLink: "https://scholar.google.com/sjohnson",
            email: "sjohnson@univ.edu",
            contactNumber: "+12025551234",
            biosketch:
                "Data science expert with 15 years experience in industry and academia.",
        },

        {
            _id: "6896d42a045cf05360fea875",
            user: "64d4f8b2c9e77b1a2c8b4569", // Reference to Prof. Chen Wei's user ID
            fullName: "Prof. Chen Wei",
            academicTitle: "Associate Professor",
            designation: "AI Lab Director",
            subject: "Computer Science",
            majorSpecialization: "Deep Learning",
            researchArea: ["Neural Networks", "Computer Vision"],
            nationality: { type: "single", countries: ["China"] },
            researcherId: "C-3456-7890",
            researcherUrl: "https://researcherid.com/C-3456-7890",
            orcidId: "0000-0003-4567-8901",
            orcidUrl: "https://orcid.org/0000-0003-4567-8901",
            googleScholarLink: "https://scholar.google.com/chenwei",
            email: "chenwei@ai.edu.cn",
            contactNumber: "+8613812345678",
            biosketch:
                "Pioneer in deep learning with multiple award-winning publications.",
        },
        {
            _id: "6896d42a045cf05360fea876",
            user: "64d4f8b2c9e77b1a2c8b4570", // Reference to Dr. Fatima Khan's user ID
            fullName: "Dr. Fatima Khan",
            academicTitle: "Assistant Professor",
            designation: "Research Scientist",
            subject: "Biomedical Engineering",
            majorSpecialization: "Neural Engineering",
            researchArea: ["BCI", "Neuroprosthetics"],
            nationality: { type: "single", countries: ["Pakistan"] },
            researcherId: "D-4567-8901",
            researcherUrl: "https://researcherid.com/D-4567-8901",
            orcidId: "0000-0004-5678-9012",
            orcidUrl: "https://orcid.org/0000-0004-5678-9012",
            googleScholarLink: "https://scholar.google.com/fkhan",
            email: "fkhan@biomed.edu.pk",
            contactNumber: "03001234567",
            biosketch:
                "Developing affordable medical devices for neurological disorders.",
        },

        {
            _id: "6896d42a045cf05360fea877",
            user: "64d4f8b2c9e77b1a2c8b4571", // Reference to Dr. Ahmed Mahmood's user ID
            fullName: "Dr. Ahmed Mahmood",
            academicTitle: "Professor",
            designation: "Dean of Engineering",
            subject: "Electrical Engineering",
            majorSpecialization: "Power Systems",
            researchArea: ["Smart Grids", "Renewable Energy"],
            nationality: { type: "single", countries: ["Pakistan"] },
            researcherId: "E-5678-9012",
            researcherUrl: "https://researcherid.com/E-5678-9012",
            orcidId: "0000-0005-6789-0123",
            orcidUrl: "https://orcid.org/0000-0005-6789-0123",
            googleScholarLink: "https://scholar.google.com/amahmood",
            email: "amahmood@eng.edu.pk",
            contactNumber: "03331234567",
            biosketch:
                "Leading researcher in sustainable energy solutions for developing countries.",
        },

        {
            _id: "6896d42a045cf05360fea878",
            user: "64d4f8b2c9e77b1a2c8b4572", // Reference to Dr. Maria Garcia's user ID
            fullName: "Dr. Maria Garcia",
            academicTitle: "Research Professor",
            designation: "Principal Investigator",
            subject: "Environmental Science",
            majorSpecialization: "Climate Change",
            researchArea: ["Carbon Sequestration", "Sustainability"],
            nationality: { type: "dual", countries: ["Spain", "Mexico"] },
            researcherId: "F-6789-0123",
            researcherUrl: "https://researcherid.com/F-6789-0123",
            orcidId: "0000-0006-7890-1234",
            orcidUrl: "https://orcid.org/0000-0006-7890-1234",
            googleScholarLink: "https://scholar.google.com/mgarcia",
            email: "mgarcia@envsci.edu",
            contactNumber: "+525512345678",
            biosketch:
                "Climate scientist specializing in Latin American ecosystems and policy.",
        },

        {
            _id: "6896d42a045cf05360fea879",
            user: "64d4f8b2c9e77b1a2c8b4573", // Reference to Dr. James Wilson's user ID
            fullName: "Dr. James Wilson",
            academicTitle: "Professor",
            designation: "Department Chair",
            subject: "Physics",
            majorSpecialization: "Quantum Mechanics",
            researchArea: ["Quantum Computing", "Particle Physics"],
            nationality: { type: "single", countries: ["UK"] },
            researcherId: "G-7890-1234",
            researcherUrl: "https://researcherid.com/G-7890-1234",
            orcidId: "0000-0007-8901-2345",
            orcidUrl: "https://orcid.org/0000-0007-8901-2345",
            googleScholarLink: "https://scholar.google.com/jwilson",
            email: "j.wilson@physics.edu",
            contactNumber: "+441234567890",
            biosketch:
                "Theoretical physicist working on quantum information theory applications.",
        },

        {
            _id: "6896d42a045cf05360fea87a",
            user: "64d4f8b2c9e77b1a2c8b4574", // Reference to Dr. Aisha Abdullah's user ID
            fullName: "Dr. Aisha Abdullah",
            academicTitle: "Associate Professor",
            designation: "Research Lead",
            subject: "Chemistry",
            majorSpecialization: "Nanotechnology",
            researchArea: ["Nanomaterials", "Drug Delivery"],
            nationality: { type: "single", countries: ["Saudi Arabia"] },
            researcherId: "H-8901-2345",
            researcherUrl: "https://researcherid.com/H-8901-2345",
            orcidId: "0000-0008-9012-3456",
            orcidUrl: "https://orcid.org/0000-0008-9012-3456",
            googleScholarLink: "https://scholar.google.com/aabdullah",
            email: "a.abdullah@chem.edu.sa",
            contactNumber: "+966501234567",
            biosketch:
                "Developing nano-scale solutions for targeted cancer therapies.",
        },

        {
            _id: "6896d42a045cf05360fea87b",
            user: "64d4f8b2c9e77b1a2c8b4575", // Reference to Dr. Robert Kim's user ID
            fullName: "Dr. Robert Kim",
            academicTitle: "Assistant Professor",
            designation: "Lab Director",
            subject: "Biotechnology",
            majorSpecialization: "Genetic Engineering",
            researchArea: ["CRISPR", "Synthetic Biology"],
            nationality: { type: "dual", countries: ["South Korea", "USA"] },
            researcherId: "I-9012-3456",
            researcherUrl: "https://researcherid.com/I-9012-3456",
            orcidId: "0000-0009-0123-4567",
            orcidUrl: "https://orcid.org/0000-0009-0123-4567",
            googleScholarLink: "https://scholar.google.com/rkim",
            email: "r.kim@biotech.edu",
            contactNumber: "+821012345678",
            biosketch:
                "Genetic engineering specialist focusing on agricultural applications.",
        },

        {
            _id: "6896d42a045cf05360fea87c",
            user: "64d4f8b2c9e77b1a2c8b4576", // Reference to Dr. Elena Petrova's user ID
            fullName: "Dr. Elena Petrova",
            academicTitle: "Professor",
            designation: "Research Coordinator",
            subject: "Materials Science",
            majorSpecialization: "Polymers",
            researchArea: ["Biodegradable Materials", "Composite Materials"],
            nationality: { type: "single", countries: ["Russia"] },
            researcherId: "J-0123-4567",
            researcherUrl: "https://researcherid.com/J-0123-4567",
            orcidId: "0000-0010-1234-5678",
            orcidUrl: "https://orcid.org/0000-0010-1234-5678",
            googleScholarLink: "https://scholar.google.com/epetrova",
            email: "e.petrova@matsci.ru",
            contactNumber: "+79161234567",
            biosketch:
                "Developing sustainable polymer materials for industrial applications.",
        },

        {
            _id: "6896d42a045cf05360fea87d",
            user: "64d4f8b2c9e77b1a2c8b4577", // Reference to Dr. Ali Hassan's user ID
            fullName: "Dr. Ali Hassan",
            academicTitle: "Professor",
            designation: "Department Head",
            subject: "Mechanical Engineering",
            majorSpecialization: "Robotics",
            researchArea: ["Industrial Automation", "AI Robotics"],
            nationality: { type: "single", countries: ["Pakistan"] },
            researcherId: "K-1234-5678",
            researcherUrl: "https://researcherid.com/K-1234-5678",
            orcidId: "0000-0011-2345-6789",
            orcidUrl: "https://orcid.org/0000-0011-2345-6789",
            googleScholarLink: "https://scholar.google.com/ahassan",
            email: "a.hassan@mech.pk",
            contactNumber: "03011234567",
            biosketch:
                "Leading robotics researcher with focus on manufacturing applications.",
        },

        {
            _id: "6896d42a045cf05360fea87e",
            user: "64d4f8b2c9e77b1a2c8b4578", // Reference to Dr. Sophia Rodriguez's user ID
            fullName: "Dr. Sophia Rodriguez",
            academicTitle: "Associate Professor",
            designation: "AI Research Lead",
            subject: "Computer Science",
            majorSpecialization: "Natural Language Processing",
            researchArea: ["Machine Translation", "Sentiment Analysis"],
            nationality: { type: "dual", countries: ["Spain", "Argentina"] },
            researcherId: "L-2345-6789",
            researcherUrl: "https://researcherid.com/L-2345-6789",
            orcidId: "0000-0012-3456-7890",
            orcidUrl: "https://orcid.org/0000-0012-3456-7890",
            googleScholarLink: "https://scholar.google.com/srodriguez",
            email: "s.rodriguez@ai.edu",
            contactNumber: "+541112345678",
            biosketch: "Multilingual NLP expert focusing on low-resource languages.",
        },

        {
            _id: "6896d42a045cf05360fea87f",
            user: "64d4f8b2c9e77b1a2c8b4579", // Reference to Dr. Thomas Müller's user ID
            fullName: "Dr. Thomas Müller",
            academicTitle: "Professor",
            designation: "Institute Director",
            subject: "Physics",
            majorSpecialization: "Condensed Matter",
            researchArea: ["Superconductivity", "Quantum Materials"],
            nationality: { type: "single", countries: ["Germany"] },
            researcherId: "M-3456-7890",
            researcherUrl: "https://researcherid.com/M-3456-7890",
            orcidId: "0000-0013-4567-8901",
            orcidUrl: "https://orcid.org/0000-0013-4567-8901",
            googleScholarLink: "https://scholar.google.com/tmuller",
            email: "t.muller@physics.de",
            contactNumber: "+4915123456789",
            biosketch: "Experimental physicist working on novel quantum materials.",
        },

        {
            _id: "6896d42a045cf05360fea880",
            user: "64d4f8b2c9e77b1a2c8b4580", // Reference to Dr. Amina Ndiaye's user ID
            fullName: "Dr. Amina Ndiaye",
            academicTitle: "Research Professor",
            designation: "Public Health Lead",
            subject: "Epidemiology",
            majorSpecialization: "Infectious Diseases",
            researchArea: ["Malaria", "Tropical Diseases"],
            nationality: { type: "single", countries: ["Senegal"] },
            researcherId: "N-4567-8901",
            researcherUrl: "https://researcherid.com/N-4567-8901",
            orcidId: "0000-0014-5678-9012",
            orcidUrl: "https://orcid.org/0000-0014-5678-9012",
            googleScholarLink: "https://scholar.google.com/andiaye",
            email: "a.ndiaye@health.sn",
            contactNumber: "+221771234567",
            biosketch: "Leading expert on infectious disease control in West Africa.",
        },

        {
            _id: "6896d42a045cf05360fea881",
            user: "64d4f8b2c9e77b1a2c8b4581", // Reference to Dr. Raj Patel's user ID
            fullName: "Dr. Raj Patel",
            academicTitle: "Assistant Professor",
            designation: "Lab Head",
            subject: "Biochemistry",
            majorSpecialization: "Enzymology",
            researchArea: ["Protein Engineering", "Metabolic Pathways"],
            nationality: { type: "dual", countries: ["India", "Canada"] },
            researcherId: "O-5678-9012",
            researcherUrl: "https://researcherid.com/O-5678-9012",
            orcidId: "0000-0015-6789-0123",
            orcidUrl: "https://orcid.org/0000-0015-6789-0123",
            googleScholarLink: "https://scholar.google.com/rpatel",
            email: "r.patel@biochem.ca",
            contactNumber: "+14161234567",
            biosketch:
                "Enzyme engineering specialist developing industrial biocatalysts.",
        },

        {
            _id: "6896d42a045cf05360fea882",
            user: "64d4f8b2c9e77b1a2c8b4582", // Reference to Dr. Yuki Tanaka's user ID
            fullName: "Dr. Yuki Tanaka",
            academicTitle: "Professor",
            designation: "Department Chair",
            subject: "Computer Engineering",
            majorSpecialization: "Computer Architecture",
            researchArea: ["Quantum Computing", "Neuromorphic Computing"],
            nationality: { type: "single", countries: ["Japan"] },
            researcherId: "P-6789-0123",
            researcherUrl: "https://researcherid.com/P-6789-0123",
            orcidId: "0000-0016-7890-1234",
            orcidUrl: "https://orcid.org/0000-0016-7890-1234",
            googleScholarLink: "https://scholar.google.com/ytanaka",
            email: "y.tanaka@ce.jp",
            contactNumber: "+81312345678",
            biosketch:
                "Computer architect working on next-generation computing paradigms.",
        },

        {
            _id: "6896d42a045cf05360fea883",
            user: "64d4f8b2c9e77b1a2c8b4583", // Reference to Dr. Carlos Mendez's user ID
            fullName: "Dr. Carlos Mendez",
            academicTitle: "Associate Professor",
            designation: "Research Coordinator",
            subject: "Environmental Engineering",
            majorSpecialization: "Water Treatment",
            researchArea: ["Membrane Technology", "Desalination"],
            nationality: { type: "single", countries: ["Mexico"] },
            researcherId: "Q-7890-1234",
            researcherUrl: "https://researcherid.com/Q-7890-1234",
            orcidId: "0000-0017-8901-2345",
            orcidUrl: "https://orcid.org/0000-0017-8901-2345",
            googleScholarLink: "https://scholar.google.com/cmendez",
            email: "c.mendez@enveng.mx",
            contactNumber: "+525512345678",
            biosketch:
                "Developing affordable water treatment solutions for arid regions.",
        },

        {
            _id: "6896d42a045cf05360fea884",
            user: "64d4f8b2c9e77b1a2c8b4584", // Reference to Dr. Emma Wilson's user ID
            fullName: "Dr. Emma Wilson",
            academicTitle: "Professor",
            designation: "Research Director",
            subject: "Neuroscience",
            majorSpecialization: "Cognitive Neuroscience",
            researchArea: ["Memory Systems", "Brain Plasticity"],
            nationality: { type: "dual", countries: ["UK", "USA"] },
            researcherId: "R-8901-2345",
            researcherUrl: "https://researcherid.com/R-8901-2345",
            orcidId: "0000-0018-9012-3456",
            orcidUrl: "https://orcid.org/0000-0018-9012-3456",
            googleScholarLink: "https://scholar.google.com/ewilson",
            email: "e.wilson@neuro.edu",
            contactNumber: "+441234567890",
            biosketch:
                "Cognitive neuroscientist studying memory formation and retention.",
        },

        {
            _id: "6896d42a045cf05360fea885",
            user: "64d4f8b2c9e77b1a2c8b4585", // Reference to Dr. Muhammad Ali's user ID
            fullName: "Dr. Muhammad Ali",
            academicTitle: "Professor",
            designation: "Dean of Science",
            subject: "Mathematics",
            majorSpecialization: "Applied Mathematics",
            researchArea: ["Fluid Dynamics", "Mathematical Modeling"],
            nationality: { type: "single", countries: ["Pakistan"] },
            researcherId: "S-9012-3456",
            researcherUrl: "https://researcherid.com/S-9012-3456",
            orcidId: "0000-0019-0123-4567",
            orcidUrl: "https://orcid.org/0000-0019-0123-4567",
            googleScholarLink: "https://scholar.google.com/mali",
            email: "m.ali@math.edu.pk",
            contactNumber: "03331234567",
            biosketch:
                "Applied mathematician working on industrial and biological systems.",
        },

        {
            _id: "6896d42a045cf05360fea886",
            user: "64d4f8b2c9e77b1a2c8b4586", // Reference to Dr. Li Wei's user ID
            fullName: "Dr. Li Wei",
            academicTitle: "Research Professor",
            designation: "Lab Director",
            subject: "Materials Engineering",
            majorSpecialization: "Nanomaterials",
            researchArea: ["Graphene", "2D Materials"],
            nationality: { type: "single", countries: ["China"] },
            researcherId: "T-0123-4567",
            researcherUrl: "https://researcherid.com/T-0123-4567",
            orcidId: "0000-0020-1234-5678",
            orcidUrl: "https://orcid.org/0000-0020-1234-5678",
            googleScholarLink: "https://scholar.google.com/lwei",
            email: "l.wei@mateng.cn",
            contactNumber: "+8613812345678",
            biosketch:
                "Pioneer in graphene applications for electronics and energy storage.",
        },

        {
            _id: "6896d42a045cf05360fea887",
            user: "64d4f8b2c9e77b1a2c8b4587", // Reference to Dr. Anna Kowalski's user ID
            fullName: "Dr. Anna Kowalski",
            academicTitle: "Assistant Professor",
            designation: "Research Scientist",
            subject: "Chemistry",
            majorSpecialization: "Organic Chemistry",
            researchArea: ["Catalysis", "Green Chemistry"],
            nationality: { type: "single", countries: ["Poland"] },
            researcherId: "U-1234-5678",
            researcherUrl: "https://researcherid.com/U-1234-5678",
            orcidId: "0000-0021-2345-6789",
            orcidUrl: "https://orcid.org/0000-0021-2345-6789",
            googleScholarLink: "https://scholar.google.com/akowalski",
            email: "a.kowalski@chem.pl",
            contactNumber: "+48123456789",
            biosketch:
                "Developing sustainable catalytic processes for industrial chemistry.",
        },
    ];

    await PersonalDetailModel.insertMany(personalDetails);
    console.log("PersonalDetails seeded successfully");
};
export default seedPersonalDetails;
