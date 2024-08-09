import { sql } from "@vercel/postgres";

export default async function Page() {
    const num = await delayMe();
    console.log(num);
    return <p>Customers Page {num}</p>;
  }

  export async function delayMe() {

    const customerCount = await sql`SELECT COUNT(*) FROM customers`;


    await new Promise((resolve) => setTimeout(resolve, 3000));
    return Number(customerCount.rows[0] ?? '0');
  }