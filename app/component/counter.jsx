"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Counter() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  console.log("Counter rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => router.push("/about/inside")}>Let's move</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
