export default function Guide() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="flex w-full max-w-[58rem]">
        <div role="alert" className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Enter the organization and repository to view all issues</span>
        </div>
      </div>
    </div>
  );
}
