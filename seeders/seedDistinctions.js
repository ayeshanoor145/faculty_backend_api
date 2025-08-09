const seedDistinctions = async () => {
    const module = await import('../models/distinctions.js');
    const DistinctionModel = module.default;
    const count = await DistinctionModel.countDocuments();
    if (count > 0) {
        console.log('Distinctions already seeded');
        return;
    }

    const distinctions = [

        // 1. Dr. Smith (Computer Science - AI/ML)
        {
            _id : "6896d42a045cf05360fea8a1",
            user: "64d4f8b2c9e77b1a2c8b4567",
            distinctions: [
                {
                    awardName: "HEC Outstanding Researcher Award in Artificial Intelligence",
                    year: 2022,
                    scope: "National",
                    awardingBody: "Higher Education Commission of Pakistan"
                },
                {
                    awardName: "Best Paper Award - AAAI Conference",
                    year: 2021,
                    scope: "International",
                    awardingBody: "Association for the Advancement of Artificial Intelligence"
                },
                {
                    awardName: "MIT Technology Review Innovator Under 35",
                    year: 2018,
                    scope: "International",
                    awardingBody: "MIT Technology Review"
                }
            ]
        },

        // 2. Dr. Sarah (Data Science)
        {
            _id : "6896d42a045cf05360fea8a2",
            user: "64d4f8b2c9e77b1a2c8b4568",
            distinctions: [
                {
                    awardName: "Data Science Innovation Award",
                    year: 2021,
                    scope: "International",
                    awardingBody: "ACM Special Interest Group on Knowledge Discovery"
                },
                {
                    awardName: "Outstanding Faculty Researcher",
                    year: 2020,
                    scope: "National",
                    awardingBody: "National Science Foundation (USA)"
                }
            ]
        },

        // 3. Prof. Chen Wei (Deep Learning)
        {
            _id : "6896d42a045cf05360fea8a3",
            user: "64d4f8b2c9e77b1a2c8b4569",
            distinctions: [
                {
                    awardName: "IEEE Neural Networks Pioneer Award",
                    year: 2022,
                    scope: "International",
                    awardingBody: "IEEE Computational Intelligence Society"
                },
                {
                    awardName: "China National Science Fund for Distinguished Young Scholars",
                    year: 2019,
                    scope: "National",
                    awardingBody: "National Natural Science Foundation of China"
                }
            ]
        },

        // 4. Dr. Fatima Khan (Biomedical Engineering)
        {
            _id : "6896d42a045cf05360fea8a4",
            user: "64d4f8b2c9e77b1a2c8b4570",
            distinctions: [
                {
                    awardName: "Young Scientist Award in Medical Engineering",
                    year: 2021,
                    scope: "International",
                    awardingBody: "International Federation for Medical and Biological Engineering"
                },
                {
                    awardName: "HEC Best Emerging Researcher",
                    year: 2020,
                    scope: "National",
                    awardingBody: "Higher Education Commission of Pakistan"
                }
            ]
        },

        // 5. Dr. Ahmed Mahmood (Electrical Engineering)
        {
            _id : "6896d42a045cf05360fea8a5",
            user: "64d4f8b2c9e77b1a2c8b4571",
            distinctions: [
                {
                    awardName: "IEEE Power & Energy Society Outstanding Engineer",
                    year: 2022,
                    scope: "International",
                    awardingBody: "IEEE Power & Energy Society"
                },
                {
                    awardName: "Sitara-i-Imtiaz for Science",
                    year: 2021,
                    scope: "National",
                    awardingBody: "Government of Pakistan"
                }
            ]
        },

        // 6. Dr. Maria Garcia (Environmental Science)
        {
            _id : "6896d42a045cf05360fea8a6",
            user: "64d4f8b2c9e77b1a2c8b4572",
            distinctions: [
                {
                    awardName: "Champion of Earth Award",
                    year: 2022,
                    scope: "International",
                    awardingBody: "United Nations Environment Programme"
                },
                {
                    awardName: "National Ecology Prize (Mexico)",
                    year: 2020,
                    scope: "National",
                    awardingBody: "Mexican Ministry of Environment"
                }
            ]
        },

        // 7. Dr. James Wilson (Physics - Quantum)
        {
            _id : "6896d42a045cf05360fea8a7",
            user: "64d4f8b2c9e77b1a2c8b4573",
            distinctions: [
                {
                    awardName: "Maxwell Medal and Prize",
                    year: 2021,
                    scope: "International",
                    awardingBody: "Institute of Physics"
                },
                {
                    awardName: "Royal Society Wolfson Research Merit Award",
                    year: 2019,
                    scope: "National",
                    awardingBody: "Royal Society"
                }
            ]
        },

        // 8. Dr. Aisha Abdullah (Chemistry - Nanotech)
        {
            _id : "6896d42a045cf05360fea8a8",
            user: "64d4f8b2c9e77b1a2c8b4574",
            distinctions: [
                {
                    awardName: "L'Oréal-UNESCO For Women in Science Award",
                    year: 2022,
                    scope: "International",
                    awardingBody: "UNESCO"
                },
                {
                    awardName: "King Faisal International Prize for Science",
                    year: 2021,
                    scope: "National",
                    awardingBody: "King Faisal Foundation"
                }
            ]
        },

        // 9. Dr. Robert Kim (Biotechnology)
        {
            _id : "6896d42a045cf05360fea8a9",
            user: "64d4f8b2c9e77b1a2c8b4575",
            distinctions: [
                {
                    awardName: "CRISPR Innovator Award",
                    year: 2023,
                    scope: "International",
                    awardingBody: "International Society for Genome Editing"
                },
                {
                    awardName: "Korean Young Scientist Award",
                    year: 2021,
                    scope: "National",
                    awardingBody: "Korean Academy of Science and Technology"
                }
            ]
        },

        // 10. Dr. Elena Petrova (Materials Science)
        {
            _id : "6896d42a045cf05360fea8aa",
            user: "64d4f8b2c9e77b1a2c8b4576",
            distinctions: [
                {
                    awardName: "Materials Research Society Medal",
                    year: 2022,
                    scope: "International",
                    awardingBody: "Materials Research Society"
                },
                {
                    awardName: "Russian State Prize for Science and Technology",
                    year: 2020,
                    scope: "National",
                    awardingBody: "Government of Russia"
                }
            ]
        },

        // 11. Dr. Ali Hassan (Mechanical Engineering - Robotics)
        {
            _id : "6896d42a045cf05360fea8ab",
            user: "64d4f8b2c9e77b1a2c8b4577",
            distinctions: [
                {
                    awardName: "IEEE Robotics Pioneer Award",
                    year: 2021,
                    scope: "International",
                    awardingBody: "IEEE Robotics and Automation Society"
                },
                {
                    awardName: "Prime Minister's Award for Innovation in Engineering",
                    year: 2020,
                    scope: "National",
                    awardingBody: "Government of Pakistan"
                }
            ]
        },

        // 12. Dr. Sophia Rodriguez (NLP)
        {
            _id : "6896d42a045cf05360fea8ac",
            user: "64d4f8b2c9e77b1a2c8b4578",
            distinctions: [
                {
                    awardName: "ACL Outstanding Paper Award",
                    year: 2022,
                    scope: "International",
                    awardingBody: "Association for Computational Linguistics"
                },
                {
                    awardName: "Argentina National Award for Scientific Excellence",
                    year: 2021,
                    scope: "National",
                    awardingBody: "Argentine Ministry of Science"
                }
            ]
        },

        // 13. Dr. Thomas Müller (Physics)
        {
            _id : "6896d42a045cf05360fea8ad",
            user: "64d4f8b2c9e77b1a2c8b4579",
            distinctions: [
                {
                    awardName: "Oliver E. Buckley Condensed Matter Prize",
                    year: 2022,
                    scope: "International",
                    awardingBody: "American Physical Society"
                },
                {
                    awardName: "Gottfried Wilhelm Leibniz Prize",
                    year: 2020,
                    scope: "National",
                    awardingBody: "German Research Foundation"
                }
            ]
        },

        // 14. Dr. Amina Ndiaye (Epidemiology)
        {
            _id : "6896d42a045cf05360fea8ae",
            user: "64d4f8b2c9e77b1a2c8b4580",
            distinctions: [
                {
                    awardName: "Royal Society Africa Prize",
                    year: 2021,
                    scope: "International",
                    awardingBody: "Royal Society"
                },
                {
                    awardName: "Senegal National Order of Merit",
                    year: 2020,
                    scope: "National",
                    awardingBody: "Government of Senegal"
                }
            ]
        },

        // 15. Dr. Raj Patel (Biochemistry)
        {
            _id : "6896d42a045cf05360fea8af",
            user: "64d4f8b2c9e77b1a2c8b4581",
            distinctions: [
                {
                    awardName: "Biotechnology Innovation Award",
                    year: 2022,
                    scope: "International",
                    awardingBody: "International Union of Biochemistry"
                },
                {
                    awardName: "Canada Gairdner International Award",
                    year: 2021,
                    scope: "National",
                    awardingBody: "Gairdner Foundation"
                }
            ]
        },

        // 16. Dr. Yuki Tanaka (Computer Engineering)
        {
            _id : "6896d42a045cf05360fea8b0",
            user: "64d4f8b2c9e77b1a2c8b4582",
            distinctions: [
                {
                    awardName: "IEEE Computer Society Technical Achievement Award",
                    year: 2023,
                    scope: "International",
                    awardingBody: "IEEE Computer Society"
                },
                {
                    awardName: "Japan Academy Prize",
                    year: 2021,
                    scope: "National",
                    awardingBody: "Japan Academy"
                }
            ]
        },

        // 17. Dr. Carlos Mendez (Environmental Engineering)
        {
            _id : "6896d42a045cf05360fea8b1",

            user: "64d4f8b2c9e77b1a2c8b4583",
            distinctions: [
                {
                    awardName: "Stockholm Water Prize",
                    year: 2022,
                    scope: "International",
                    awardingBody: "Stockholm International Water Institute"
                },
                {
                    awardName: "National Water Award (Mexico)",
                    year: 2020,
                    scope: "National",
                    awardingBody: "Mexican National Water Commission"
                }
            ]
        },

        // 18. Dr. Emma Wilson (Neuroscience)
        {
            _id : "6896d42a045cf05360fea8b2",
            user: "64d4f8b2c9e77b1a2c8b4584",
            distinctions: [
                {
                    awardName: "Brain Prize",
                    year: 2021,
                    scope: "International",
                    awardingBody: "Lundbeck Foundation"
                },
                {
                    awardName: "Royal Society Rosalind Franklin Award",
                    year: 2020,
                    scope: "National",
                    awardingBody: "Royal Society"
                }
            ]
        },

        // 19. Dr. Muhammad Ali (Mathematics)
        {
            _id : "6896d42a045cf05360fea8b3",
            user: "64d4f8b2c9e77b1a2c8b4585",
            distinctions: [
                {

                    awardName: "Hilbert Prize for Applied Mathematics",
                    year: 2022,
                    scope: "International",
                    awardingBody: "International Mathematical Union"
                },
                {
                    awardName: "Sitara-i-Imtiaz for Science",
                    year: 2021,
                    scope: "National",
                    awardingBody: "Government of Pakistan"
                }
            ]
        },

        // 20. Dr. Li Wei (Materials Science)
        {
            _id : "6896d42a045cf05360fea8b4",
            user: "64d4f8b2c9e77b1a2c8b4586",
            distinctions: [
                {
                    awardName: "MRS Outstanding Young Investigator Award",
                    year: 2023,
                    scope: "International",
                    awardingBody: "Materials Research Society"
                },
                {
                    awardName: "China Youth Science and Technology Award",
                    year: 2021,
                    scope: "National",
                    awardingBody: "China Association for Science and Technology"
                }
            ]
        },

        // 21. Dr. Anna Kowalski (Chemistry)
        {
            _id : "6896d42a045cf05360fea8b5",
            user: "64d4f8b2c9e77b1a2c8b4587",
            distinctions: [
                {
                    awardName: "ACS Award for Green Chemistry",
                    year: 2022,
                    scope: "International",
                    awardingBody: "American Chemical Society"
                },
                {
                    awardName: "Polish Science Foundation Award",
                    year: 2021,
                    scope: "National",
                    awardingBody: "Polish Ministry of Science"
                }
            ]
        }

    ];

    await DistinctionModel.insertMany(distinctions);
    console.log('Distinctions seeded Successfully');
};
export default seedDistinctions;