import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-start lg:items-center justify-center text-white h-[100vh] gap-4 lg:gap-2 px-5">
        <h1 className="text-3xl font-bold">Hi! I am Yaw Otuo</h1>

        <p className="text-base lg:text-xl ">
          &quot;The most important skill for a programmer is the ability to
          effectively communicate ideas.&quot;
        </p>
        <p className="text-xs ">coming soon...</p>
      </div>
    </main>
  );
}
