import { SEO } from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
  return (
    <div className="container py-8 max-w-xl">
      <SEO title="Login | Crisp Canvas" description="Access your Crisp Canvas account or create a new one." />
      <h1 className="font-display text-2xl mb-6">Account</h1>
      <Tabs defaultValue="login" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="mt-6">
          <div className="space-y-4">
            <Input placeholder="Email" type="email" defaultValue="demo@demo.com" />
            <Input placeholder="Password" type="password" defaultValue="123456" />
            <Button className="w-full">Login</Button>
            <div className="rounded-md border bg-muted/30 p-3 text-xs text-muted-foreground">
              Demo credentials — Email: demo@demo.com, Password: 123456
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary">Google</Button>
              <Button variant="secondary">Apple</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="register" className="mt-6">
          <div className="space-y-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button className="w-full">Create Account</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
