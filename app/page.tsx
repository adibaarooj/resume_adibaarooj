"use client";

export default function Home() {
  return (
    <main className="resume-container">
      <section className="pdf-wrapper">
        <iframe
          src="/resume.pdf#zoom=100"
          title="Resume"
          className="pdf-viewer"
        />
      </section>
    </main>
  );
}
