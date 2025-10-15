"use client";

import { _trpc } from "@/components/static-trpc";
import { useQuery } from "@gnd/ui/tanstack";

export default async function Page() {
  const { data } = useQuery(_trpc.user.auth.queryOptions());
  //   const { data } = await qc.prefetchQuery(trpc.user.auth.queryOptions());
  return (
    <div>
      {/* {x} */}
      <div>{data}</div>
    </div>
  );
}
