const seedTrainings = async () => {
    const module = await import ('../models/trainings.js');
    const TrainingModel = module.default;
    const count = await TrainingModel.countDocuments();
    if (count > 0) {
        console.log('Trainings already seeded');
        return;
    }


    const trainings = [

// 1. Dr. Smith (Computer Science - AI/ML)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Advanced Deep Learning Architectures",
      yearAttended: 2022,
      institution: "Stanford University",
      description: "Specialized training on transformer models and attention mechanisms"
    },
    {
      type: "Private sector",
      scope: "International",
      subject: "AI Ethics and Responsible Innovation",
      yearAttended: 2021,
      institution: "Google AI",
      description: "Workshop on ethical considerations in AI development"
    }
  ]
},

// 2. Dr. Sarah (Data Science)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Big Data Analytics",
      yearAttended: 2021,
      institution: "MIT",
      description: "Advanced techniques for large-scale data processing"
    },
    {
      type: "Industry",
      scope: "National",
      subject: "Data Privacy Regulations",
      yearAttended: 2020,
      institution: "Microsoft Research",
      description: "Compliance training for data handling in research"
    }
  ]
},

// 3. Prof. Chen Wei (Deep Learning)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Computer Vision with Deep Learning",
      yearAttended: 2022,
      institution: "Stanford University",
      description: "Advanced course on convolutional neural networks"
    },
    {
      type: "HEC",
      scope: "National",
      subject: "Research Grant Writing",
      yearAttended: 2021,
      institution: "Chinese Academy of Sciences",
      description: "Training for securing competitive research funding"
    }
  ]
},

// 4. Dr. Fatima Khan (Biomedical Engineering)
{
 trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Neural Interface Technologies",
      yearAttended: 2021,
      institution: "Johns Hopkins University",
      description: "Advanced training in brain-computer interfaces"
    },
    {
      type: "NGO",
      scope: "International",
      subject: "Medical Device Development",
      yearAttended: 2020,
      institution: "WHO Health Technologies",
      description: "Training for affordable medical device design"
    }
  ]
},

// 5. Dr. Ahmed Mahmood (Electrical Engineering)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Smart Grid Technologies",
      yearAttended: 2022,
      institution: "Imperial College London",
      description: "Advanced training in grid optimization"
    },
    {
      type: "HEC",
      scope: "National",
      subject: "Academic Leadership",
      yearAttended: 2021,
      institution: "Higher Education Commission Pakistan",
      description: "Training for deans and senior faculty"
    }
  ]
},

// 6. Dr. Maria Garcia (Environmental Science)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Climate Change Modeling",
      yearAttended: 2022,
      institution: "ETH Zurich",
      description: "Advanced climate simulation techniques"
    },
    {
      type: "NGO",
      scope: "International",
      subject: "Environmental Policy",
      yearAttended: 2021,
      institution: "United Nations Environment Programme",
      description: "Training on policy development"
    }
  ]
},

// 7. Dr. James Wilson (Physics - Quantum)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Quantum Computing",
      yearAttended: 2022,
      institution: "MIT",
      description: "Advanced quantum algorithms and implementations"
    },
    {
      type: "Industry",
      scope: "International",
      subject: "Quantum Hardware",
      yearAttended: 2021,
      institution: "IBM Quantum",
      description: "Hands-on training with quantum processors"
    }
  ]
},

// 8. Dr. Aisha Abdullah (Chemistry - Nanotech)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Nanomedicine",
      yearAttended: 2022,
      institution: "University of Oxford",
      description: "Advanced drug delivery systems"
    },
    {
      type: "Industry",
      scope: "National",
      subject: "Pharmaceutical Applications",
      yearAttended: 2021,
      institution: "Saudi Pharmaceutical Industries",
      description: "Training on industrial applications"
    }
  ]
},

// 9. Dr. Robert Kim (Biotechnology)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "CRISPR Technology",
      yearAttended: 2022,
      institution: "Harvard University",
      description: "Advanced gene editing techniques"
    },
    {
      type: "Industry",
      scope: "International",
      subject: "Agricultural Biotech",
      yearAttended: 2021,
      institution: "Monsanto",
      description: "Applications in crop improvement"
    }
  ]
},

// 10. Dr. Elena Petrova (Materials Science)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Polymer Science",
      yearAttended: 2022,
      institution: "ETH Zurich",
      description: "Advanced materials characterization"
    },
    {
      type: "Industry",
      scope: "National",
      subject: "Industrial Applications",
      yearAttended: 2021,
      institution: "Gazprom Neft",
      description: "Petroleum-based polymers training"
    }
  ]
},

