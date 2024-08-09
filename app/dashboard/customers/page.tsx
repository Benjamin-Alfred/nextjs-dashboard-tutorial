export default function Page() {
    const num = delayMe();
    console.log(num);
    return <p>Customers Page {num}</p>;
  }

  export async function delayMe() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return 0;
  }