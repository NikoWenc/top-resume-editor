import Header from "./Components/Header/Header";
import Middle from "./Components/Middle/Middle";

function App() {
  return (
    <div className="flex items-center justify-center">
      <main className="my-5 h-[1123px] w-[794px] border-2 border-solid bg-white p-10">
        <div className="border-b-2 border-gray-400">
          <Header />
        </div>
        <div>
          <Middle />
        </div>
      </main>
    </div>
  );
}

export default App;
