import client from "./client.js";
import { createEmployee } from "./queries/employees.js"

await client.connect();
await seedEmployees();
await client.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await client.connect()

  await createEmployee("Ashley Pyka", "1990-07-31", 1000000)

  await client.end()
}

seedDB()
