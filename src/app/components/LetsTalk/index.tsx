import LTButtons from "./LTButtons";

const links = [
    { name: "google", url: "https://www.google.com/" },
    { name: "facebook", url: "http://www.facebook.com" },
    { name: "twitter", url: "https://twitter.com/" }
  ];
  

function LetsTalk() {
  return (
    <div>
      <h1 className="title">Let &apos; s talk</h1>

      <div>
        {links?.map((r, index: number) => (
          <LTButtons key={index} label={r?.name} />
        ))}
      </div>
    </div>
  );
}

export default LetsTalk;
