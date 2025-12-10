import PropertyList from "../components/PropertyList";

export default function Homepage({ properties }) {
  return (
    <main>
      <PropertyList properties={properties} />
    </main>
  );
}
