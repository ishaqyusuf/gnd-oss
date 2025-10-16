// import { _trpc } from "@/components/static-trpc";
// import { useQuery } from "@gnd/ui/tanstack";

import { db } from "@api/trpc/routers/_app";
import { Client } from "./client";

export default async function Page() {
  //   const { data, isPending } = useQuery(_trpc.user.auth.queryOptions());
  //   const { data } = await qc.prefetchQuery(trpc.user.auth.queryOptions());
  //   const r = JSON.stringify({ data, isPending });
  const r = await db.users.count({});
  return (
    <div>
      {/* {x} */}
      <div>{r}</div>
      <Client />
    </div>
  );
}
