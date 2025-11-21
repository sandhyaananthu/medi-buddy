import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Shield, Users, Mail } from "lucide-react";
import { toast } from "sonner";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">About MediTrack</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted companion for medication adherence and health management
            </p>
          </section>

          {/* Mission Cards */}
          <section className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center animate-fade-in">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Health First</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize your health by ensuring you never miss a dose
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in">
              <CardContent className="pt-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Privacy Protected</h3>
                <p className="text-sm text-muted-foreground">
                  Your data stays on your device, completely private and secure
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in">
              <CardContent className="pt-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Care</h3>
                <p className="text-sm text-muted-foreground">
                  Join thousands improving their medication adherence daily
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Benefits Section */}
          <section className="mb-16 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Benefits of Medication Adherence</CardTitle>
                <CardDescription>
                  Why taking medications as prescribed matters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <div>
                      <strong>Better Health Outcomes:</strong> Proper medication adherence leads to improved treatment effectiveness
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <div>
                      <strong>Reduced Complications:</strong> Following your prescription prevents disease progression
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <div>
                      <strong>Cost Savings:</strong> Avoiding missed doses reduces emergency visits and hospitalizations
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <div>
                      <strong>Peace of Mind:</strong> Automated reminders eliminate stress about remembering medications
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Contact Form */}
          <section className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Mail className="h-6 w-6" />
                  Contact Us
                </CardTitle>
                <CardDescription>
                  Have questions or feedback? We'd love to hear from you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
