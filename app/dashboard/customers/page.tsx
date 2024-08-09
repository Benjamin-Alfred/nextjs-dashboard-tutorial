export default async function Page() {
    const num = await delayMe();
    console.log(num);
    return <p>Customers Page {num}</p>;
  }

  export async function delayMe() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return 0;
  }