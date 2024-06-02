"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "@/lib/config";

type Props = {
  pagination: PageInfo;
};

export default function PaginationControl(props: Props) {
  const { pagination } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePagination = (
    first: number | null,
    after: string | null,
    last: number | null,
    before: string | null
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    if (first) {
      params.set("first", first.toString());
    } else {
      params.delete("first");
    }

    if (after) {
      params.set("after", after.toString());
    } else {
      params.delete("after");
    }

    if (last) {
      params.set("last", last.toString());
    } else {
      params.delete("last");
    }
    if (before) {
      params.set("before", before.toString());
    } else {
      params.delete("before");
    }
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex flex-row w-full justify-end items-center space-x-5 mt-5">
      <button
        className="btn btn-success w-[100px]"
        disabled={!pagination.hasPreviousPage}
        onClick={() =>
          handlePagination(null, null, PAGE_SIZE, pagination.startCursor)
        }
      >
        Previous
      </button>
      <button
        className="btn btn-success w-[100px]"
        disabled={!pagination.hasNextPage}
        onClick={() =>
          handlePagination(PAGE_SIZE, pagination.endCursor, null, null)
        }
      >
        Next
      </button>
    </div>
  );
}
