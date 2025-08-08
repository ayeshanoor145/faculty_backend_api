const seedUsers = async () => {
    const module = await import('../models/users.js');
    const UserModel = module.default;
    const count = await UserModel.countDocuments();
    if (count > 0) {
        console.log('Users already seeded');
        return;
    }

    const users = [
    {
        profilePicture: "https://example.com/profilepicture/smith.jpg",
        fullName: "Dr. Smith",
        userName: "smith_123",
        email: "smith@gmail.com",
        contactNumber: "03234567891",
        code: "1234",
        codeExpires: "2025-08-09",
        password: "smith1234"
    },
    {
        profilePicture: "https://example.com/profilepicture/sarah.jpg",
        fullName: "Dr. Sarah",
        userName: "sarah_234",
        email: "sjohnson@univ.edu",
        contactNumber: "+12025551234",
        code: "2345",
        codeExpires: "2025-08-10",
        password: "sarah2345"
    },
    {
        profilePicture: "https://example.com/profilepicture/chenwei.jpg",
        fullName: "Prof. Chen Wei",
        userName: "chenwei_345",
        email: "chenwei@ai.edu.cn",
        contactNumber: "+8613812345678",
        code: "3456",
        codeExpires: "2025-08-11",
        password: "chenwei3456"
    },
    {
        profilePicture: "https://example.com/profilepicture/fatima.jpg",
        fullName: "Dr. Fatima Khan",
        userName: "fatima_456",
        email: "fkhan@biomed.edu.pk",
        contactNumber: "03001234567",
        code: "4567",
        codeExpires: "2025-08-12",
        password: "fatima4567"
    },
    {
        profilePicture: "https://example.com/profilepicture/ahmed.jpg",
        fullName: "Dr. Ahmed Mahmood",
        userName: "ahmed_567",
        email: "amahmood@eng.edu.pk",
        contactNumber: "03331234567",
        code: "5678",
        codeExpires: "2025-08-13",
        password: "ahmed5678"
    },
    {
        profilePicture: "https://example.com/profilepicture/maria.jpg",
        fullName: "Dr. Maria Garcia",
        userName: "maria_678",
        email: "mgarcia@envsci.edu",
        contactNumber: "+525512345678",
        code: "6789",
        codeExpires: "2025-08-14",
        password: "maria6789"
    },
    {
        profilePicture: "https://example.com/profilepicture/james.jpg",
        fullName: "Dr. James Wilson",
        userName: "james_789",
        email: "j.wilson@physics.edu",
        contactNumber: "+441234567890",
        code: "7890",
        codeExpires: "2025-08-15",
        password: "james7890"
    },
    {
        profilePicture: "https://example.com/profilepicture/aisha.jpg",
        fullName: "Dr. Aisha Abdullah",
        userName: "aisha_890",
        email: "a.abdullah@chem.edu.sa",
        contactNumber: "+966501234567",
        code: "8901",
        codeExpires: "2025-08-16",
        password: "aisha8901"
    },
    {
        profilePicture: "https://example.com/profilepicture/robert.jpg",
        fullName: "Dr. Robert Kim",
        userName: "robert_901",
        email: "r.kim@biotech.edu",
        contactNumber: "+821012345678",
        code: "9012",
        codeExpires: "2025-08-17",
        password: "robert9012"
    },
    {
        profilePicture: "https://example.com/profilepicture/elena.jpg",
        fullName: "Dr. Elena Petrova",
        userName: "elena_012",
        email: "e.petrova@matsci.ru",
        contactNumber: "+79161234567",
        code: "0123",
        codeExpires: "2025-08-18",
        password: "elena0123"
    },
    {
        profilePicture: "https://example.com/profilepicture/ali.jpg",
        fullName: "Dr. Ali Hassan",
        userName: "ali_123",
        email: "a.hassan@mech.pk",
        contactNumber: "03011234567",
        code: "1235",
        codeExpires: "2025-08-19",
        password: "ali1235"
    },
    {
        profilePicture: "https://example.com/profilepicture/sophia.jpg",
        fullName: "Dr. Sophia Rodriguez",
        userName: "sophia_234",
        email: "s.rodriguez@ai.edu",
        contactNumber: "+541112345678",
        code: "2346",
        codeExpires: "2025-08-20",
        password: "sophia2346"
    },
    {
        profilePicture: "https://example.com/profilepicture/thomas.jpg",
        fullName: "Dr. Thomas Müller",
        userName: "thomas_345",
        email: "t.muller@physics.de",
        contactNumber: "+4915123456789",
        code: "3457",
        codeExpires: "2025-08-21",
        password: "thomas3457"
    },
    {
        profilePicture: "https://example.com/profilepicture/amina.jpg",
        fullName: "Dr. Amina Ndiaye",
        userName: "amina_456",
        email: "a.ndiaye@health.sn",
        contactNumber: "+221771234567",
        code: "4568",
        codeExpires: "2025-08-22",
        password: "amina4568"
    },
    {
        profilePicture: "https://example.com/profilepicture/raj.jpg",
        fullName: "Dr. Raj Patel",
        userName: "raj_567",
        email: "r.patel@biochem.ca",
        contactNumber: "+14161234567",
        code: "5679",
        codeExpires: "2025-08-23",
        password: "raj5679"
    },
    {
        profilePicture: "https://example.com/profilepicture/yuki.jpg",
        fullName: "Dr. Yuki Tanaka",
        userName: "yuki_678",
        email: "y.tanaka@ce.jp",
        contactNumber: "+81312345678",
        code: "6780",
        codeExpires: "2025-08-24",
        password: "yuki6780"
    },
    {
        profilePicture: "https://example.com/profilepicture/carlos.jpg",
        fullName: "Dr. Carlos Mendez",
        userName: "carlos_789",
        email: "c.mendez@enveng.mx",
        contactNumber: "+525512345678",
        code: "7891",
        codeExpires: "2025-08-25",
        password: "carlos7891"
    },
    {
        profilePicture: "https://example.com/profilepicture/emma.jpg",
        fullName: "Dr. Emma Wilson",
        userName: "emma_890",
        email: "e.wilson@neuro.edu",
        contactNumber: "+441234567890",
        code: "8902",
        codeExpires: "2025-08-26",
        password: "emma8902"
    },
    {
        profilePicture: "https://example.com/profilepicture/muhammad.jpg",
        fullName: "Dr. Muhammad Ali",
        userName: "muhammad_901",
        email: "m.ali@math.edu.pk",
        contactNumber: "03331234567",
        code: "9013",
        codeExpires: "2025-08-27",
        password: "muhammad9013"
    },
    {
        profilePicture: "https://example.com/profilepicture/liwei.jpg",
        fullName: "Dr. Li Wei",
        userName: "liwei_012",
        email: "l.wei@mateng.cn",
        contactNumber: "+8613812345678",
        code: "0124",
        codeExpires: "2025-08-28",
        password: "liwei0124"
    },
    {
        profilePicture: "https://example.com/profilepicture/anna.jpg",
        fullName: "Dr. Anna Kowalski",
        userName: "anna_123",
        email: "a.kowalski@chem.pl",
        contactNumber: "+48123456789",
        code: "1236",
        codeExpires: "2025-08-29",
        password: "anna1236"
    }
];
    await UserModel.insertMany(users);
    console.log('Users seeded successfully');
};
export default seedUsers;