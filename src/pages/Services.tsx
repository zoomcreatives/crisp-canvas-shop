import { SEO } from "@/components/SEO";

const Services = () => {
  return (
    <div className="container py-8">
      <SEO title="Our Services | Crisp Canvas" description="Discover our tailoring, styling, and support services designed to enhance your wardrobe." />
      <header className="mb-8">
        <h1 className="font-display text-3xl">Our Services</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">From complimentary styling to easy alterations, we make it simple to look and feel your best.</p>
      </header>
      <main className="grid gap-6 md:grid-cols-3">
        <section className="rounded-lg border p-6 bg-card">
          <h2 className="font-medium">Tailoring</h2>
          <p className="text-sm text-muted-foreground mt-2">Perfect the fit with simple alterations on select items.</p>
        </section>
        <section className="rounded-lg border p-6 bg-card">
          <h2 className="font-medium">Styling</h2>
          <p className="text-sm text-muted-foreground mt-2">Book a 1:1 session for capsule wardrobe tips and outfit ideas.</p>
        </section>
        <section className="rounded-lg border p-6 bg-card">
          <h2 className="font-medium">Support</h2>
          <p className="text-sm text-muted-foreground mt-2">Our team is here to help with sizing, care, and orders.</p>
        </section>
      </main>
    </div>
  );
};

export default Services;
