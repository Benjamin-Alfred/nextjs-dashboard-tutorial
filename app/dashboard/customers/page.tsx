import { delayMe } from "@/app/lib/data";

export default async function Page() {
    const num = await delayMe();
    console.log(num);
    return <p>Customers Page {num}</p>;
  }