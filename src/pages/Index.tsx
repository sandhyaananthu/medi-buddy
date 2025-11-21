import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pill, Clock, Bell, Heart } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary p-4 rounded-2xl mb-6">
            <Heart className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Never Miss Your Medication
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay healthy with smart medication reminders. Track your doses, get timely alerts, 
            and maintain perfect medication adherence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/set-reminder">
              <Button size="lg" className="text-lg px-8">
                <Bell className="mr-2 h-5 w-5" />
                Set Reminder
              </Button>
            </Link>
            <Link to="/my-medications">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Pill className="mr-2 h-5 w-5" />
                My Medications
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Set custom times and frequencies for each medication
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="pt-6">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Alerts</h3>
              <p className="text-muted-foreground">
                Get browser notifications at the perfect time
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="pt-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">
                Mark medications as taken and monitor adherence
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Start Your Health Journey Today</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of users who improved their medication adherence with MediTrack
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Index;
