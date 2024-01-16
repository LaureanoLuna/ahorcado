export default function Letra({ letra }) {
  return (
    <div
      style={{
        borderBottom: "1px solid white",
        textTransform: "uppercase",
        fontSize: "2em",
      }}
    >
      {letra}
    </div>
  );
}
