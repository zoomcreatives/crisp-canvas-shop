import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <div className="container py-8">
      <SEO title="About Us | Crisp Canvas" description="Learn about Crisp Canvas — our mission, craftsmanship, and commitment to minimalist design." />
      <header className="mb-8">
        <h1 className="font-display text-3xl">About Us</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">We craft elevated essentials with a focus on timeless silhouettes, premium materials, and responsible production.</p>
      </header>
      <main className="grid gap-8 md:grid-cols-2">
        <article className="space-y-4">
          <h2 className="font-display text-xl">Our Mission</h2>
          <p className="text-muted-foreground">Crisp Canvas was founded to simplify wardrobes. We believe in fewer, better pieces that combine comfort, durability, and style.</p>
          <h2 className="font-display text-xl">Craft & Quality</h2>
          <p className="text-muted-foreground">From fabric selection to final stitching, we obsess over every detail. Our partners follow ethical practices and fair labor standards.</p>
        </article>
        <aside className="rounded-lg border p-6 bg-card shadow-[var(--shadow-elegant)]">
          <h3 className="font-medium mb-2">Fast facts</h3>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
            <li>Founded in 2024</li>
            <li>Designed for daily wear</li>
            <li>Responsible materials</li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default About;
