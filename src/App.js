import { data, sheet1 } from "./data";

function App() {
  return (
    <div className="flex flex-col gap-5 p-3">
      <h1 className="text-center text-4xl"> Sample </h1>
      {sheet1.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-3 border-b last:border-none p-4 rounded-xl "
            style={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-zinc-800">
                <span>{index + 1}</span>. {item?.Question}
              </h2>
              <p className="px-2 py-1 rounded-lg bg-zinc-200 w-max text-sm font-semibold text-amber-500 tracking-wide uppercase">
                {item?.Topic}
              </p>
            </div>
            <ol className="list-item">
              <li>A. {item["Option A"] && item["Option A"]}</li>
              <li>B. {item["Option B"] && item["Option B"]}</li>
              <li>C. {item["Option C"] && item["Option C"]}</li>
              <li>D. {item["Option D"] && item["Option D"]}</li>
            </ol>
            <p className="px-2 py-1 rounded-lg bg-blue-200 text-sm font-semibold tracking-wide">
              {item?.Answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
