"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center text-center">
      <h2 className="text-red-600 text-2xl">Something went wrong!</h2>
    </div>
  );
}
