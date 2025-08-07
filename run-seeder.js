import dbConnect from './config/database.js';
import seedUsers from './seeders/seedUsers.js';
import seedBooks from './seeders/seedBooks.js';
import seedDistincts from './seeders/seedDistinctions.js';
import seedEducations from './seeders/seedEducations.js';
import seedEmploymentRecords from './seeders/seedEmploymentRecords.js';
import seedPatents from './seeders/seedPatents.js';
import seedProjects from './seeders/seedProjects.js';
import seedPublications from './seeders/seedPublications.js';
import seedTrainings from './seeders/seedTrainings.js';
import seedWorkshops from './seeders/seedWorkshops.js';


const runSeeder = async () => {
    dbConnect();
    await seedUsers();
    await seedBooks();
    await seedDistincts();
    await seedEducations();
    await seedEmploymentRecords();
    await seedPatents();
    await seedProjects();
    await seedPublications();
    await seedTrainings();
    await seedWorkshops();





    console.log('Seeding completed successfully');
    process.exit();
};

runSeeder();