// 11. Dr. Ali Hassan (Mechanical Engineering - Robotics)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Industrial Robotics",
      yearAttended: 2022,
      institution: "KAIST",
      description: "Advanced automation techniques"
    },
    {
      type: "Industry",
      scope: "National",
      subject: "AI in Manufacturing",
      yearAttended: 2021,
      institution: "Pakistan Robotics Institute",
      description: "Practical applications training"
    }
  ]
},

// 12. Dr. Sophia Rodriguez (NLP)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Machine Translation",
      yearAttended: 2022,
      institution: "University of Barcelona",
      description: "Advanced NLP techniques"
    },
    {
      type: "NGO",
      scope: "International",
      subject: "Language Preservation",
      yearAttended: 2021,
      institution: "UNESCO",
      description: "Digital preservation of indigenous languages"
    }
  ]
},

// 13. Dr. Thomas Müller (Physics)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Condensed Matter Physics",
      yearAttended: 2022,
      institution: "Max Planck Institute",
      description: "Advanced materials research techniques"
    },
    {
      type: "Industry",
      scope: "International",
      subject: "Superconductivity Applications",
      yearAttended: 2021,
      institution: "Siemens Research",
      description: "Practical applications training"
    }
  ]
},

// 14. Dr. Amina Ndiaye (Epidemiology)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Infectious Disease Control",
      yearAttended: 2022,
      institution: "London School of Hygiene",
      description: "Advanced epidemiological methods"
    },
    {
      type: "NGO",
      scope: "Regional",
      subject: "Public Health Interventions",
      yearAttended: 2021,
      institution: "WHO Africa",
      description: "Field training for disease control"
    }
  ]
},

// 15. Dr. Raj Patel (Biochemistry)
{
 trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Enzyme Engineering",
      yearAttended: 2022,
      institution: "University of Toronto",
      description: "Advanced protein modification techniques"
    },
    {
      type: "Industry",
      scope: "International",
      subject: "Industrial Biocatalysts",
      yearAttended: 2021,
      institution: "Novozymes",
      description: "Commercial applications training"
    }
  ]
},

// 16. Dr. Yuki Tanaka (Computer Engineering)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Computer Architecture",
      yearAttended: 2022,
      institution: "Stanford University",
      description: "Advanced processor design"
    },
    {
      type: "Industry",
      scope: "National",
      subject: "Quantum Computing Hardware",
      yearAttended: 2021,
      institution: "Toshiba Research",
      description: "Practical implementations training"
    }
  ]
},

// 17. Dr. Carlos Mendez (Environmental Engineering)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Water Treatment Technologies",
      yearAttended: 2022,
      institution: "UC Berkeley",
      description: "Advanced membrane filtration"
    },
    {
      type: "NGO",
      scope: "Regional",
      subject: "Sustainable Water Solutions",
      yearAttended: 2021,
      institution: "WaterAid Mexico",
      description: "Community-based implementations"
    }
  ]
},

// 18. Dr. Emma Wilson (Neuroscience)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Cognitive Neuroscience",
      yearAttended: 2022,
      institution: "Harvard University",
      description: "Advanced memory systems research"
    },
    {
      type: "Industry",
      scope: "International",
      subject: "Neuroimaging Techniques",
      yearAttended: 2021,
      institution: "Siemens Healthineers",
      description: "fMRI and advanced imaging"
    }
  ]
},

// 19. Dr. Muhammad Ali (Mathematics)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Fluid Dynamics",
      yearAttended: 2022,
      institution: "University of Cambridge",
      description: "Advanced mathematical modeling"
    },
    {
      type: "HEC",
      scope: "National",
      subject: "Academic Leadership",
      yearAttended: 2021,
      institution: "Higher Education Commission Pakistan",
      description: "University administration training"
    }
  ]
},

// 20. Dr. Li Wei (Materials Science)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Nanomaterials",
      yearAttended: 2022,
      institution: "UCLA",
      description: "Graphene applications research"
    },
    {
      type: "Industry",
      scope: "National",
      subject: "Commercial Applications",
      yearAttended: 2021,
      institution: "Huawei Research",
      description: "Electronics applications training"
    }
  ]
},

// 21. Dr. Anna Kowalski (Chemistry)
{
  trainings: [
    {
      type: "University",
      scope: "International",
      subject: "Green Chemistry",
      yearAttended: 2022,
      institution: "ETH Zurich",
      description: "Sustainable catalytic processes"
    },
    {
      type: "Industry",
      scope: "National",
      subject: "Pharmaceutical Synthesis",
      yearAttended: 2021,
      institution: "Polpharma",
      description: "Industrial applications training"
    }
  ]
}

    ];
    await TrainingModel. insertMany(trainings);
    console.log('Trainings seeded successfully');
};
export default seedTrainings;