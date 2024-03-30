import TSPill from "./TSPill";

const TData = [
  "React",
  "Node.js",
  "JavaScript",
  "Python",
  "HTML/CSS",
  "MongoDB",
  "Express.js",
  "Redux",
  "Vue.js",
  "Django",
  "Angular",
  "SQL",
  "Firebase",
  "AWS",
  "Docker",
];

function chunkArray(array: any, chunkSize: any) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function TechStack() {
  const chunkedTData = chunkArray(TData, 5); // Change 5 to your desired chunk size

  return (
    <div className="flex flex-col gap-5 lg:w-[70%] items-start min-h-[100vh] justify-center">
      <p className="title mb-10">Tech Stack</p>
      <div className="flex flex-col gap-10 items-start">
        {chunkedTData.map((chunk, index) => (
          <div className="flex items-center gap-5 justify-center flex-wrap" key={index}>
            {chunk.map((tech: any, idx: number) => (
              <div key={idx} className="">
                <TSPill data={tech} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
