import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    axios.get("https://astralpaints.kwebmakerdigitalagency.com/graphql", {
      query: query,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
