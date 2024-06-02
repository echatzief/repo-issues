"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultOrganization?: string;
  defaultRepository?: string;
  defaultState?: string;
};

export default function OrganizationForm(props: Props) {
  const { defaultOrganization, defaultRepository, defaultState } = props;

  const [organization, setOrganization] = useState(defaultOrganization || "");
  const [repository, setRepository] = useState(defaultRepository || "");
  const [state, setState] = useState(defaultState || "all");

  const router = useRouter();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/${organization}/${repository}?state=${state}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col md:flex-row justify-center align-items space-y-5 md:space-y-0 md:space-x-5"
    >
      <div className="flex">
        <label className="input input-bordered flex w-full items-center gap-2">
          Organization
          <input
            type="text"
            className="grow"
            placeholder="reactjs"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </label>
      </div>
      <div className="flex">
        <label className="input input-bordered flex  w-full items-center gap-2">
          Repository
          <input
            type="text"
            className="grow"
            placeholder="react.dev"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
        </label>
      </div>
      <div className="flex">
        <select
          className="select select-bordered w-full"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value={"all"}>All Issues</option>
          <option value={"open"}>Open Issues</option>
          <option value={"closed"}>Closed Issues</option>
        </select>
      </div>
      <div className="flex">
        <button
          className="btn btn-warning w-full"
          disabled={!organization || !repository}
        >
          Find issues
        </button>
      </div>
    </form>
  );
}
