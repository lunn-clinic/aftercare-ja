const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RedirectShim({ to }: { to: string }) {
  const target = `${BASE_PATH}${to}`;
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
      </noscript>
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          fontFamily: "sans-serif",
          color: "#666",
        }}
      >
        Redirecting…
      </div>
    </>
  );
}
