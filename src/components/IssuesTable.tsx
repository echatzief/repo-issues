import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type Props = {
  issues: FormattedIssues[];
};

export default function IssuesTable(props: Props) {
  const { issues } = props;
  return (
    <div className="flex justify-center align-items w-full mt-5">
      <div className="flex flex-col w-full max-w-[58rem]">
        <h2 className="font-bold text-3xl mt-3 mb-3">Issues</h2>
        {issues.length === 0 && (
          <div className="text-center mt-5">
            No issues found for that repository and organization
          </div>
        )}
        {issues.map((issue) => (
          <a
            key={issue.id}
            className="flex w-full mt-1 mb-1 cursor-pointer"
            href={issue.url}
            target="_blank"
          >
            <div role="alert" className="alert alert-warning">
              {issue.state === "CLOSED" && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="24"
                  height="24"
                  className="shrink-0 h-6 w-6"
                >
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
              )}
              {issue.state === "OPEN" && (
                <svg
                  className="shrink-0 h-6 w-6"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                </svg>
              )}
              <span className="text-lg">
                #{issue.number} {issue.title}
              </span>
              <span>
                {dayjs(issue.createdAt).fromNow()} from{" "}
                <span className="text-green-900">{issue.author}</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
