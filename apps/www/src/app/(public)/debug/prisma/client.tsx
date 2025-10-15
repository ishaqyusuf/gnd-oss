"use client";

import { _trpc } from "@/components/static-trpc";
import { Button } from "@gnd/ui/button";
import { useQuery } from "@gnd/ui/tanstack";
import { signIn } from "next-auth/react";
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
          // setEnabled(!enabled);
          try {
            signIn("credentials", {
              callbackUrl: "/debug/prisma",
              redirect: false,
              email: "ishaqyusuf",
              password: "....",
            });
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Sign in
      </Button>
    </div>
  );
}
