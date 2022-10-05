import Clock from "./components/Clock";
import data from "./data/data";

function App() {
  return (
    <div className='container box-content w-full md:h-auto lg:h-[100vh]  pt-5 bg-slate-600'>
      <h1 className="text-center text-6xl font-bold p-4 bg bg-gradient-to-b from-[#0057b8] to-[#ffd700]">C.L.O.C.K.E.R</h1>
      <div className="flex flex-wrap p-5 mx-auto max-w-5xl md:w-full">
        {data.map(item => {
          return <Clock key={item.id}>{item}</Clock>
        })}
      </div>


    </div>
  );
}

export default App;
