import { ArrowLeft, Dumbbell, Zap, Target, Heart, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SESPillarsChart } from "@/components/SES/SESPillarsChart";

const StrengthConditioning = () => {
  const programs = [
    {
      title: "strength programs",
      description: "build power and muscle for explosive shots",
      icon: Dumbbell,
    },
    {
      title: "speed programs", 
      description: "improve your court movement and reaction time",
      icon: Zap,
    },
    {
      title: "agility drills",
      description: "enhance your footwork and directional changes", 
      icon: Target,
    },
    {
      title: "endurance programs",
      description: "build stamina for longer matches",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          back to home
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">strength & conditioning</h1>
          <p className="text-lg text-muted-foreground mb-8">
            In tennis, you can only go as far as your fitness takes you. Build the physical foundation for elite performance.
          </p>
          <a 
            href="/schedule/strength-conditioning" 
            className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Schedule S&C Session →
          </a>
        </header>

        {/* SES Pillars Chart */}
        <section className="mb-16">
          <SESPillarsChart />
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">training pillars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Icon className="w-6 h-6 text-primary mr-3" />
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {program.title}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StrengthConditioning;