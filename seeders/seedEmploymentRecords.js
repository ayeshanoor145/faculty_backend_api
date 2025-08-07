const seedEmploymentRecords = async () => {
    const module = await import('../models/employmentRecords.js');
    const EmploymentRecordModel = module.default;
    const count = await EmploymentRecordModel.countDocuments();
    if (count > 0) {
        console.log('EmploymentRecords already seeded');
        return;
    }

    const employmentRecords = [

        // 1. Dr. Smith (Computer Science - AI)
        {
            employmentRecord: [
                {
                    organization: "Massachusetts Institute of Technology (MIT)",
                    sector: "Government",
                    post: "Postdoctoral Research Associate",
                    scale: "TTS",
                    dateFrom: "2013-09-01",
                    dateTo: "2015-08-31",
                    isCurrent: false
                },
                {
                    organization: "Lahore University of Management Sciences (LUMS)",
                    sector: "Semi-Government",
                    post: "Assistant Professor",
                    scale: "BPS-19",
                    dateFrom: "2015-09-01",
                    dateTo: "2018-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of Karachi",
                    sector: "Government",
                    post: "Professor & Senior Research Fellow",
                    scale: "BPS-21",
                    dateFrom: "2018-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 2. Dr. Sarah (Computer Science - Data Science)
        {
            employmentRecord: [
                {
                    organization: "Google Inc.",
                    sector: "Private",
                    post: "Data Scientist",
                    scale: "N/A",
                    dateFrom: "2008-07-01",
                    dateTo: "2012-06-30",
                    isCurrent: false
                },
                {
                    organization: "Stanford University",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2012-09-01",
                    dateTo: "2016-08-31",
                    isCurrent: false
                },
                {
                    organization: "Harvard University",
                    sector: "Government",
                    post: "Professor & Department Head",
                    scale: "TTS",
                    dateFrom: "2016-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 3. Prof. Chen Wei (Computer Science - Deep Learning)
        {
            employmentRecord: [
                {
                    organization: "Stanford University",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2012-09-01",
                    dateTo: "2014-08-31",
                    isCurrent: false
                },
                {
                    organization: "Tsinghua University",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2014-09-01",
                    dateTo: "2017-08-31",
                    isCurrent: false
                },
                {
                    organization: "Chinese Academy of Sciences",
                    sector: "Government",
                    post: "AI Lab Director",
                    scale: "TTS",
                    dateFrom: "2017-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 4. Dr. Fatima Khan (Biomedical Engineering - Neural Engineering)
        {
            employmentRecord: [
                {
                    organization: "Johns Hopkins University",
                    sector: "Government",
                    post: "Postdoctoral Fellow",
                    scale: "TTS",
                    dateFrom: "2016-07-01",
                    dateTo: "2018-06-30",
                    isCurrent: false
                },
                {
                    organization: "Aga Khan University Hospital",
                    sector: "Private",
                    post: "Research Scientist",
                    scale: "N/A",
                    dateFrom: "2018-09-01",
                    dateTo: "2020-08-31",
                    isCurrent: false
                },
                {
                    organization: "Lahore University of Management Sciences",
                    sector: "Semi-Government",
                    post: "Assistant Professor",
                    scale: "BPS-19",
                    dateFrom: "2020-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 5. Dr. Ahmed Mahmood (Electrical Engineering - Power Systems)
        {
            employmentRecord: [
                {
                    organization: "Imperial College London",
                    sector: "Government",
                    post: "Research Associate",
                    scale: "TTS",
                    dateFrom: "2005-09-01",
                    dateTo: "2008-08-31",
                    isCurrent: false
                },
                {
                    organization: "UET Lahore",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "BPS-19",
                    dateFrom: "2008-09-01",
                    dateTo: "2013-08-31",
                    isCurrent: false
                },
                {
                    organization: "NUST Islamabad",
                    sector: "Government",
                    post: "Dean of Engineering",
                    scale: "BPS-21",
                    dateFrom: "2013-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 6. Dr. Maria Garcia (Environmental Science - Climate Change)
        {
            employmentRecord: [
                {
                    organization: "ETH Zurich",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2008-09-01",
                    dateTo: "2011-08-31",
                    isCurrent: false
                },
                {
                    organization: "National Autonomous University of Mexico",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2011-09-01",
                    dateTo: "2015-08-31",
                    isCurrent: false
                },
                {
                    organization: "Intergovernmental Panel on Climate Change",
                    sector: "Government",
                    post: "Principal Investigator",
                    scale: "TTS",
                    dateFrom: "2015-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 7. Dr. James Wilson (Physics - Quantum Mechanics)
        {
            employmentRecord: [
                {
                    organization: "MIT",
                    sector: "Government",
                    post: "Postdoctoral Fellow",
                    scale: "TTS",
                    dateFrom: "2001-09-01",
                    dateTo: "2004-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of Cambridge",
                    sector: "Government",
                    post: "Lecturer",
                    scale: "TTS",
                    dateFrom: "2004-09-01",
                    dateTo: "2008-08-31",
                    isCurrent: false
                },
                {
                    organization: "Oxford University",
                    sector: "Government",
                    post: "Department Chair",
                    scale: "TTS",
                    dateFrom: "2008-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 8. Dr. Aisha Abdullah (Chemistry - Nanotechnology)
        {
            employmentRecord: [
                {
                    organization: "University of Oxford",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2012-09-01",
                    dateTo: "2015-08-31",
                    isCurrent: false
                },
                {
                    organization: "King Saud University",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2015-09-01",
                    dateTo: "2019-08-31",
                    isCurrent: false
                },
                {
                    organization: "King Abdullah University of Science and Technology",
                    sector: "Government",
                    post: "Research Lead",
                    scale: "TTS",
                    dateFrom: "2019-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 9. Dr. Robert Kim (Biotechnology - Genetic Engineering)
        {
            employmentRecord: [
                {
                    organization: "Harvard University",
                    sector: "Government",
                    post: "Postdoctoral Fellow",
                    scale: "TTS",
                    dateFrom: "2013-09-01",
                    dateTo: "2016-08-31",
                    isCurrent: false
                },
                {
                    organization: "Seoul National University",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2016-09-01",
                    dateTo: "2019-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of California, Berkeley",
                    sector: "Government",
                    post: "Lab Director",
                    scale: "TTS",
                    dateFrom: "2019-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 10. Dr. Elena Petrova (Materials Science - Polymers)
        {
            employmentRecord: [
                {
                    organization: "ETH Zurich",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2007-09-01",
                    dateTo: "2010-08-31",
                    isCurrent: false
                },
                {
                    organization: "Moscow State University",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2010-09-01",
                    dateTo: "2014-08-31",
                    isCurrent: false
                },
                {
                    organization: "Russian Academy of Sciences",
                    sector: "Government",
                    post: "Research Coordinator",
                    scale: "TTS",
                    dateFrom: "2014-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 11. Dr. Ali Hassan (Mechanical Engineering - Robotics)
        {
            employmentRecord: [
                {
                    organization: "KAIST",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2009-09-01",
                    dateTo: "2011-08-31",
                    isCurrent: false
                },
                {
                    organization: "UET Lahore",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "BPS-19",
                    dateFrom: "2011-09-01",
                    dateTo: "2015-08-31",
                    isCurrent: false
                },
                {
                    organization: "NUST Islamabad",
                    sector: "Government",
                    post: "Department Head",
                    scale: "BPS-21",
                    dateFrom: "2015-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 12. Dr. Sophia Rodriguez (Computer Science - NLP)
        {
            employmentRecord: [
                {
                    organization: "University of Barcelona",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2012-09-01",
                    dateTo: "2015-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of Buenos Aires",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2015-09-01",
                    dateTo: "2019-08-31",
                    isCurrent: false
                },
                {
                    organization: "Barcelona Supercomputing Center",
                    sector: "Government",
                    post: "AI Research Lead",
                    scale: "TTS",
                    dateFrom: "2019-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 13. Dr. Thomas Müller (Physics - Condensed Matter)
        {
            employmentRecord: [
                {
                    organization: "Max Planck Institute",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2004-09-01",
                    dateTo: "2007-08-31",
                    isCurrent: false
                },
                {
                    organization: "Technical University of Munich",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2007-09-01",
                    dateTo: "2011-08-31",
                    isCurrent: false
                },
                {
                    organization: "Max Planck Institute",
                    sector: "Government",
                    post: "Institute Director",
                    scale: "TTS",
                    dateFrom: "2011-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 14. Dr. Amina Ndiaye (Epidemiology - Infectious Diseases)
        {
            employmentRecord: [
                {
                    organization: "London School of Hygiene & Tropical Medicine",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2010-09-01",
                    dateTo: "2013-08-31",
                    isCurrent: false
                },
                {
                    organization: "World Health Organization",
                    sector: "Government",
                    post: "Field Epidemiologist",
                    scale: "TTS",
                    dateFrom: "2013-09-01",
                    dateTo: "2017-08-31",
                    isCurrent: false
                },
                {
                    organization: "Cheikh Anta Diop University",
                    sector: "Government",
                    post: "Public Health Lead",
                    scale: "TTS",
                    dateFrom: "2017-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 15. Dr. Raj Patel (Biochemistry - Enzymology)
        {
            employmentRecord: [
                {
                    organization: "University of Toronto",
                    sector: "Government",
                    post: "Postdoctoral Fellow",
                    scale: "TTS",
                    dateFrom: "2011-09-01",
                    dateTo: "2014-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of Delhi",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2014-09-01",
                    dateTo: "2017-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of British Columbia",
                    sector: "Government",
                    post: "Lab Head",
                    scale: "TTS",
                    dateFrom: "2017-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 16. Dr. Yuki Tanaka (Computer Engineering - Computer Architecture)
        {
            employmentRecord: [
                {
                    organization: "Stanford University",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2010-09-01",
                    dateTo: "2013-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of Tokyo",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2013-09-01",
                    dateTo: "2017-08-31",
                    isCurrent: false
                },
                {
                    organization: "RIKEN Center for Computational Science",
                    sector: "Government",
                    post: "Department Chair",
                    scale: "TTS",
                    dateFrom: "2017-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 17. Dr. Carlos Mendez (Environmental Engineering - Water Treatment)
        {
            employmentRecord: [
                {
                    organization: "University of California, Berkeley",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2012-09-01",
                    dateTo: "2015-08-31",
                    isCurrent: false
                },
                {
                    organization: "National Autonomous University of Mexico",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2015-09-01",
                    dateTo: "2019-08-31",
                    isCurrent: false
                },
                {
                    organization: "Mexican Water Research Institute",
                    sector: "Government",
                    post: "Research Coordinator",
                    scale: "TTS",
                    dateFrom: "2019-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 18. Dr. Emma Wilson (Neuroscience - Cognitive Neuroscience)
        {
            employmentRecord: [
                {
                    organization: "Harvard University",
                    sector: "Government",
                    post: "Postdoctoral Fellow",
                    scale: "TTS",
                    dateFrom: "2007-09-01",
                    dateTo: "2010-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of Oxford",
                    sector: "Government",
                    post: "Lecturer",
                    scale: "TTS",
                    dateFrom: "2010-09-01",
                    dateTo: "2014-08-31",
                    isCurrent: false
                },
                {
                    organization: "MIT",
                    sector: "Government",
                    post: "Research Director",
                    scale: "TTS",
                    dateFrom: "2014-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 19. Dr. Muhammad Ali (Mathematics - Applied Mathematics)
        {
            employmentRecord: [
                {
                    organization: "University of Cambridge",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2002-09-01",
                    dateTo: "2005-08-31",
                    isCurrent: false
                },
                {
                    organization: "Quaid-i-Azam University",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "BPS-19",
                    dateFrom: "2005-09-01",
                    dateTo: "2009-08-31",
                    isCurrent: false
                },
                {
                    organization: "LUMS",
                    sector: "Semi-Government",
                    post: "Dean of Science",
                    scale: "BPS-21",
                    dateFrom: "2009-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 20. Dr. Li Wei (Materials Engineering - Nanomaterials)
        {
            employmentRecord: [
                {
                    organization: "University of California, Los Angeles",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2011-09-01",
                    dateTo: "2014-08-31",
                    isCurrent: false
                },
                {
                    organization: "Tsinghua University",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2014-09-01",
                    dateTo: "2018-08-31",
                    isCurrent: false
                },
                {
                    organization: "Chinese Academy of Sciences",
                    sector: "Government",
                    post: "Lab Director",
                    scale: "TTS",
                    dateFrom: "2018-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        },

        // 21. Dr. Anna Kowalski (Chemistry - Organic Chemistry)
        {
            employmentRecord: [
                {
                    organization: "ETH Zurich",
                    sector: "Government",
                    post: "Postdoctoral Researcher",
                    scale: "TTS",
                    dateFrom: "2012-09-01",
                    dateTo: "2015-08-31",
                    isCurrent: false
                },
                {
                    organization: "University of Warsaw",
                    sector: "Government",
                    post: "Assistant Professor",
                    scale: "TTS",
                    dateFrom: "2015-09-01",
                    dateTo: "2019-08-31",
                    isCurrent: false
                },
                {
                    organization: "Polish Academy of Sciences",
                    sector: "Government",
                    post: "Research Scientist",
                    scale: "TTS",
                    dateFrom: "2019-09-01",
                    dateTo: null,
                    isCurrent: true
                }
            ]
        }

    ];


    await EmploymentRecordModel.insertMany(employmentRecords);
    console.log('EmploymentRecords seeded successfully');
};
export default seedEmploymentRecords;