export default function LoadingDots() {
  const dots = Array.from({ length: 20 });

  return (
    <>
    <section>
      <div className="dots">
        {dots.map((_, i) => (
          <span key={i} style={{ "--i": i + 1 }}></span>
        ))}
      </div>
    </section>
    </>
  );
}