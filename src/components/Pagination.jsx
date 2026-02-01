export default function Pagination({
  totalPages,
  currentPage,
  setPage,
}) {
  return (
    <div className="flex justify-center gap-3 mt-16">

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`px-4 py-2 rounded-md border transition
              ${
                page === currentPage
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "border-white/20 text-gray-300 hover:bg-white/5"
              }
            `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
