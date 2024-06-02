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

  const handleDirection = (
    first: number | null,
    after: string | null,
    last: number | null,
    before: string | null
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    if(first){
      params.set('first', first.toString());
    } else {
      params.delete('first');
    }

    if(after){
      params.set('after', after.toString());
    } else {
      params.delete('after');
    }

    if(last){
      params.set('last', last.toString());
    } else {
      params.delete('last');
    }
    if(before){
      params.set('before', before.toString());
    } else {
      params.delete('before');
    }
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex flex-row w-full justify-end items-center space-x-5 mt-5">
      <button
        className="btn btn-success w-[100px]"
        disabled={!pagination.hasPreviousPage}
        onClick={() => handleDirection(null, null, 5, pagination.startCursor)}
      >
        Previous
      </button>
      <button
        className="btn btn-success w-[100px]"
        disabled={!pagination.hasNextPage}
        onClick={() => handleDirection(5, pagination.endCursor, null, null)}
      >
        Next
      </button>
    </div>
  );
}
