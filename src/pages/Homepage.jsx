import PropertyList from "../components/PropertyList";

export default function Homepage({ properties }) {
  return (
    <main>
      <h2>Places to stay 🏡</h2>
      <PropertyList properties={properties} />
    </main>
  );
}
