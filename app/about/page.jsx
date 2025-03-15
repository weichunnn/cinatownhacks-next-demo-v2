"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/check");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  console.log("hello world");
  return (
    <div>
      <h1>{data?.message}</h1>
      <h1>This is about page</h1>;
    </div>
  );
}
