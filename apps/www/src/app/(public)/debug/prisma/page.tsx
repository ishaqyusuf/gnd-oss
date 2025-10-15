import { db } from "@gnd/db";
import { trpc } from "@/trpc/server";
export default async function Page() {
  const x = await db.dealerAuth.count({});
  const { data } = await trpc.user.auth.queryOption();
  return (
    <div>
      {x}
      <div>{data}</div>
    </div>
  );
}
