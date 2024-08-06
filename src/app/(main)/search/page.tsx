import { Metadata } from "next";
import TrendsSidebar from "@/components/TrendsSidebar";
import SearchResults from "./SearchResults";

interface PageProps {
  searchParams: {
    q: string;
  };
}

export function generateMetadata({ searchParams: { q } }: PageProps): Metadata {
  return {
    title: `Search results for "${q}`,
  };
}

export default function Page({ searchParams: { q } }: PageProps) {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <div className="rounded-2xl bg-card p-5 shadow-sm">
          <h1 className="text-center text-2xl font-bold">
            Search results for &quot;<span className="line-clamp-2 inline">{q}</span>
            &quot;
          </h1>
        </div>
        <SearchResults query={q} />
      </div>
      <TrendsSidebar />
    </main>
  );
}
