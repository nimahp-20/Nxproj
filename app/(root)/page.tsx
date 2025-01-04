import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <div className="heading w-full">
          Pitch your startUp, <br /> Connect with entrepreneurs
        </div>
        <p className="sub-heading !max-w-3xl">
          Submit ideas,Vote on Pitches, and Get Noticed in virtual Competitions
        </p>
        <SearchForm/>
      </section>
    </>
  );
}
