"use client";

import { useRouter } from "next/navigation";

import { TOP_REPOSITORIES } from "@/lib/config";

export default function TopRepositories() {
  const router = useRouter();

  const handleRedirect = (organization: string, repository: string) =>
    router.push(`/${organization}/${repository}?state=all`);

  return (
    <div className="flex justify-center align-items w-full mt-5">
      <div className="flex flex-col w-full max-w-[58rem]">
        <h2 className="font-bold text-3xl mt-3 mb-3">Top repositories</h2>
        {TOP_REPOSITORIES.map((r) => (
          <div
            key={r.organization}
            className="flex w-full mt-3 mb-3 cursor-pointer"
            onClick={() => handleRedirect(r.organization, r.repository)}
          >
            <div role="alert" className="alert alert-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xl">{r.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
