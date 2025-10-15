"use client";

import { _trpc } from "@/components/static-trpc";
import { useQuery } from "@gnd/ui/tanstack";

export default async function Page() {
  const { data, isPending } = useQuery(_trpc.user.auth.queryOptions());
  //   const { data } = await qc.prefetchQuery(trpc.user.auth.queryOptions());
  const r = JSON.stringify({ data, isPending });
  return (
    <div>
      {/* {x} */}
      <div>{r}</div>
    </div>
  );
}
