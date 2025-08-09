const seedWorkshops = async () => {
  const module = await import('../models/workshops.js');
  const WorkshopModel = module.default;
  const count = await WorkshopModel.countDocuments();
  if (count > 0) {
    console.log('Workshops already seeded');
    return;
  }


  const workshops = [

    // 1. Dr. Smith (Computer Science - AI/ML)
    {
      _id: "64d4f8b2c9e77b1a2c8b4367", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4567", // Reference to Dr. Smith's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Advances in Transformer Architectures for NLP",
      role: "Lead Organizer and Keynote Speaker",
      dateFrom: "2023-09-10",
      dateTo: "2023-09-12",
      venue: "Virtual (Hosted from MIT, USA)",
      description: "International workshop focusing on cutting-edge transformer architectures for low-resource languages, building on Dr. Smith's research published in Nature Machine Intelligence.",
      certificateUrl: "https://mit.edu/ai-workshops/transformer-nlp-2023"
    },


    // 2. Dr. Sarah (Data Science)
    {
      _id: "64d4f8b2c9e77b1a2c8b4368", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4568", // Reference to Dr. Sarah's user ID
      workshopType: "Organized",
      scope: "National",
      title: "Federated Learning for Healthcare Data",
      role: "Workshop Chair",
      dateFrom: "2023-03-20",
      dateTo: "2023-03-21",
      venue: "MIT Campus, USA",
      description: "Workshop on privacy-preserving techniques in healthcare analytics, based on Dr. Sarah's research in federated learning.",
      certificateUrl: "https://mit.edu/federated-learning-workshop"
    },

    // 3. Prof. Chen Wei (Deep Learning)
    {
      _id: "64d4f8b2c9e77b1a2c8b4369", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4569", // Reference to Prof. Chen Wei's user ID
      workshopType: "Organized",
      scope: "International",
      title: "3D Computer Vision with Attention Mechanisms",
      role: "Lead Instructor",
      dateFrom: "2022-11-05",
      dateTo: "2022-11-07",
      venue: "Stanford University, USA",
      description: "Advanced workshop on attention mechanisms in 3D vision systems, reflecting Prof. Chen's research in IJCV.",
      certificateUrl: "https://stanford.edu/3d-vision-workshop"
    },

    // 4. Dr. Fatima Khan (Biomedical Engineering)
    {
      _id: "64d4f8b2c9e77b1a2c8b4570", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4570", // Reference to Dr. Fatima Khan's user ID
      workshopType: "Organized",
      scope: "Regional",
      title: "Affordable BCI Technologies for Developing Countries",
      role: "Main Organizer",
      dateFrom: "2023-04-15",
      dateTo: "2023-04-16",
      venue: "LUMS, Pakistan",
      description: "Workshop on developing low-cost EEG-based brain-computer interfaces, based on Dr. Khan's research in neural engineering.",
      certificateUrl: "https://lums.edu.pk/bci-workshop-2023"
    },

    // 5. Dr. Ahmed Mahmood (Electrical Engineering)
    {
      _id: "64d4f8b2c9e77b1a2c8b4371", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4571", // Reference to Dr. Ahmed Mahmood's user ID
      workshopType: "Organized",
      scope: "National",
      title: "Smart Grid Optimization Workshop",
      role: "Technical Chair",
      dateFrom: "2022-08-10",
      dateTo: "2022-08-12",
      venue: "UET Lahore, Pakistan",
      description: "Workshop on AI applications in smart grid technologies, complementing Dr. Mahmood's IEEE Transactions publication.",
      certificateUrl: "https://uet.edu.pk/smartgrid-workshop"
    },

    // 6. Dr. Maria Garcia (Environmental Science)
    {
      _id: "64d4f8b2c9e77b1a2c8b4372", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4572", // Reference to Dr. Maria Garcia's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Tropical Carbon Sequestration Techniques",
      role: "Lead Facilitator",
      dateFrom: "2023-02-05",
      dateTo: "2023-02-07",
      venue: "UNAM, Mexico",
      description: "Workshop on carbon capture methods in tropical ecosystems, based on Dr. Garcia's Nature Climate Change publication.",
      certificateUrl: "https://unam.mx/carbon-workshop"
    },

    // 7. Dr. James Wilson (Physics)
    {
      _id: "64d4f8b2c9e77b1a2c8b4373", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4573", // Reference to Dr. James Wilson's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Quantum Materials Workshop",
      role: "Scientific Director",
      dateFrom: "2022-10-15",
      dateTo: "2022-10-17",
      venue: "Harvard University, USA",
      description: "Advanced workshop on quantum entanglement in novel materials, reflecting Dr. Wilson's Physical Review Letters research.",
      certificateUrl: "https://harvard.edu/quantum-workshop"
    },

    // 8. Dr. Aisha Abdullah (Chemistry - Nanotech)
    {
      _id: "64d4f8b2c9e77b1a2c8b4374", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4574", // Reference to Dr. Aisha Abdullah's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Nanomedicine for Cancer Therapy",
      role: "Workshop Leader",
      dateFrom: "2023-01-20",
      dateTo: "2023-01-22",
      venue: "King Saud University, Saudi Arabia",
      description: "Hands-on workshop on nanoparticle drug delivery systems, based on Dr. Abdullah's ACS Nano publication.",
      certificateUrl: "https://ksu.edu.sa/nanomed-workshop"
    },

    // 9. Dr. Robert Kim (Biotechnology)
    {
      _id: "64d4f8b2c9e77b1a2c8b4375", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4575", // Reference to Dr. Robert Kim's user ID
      workshopType: "Organized",
      scope: "International",
      title: "CRISPR Applications in Agriculture",
      role: "Lead Instructor",
      dateFrom: "2022-07-05",
      dateTo: "2022-07-07",
      venue: "Seoul National University, South Korea",
      description: "Practical workshop on gene editing for drought-resistant crops, reflecting Dr. Kim's Nature Biotechnology research.",
      certificateUrl: "https://snu.ac.kr/crispr-workshop"
    },

    // 10. Dr. Elena Petrova (Materials Science)
    {
      _id: "64d4f8b2c9e77b1a2c8b4376", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4576", // Reference to Dr. Elena Petrova's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Sustainable Polymer Materials Workshop",
      role: "Technical Director",
      dateFrom: "2023-05-10",
      dateTo: "2023-05-12",
      venue: "ETH Zurich, Switzerland",
      description: "Workshop on developing biodegradable polymer composites, based on Dr. Petrova's Advanced Materials publication.",
      certificateUrl: "https://ethz.ch/polymer-workshop"
    },

    // 11. Dr. Ali Hassan (Mechanical Engineering - Robotics)
    {
      _id: "64d4f8b2c9e77b1a2c8b4577", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4577", // Reference to Dr. Ali Hassan's user ID
      workshopType: "Organized",
      scope: "National",
      title: "Industrial Robotics for Smart Manufacturing",
      role: "Workshop Chair",
      dateFrom: "2022-09-15",
      dateTo: "2022-09-16",
      venue: "UET Lahore, Pakistan",
      description: "Practical workshop on AI-powered industrial robotics, complementing Dr. Hassan's IEEE Transactions publication.",
      certificateUrl: "https://uet.edu.pk/robotics-workshop"
    },

    // 12. Dr. Sophia Rodriguez (NLP)
    {
      _id: "64d4f8b2c9e77b1a2c8b4378", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4578", // Reference to Dr. Sophia Rodriguez's user ID
      workshopType: "Organized",
      scope: "International",
      title: "NLP for Indigenous Languages",
      role: "Lead Facilitator",
      dateFrom: "2023-06-05",
      dateTo: "2023-06-07",
      venue: "University of Barcelona, Spain",
      description: "Workshop on machine translation for low-resource languages, based on Dr. Rodriguez's Computational Linguistics research.",
      certificateUrl: "https://ub.edu/nlp-workshop"
    },

    // 13. Dr. Thomas Müller (Physics)
    {
      _id: "64d4f8b2c9e77b1a2c8b4379", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4579", // Reference to Dr. Thomas Müller's user ID
      workshopType: "Organized",
      scope: "International",
      title: "High-Temperature Superconductivity Workshop",
      role: "Scientific Chair",
      dateFrom: "2022-12-10",
      dateTo: "2022-12-12",
      venue: "Max Planck Institute, Germany",
      description: "Advanced workshop on superconductivity in novel materials, reflecting Dr. Müller's Nature Physics publication.",
      certificateUrl: "https://mpg.de/superconductivity-workshop"
    },

    // 14. Dr. Amina Ndiaye (Epidemiology)
    {
      _id: "64d4f8b2c9e77b1a2c8b4380", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4580", // Reference to Dr. Amina Ndiaye's user ID
      workshopType: "Organized",
      scope: "Regional",
      title: "Malaria Control Strategies in Africa",
      role: "Lead Organizer",
      dateFrom: "2023-07-15",
      dateTo: "2023-07-16",
      venue: "Cheikh Anta Diop University, Senegal",
      description: "Workshop on climate change impacts on malaria transmission, based on Dr. Ndiaye's Lancet Planetary Health research.",
      certificateUrl: "https://ucad.sn/malaria-workshop"
    },

    // 15. Dr. Raj Patel (Biochemistry)
    {
      _id: "64d4f8b2c9e77b1a2c8b4381", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4581", // Reference to Dr. Raj Patel's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Enzyme Engineering for Sustainability",
      role: "Workshop Director",
      dateFrom: "2022-10-20",
      dateTo: "2022-10-22",
      venue: "University of Toronto, Canada",
      description: "Practical workshop on enzyme applications for plastic degradation, reflecting Dr. Patel's Nature Catalysis publication.",
      certificateUrl: "https://utoronto.ca/enzyme-workshop"
    },

    // 16. Dr. Yuki Tanaka (Computer Engineering)
    {
      _id: "64d4f8b2c9e77b1a2c8b4382", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4582", // Reference to Dr. Yuki Tanaka's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Neuromorphic Computing Workshop",
      role: "Lead Instructor",
      dateFrom: "2023-03-05",
      dateTo: "2023-03-07",
      venue: "University of Tokyo, Japan",
      description: "Advanced workshop on neuromorphic architectures for edge devices, based on Dr. Tanaka's IEEE Micro publication.",
      certificateUrl: "https://u-tokyo.ac.jp/neuromorphic-workshop"
    },

    // 17. Dr. Carlos Mendez (Environmental Engineering)
    {
      _id: "64d4f8b2c9e77b1a2c8b4383", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4583", // Reference to Dr. Carlos Mendez's user ID
      workshopType: "Organized",
      scope: "Regional",
      title: "Low-Energy Desalination Technologies",
      role: "Technical Lead",
      dateFrom: "2023-04-10",
      dateTo: "2023-04-11",
      venue: "National Autonomous University of Mexico",
      description: "Workshop on membrane technologies for water treatment, complementing Dr. Mendez's Nature Water research.",
      certificateUrl: "https://unam.mx/desalination-workshop"
    },

    // 18. Dr. Emma Wilson (Neuroscience)
    {
      _id: "64d4f8b2c9e77b1a2c8b4384", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4584", // Reference to Dr. Emma Wilson's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Memory Systems Neuroscience Workshop",
      role: "Scientific Director",
      dateFrom: "2022-11-15",
      dateTo: "2022-11-17",
      venue: "University of Oxford, UK",
      description: "Advanced workshop on neural mechanisms of memory, based on Dr. Wilson's Nature Neuroscience publication.",
      certificateUrl: "https://ox.ac.uk/memory-workshop"
    },

    // 19. Dr. Muhammad Ali (Mathematics)
    {
      _id: "64d4f8b2c9e77b1a2c8b4385", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4585", // Reference to Dr. Muhammad Ali's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Fluid Dynamics Modeling Workshop",
      role: "Lead Instructor",
      dateFrom: "2023-01-10",
      dateTo: "2023-01-12",
      venue: "University of Cambridge, UK",
      description: "Workshop on mathematical modeling of turbulent flow, reflecting Dr. Ali's Journal of Fluid Mechanics research.",
      certificateUrl: "https://cam.ac.uk/fluids-workshop"
    },

    // 20. Dr. Li Wei (Materials Science)
    {
      _id: "64d4f8b2c9e77b1a2c8b4386", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4586", // Reference to Dr. Li Wei's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Graphene Applications Workshop",
      role: "Technical Chair",
      dateFrom: "2022-09-20",
      dateTo: "2022-09-22",
      venue: "Tsinghua University, China",
      description: "Hands-on workshop on graphene-based flexible electronics, based on Dr. Li's Advanced Functional Materials publication.",
      certificateUrl: "https://tsinghua.edu.cn/graphene-workshop"
    },

    // 21. Dr. Anna Kowalski (Chemistry)
    {
      _id: "64d4f8b2c9e77b1a2c8b4387", // Unique ID for the workshop
      user: "64d4f8b2c9e77b1a2c8b4587", // Reference to Dr. Anna Kowalski's user ID
      workshopType: "Organized",
      scope: "International",
      title: "Green Catalysis in Pharma Workshop",
      role: "Workshop Leader",
      dateFrom: "2023-02-15",
      dateTo: "2023-02-17",
      venue: "ETH Zurich, Switzerland",
      description: "Practical workshop on sustainable catalytic processes, reflecting Dr. Kowalski's ACS Sustainable Chemistry research.",
      certificateUrl: "https://ethz.ch/green-catalysis-workshop"
    }

  ];
  await WorkshopModel.insertMany(workshops);
  console.log('Workshops seeded successfully');
};
export default seedWorkshops;