import TheImpossibleForm from "./components/theimpossibleform";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-32 bg-[#F5F5DC] min-h-screen">
      <h1 className="text-7xl font-bold">The Impossible Form</h1>
      <TheImpossibleForm />
    </div>
  );
}
