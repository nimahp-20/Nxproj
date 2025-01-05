import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query
  return (
    <>
      <section className="pink_container">
        <div className="heading w-full">
          Pitch your startUp, <br /> Connect with entrepreneurs
        </div>
        <p className="sub-heading !max-w-3xl">
          Submit ideas,Vote on Pitches, and Get Noticed in virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
