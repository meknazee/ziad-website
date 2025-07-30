import { ArrowLeft, Dumbbell, Zap, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
          <p className="text-lg text-muted-foreground">
            specialized training programs designed to elevate your tennis performance through targeted physical development and conditioning.
          </p>
        </header>

        <section className="mb-12">
          <div className="bg-muted/50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">story placeholder</h2>
            <p className="text-muted-foreground italic">
              your tennis level is a reflection of your conditionning level.
              no matter where your game is at, conditionning is how you level up.
              to win matches, you need to move faster, hit harder, recover quicker and last longer than your opponent.
              simple enough. now let's get to work.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">training programs</h2>
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