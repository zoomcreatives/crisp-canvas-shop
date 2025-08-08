import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container py-8 max-w-3xl">
      <SEO title="Contact | Crisp Canvas" description="Get in touch with Crisp Canvas — questions, feedback, and support." />
      <header className="mb-8">
        <h1 className="font-display text-3xl">Contact</h1>
        <p className="mt-2 text-muted-foreground">We typically respond within 1–2 business days.</p>
      </header>
      <form className="grid gap-4">
        <input className="rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder="Name" />
        <input type="email" className="rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder="Email" />
        <textarea className="min-h-[140px] rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder="Message" />
        <Button type="submit" className="justify-self-start">Send</Button>
      </form>
    </div>
  );
};

export default Contact;
