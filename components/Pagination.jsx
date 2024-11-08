import Link from "next/link";

const Pagination = ({ page, pageSize, totalItems }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <section className="container mx-auto flex justify-center items-center my-8">
      <Link
        href={
          page > 1 ? `/properties?page=${page - 1}` : `/properties?page=${page}`
        }
        className="mr-2 px-2 py-1 border border-gray-500 rounded"
      >
        Previous
      </Link>
      <span className="mx-2">
        Page {page} of {totalPages}
      </span>
      <Link
        href={
          page < totalPages
            ? `/properties?page=${page + 1}`
            : `/properties?page=${page}`
        }
        className="ml-2 px-2 py-1 border border-gray-500 rounded"
      >
        Next
      </Link>
    </section>
  );
};

export default Pagination;
