import { db } from "@gnd/db";

export default async function Page() {
    const x = await db.dealerAuth.count({});
    return <div>{x}</div>;
}
