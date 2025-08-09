import dbConnect from './config/database.js';
import seedBooks from './seeders/seedBooks.js';
import seedDistincts from './seeders/seedDistinctions.js';
import seedEducations from './seeders/seedEducations.js';
import seedEmploymentRecords from './seeders/seedEmploymentRecords.js';
import seedPatents from './seeders/seedPatents.js';
import seedProjects from './seeders/seedProjects.js';
import seedPublications from './seeders/seedPublications.js';
import seedTrainings from './seeders/seedTrainings.js';
import seedWorkshops from './seeders/seedWorkshops.js';
import seedPersonalDetail from './seeders/seedPersonalDetails.js';
import seedUsers from './seeders/seedUsers.js';

const runSeeder = async () => {
    dbConnect();
    await seedPersonalDetail();
    await seedBooks();
    await seedDistincts();
    await seedEducations();
    await seedEmploymentRecords();
    await seedPatents();
    await seedProjects();
    await seedPublications();
    await seedTrainings();
    await seedWorkshops();
    await seedUsers();





    console.log('Seeding completed successfully');
    process.exit();
};

runSeeder();