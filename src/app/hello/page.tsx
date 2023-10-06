export default async function page()
{
    // throw new Error("error example");
    // xcert

    await new Promise((resolve) => setTimeout(() => {
        resolve(1);
    }, 1000));

    return <div>Hello</div>
}