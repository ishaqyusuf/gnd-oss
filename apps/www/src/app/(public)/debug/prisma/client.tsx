"use client";

import { _trpc } from "@/components/static-trpc";
import { Button } from "@gnd/ui/button";
import { useQuery } from "@gnd/ui/tanstack";
import { useState } from "react";

export function Client() {
  const [enabled, setEnabled] = useState(false);
  const { data, isPending } = useQuery(_trpc.user.auth.queryOptions(undefined));
  //   const { data } = await qc.prefetchQuery(trpc.user.auth.queryOptions());
  const r = JSON.stringify({ data, isPending });
  return (
    <div>
      {/* {x} */}
      <div>{r}</div>
      <Button
        onClick={(e) => {
          setEnabled(!enabled);
        }}
      >
        Fetch
      </Button>
    </div>
  );
}
