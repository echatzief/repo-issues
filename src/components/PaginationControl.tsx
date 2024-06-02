"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { start } from "repl";

type Props = {
  pagination: PageInfo;
};

export default function PaginationControl(props: Props) {
  const { pagination } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleNext = (cursor: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("after", cursor);
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex flex-row w-full justify-end items-center space-x-5 mt-5">
      <button
        className="btn btn-success w-[100px]"
        disabled={!pagination.hasNextPage}
        onClick={() => handleNext(pagination.endCursor)}
      >
        Next
      </button>
    </div>
  );
}
