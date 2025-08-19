import { Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import signalLogo from "../assets/signal-logo.png";
export const TennisCoachingSection = () => {
  return <section id="tennis-coaching" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Trophy className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-foreground">tennis coaching</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">private lessons</CardTitle>
              <CardDescription>
                get in touch via signal for tennis coaching sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="/schedule/private-lesson" 
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                schedule a private lesson →
              </a>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">strength & conditioning</CardTitle>
              <CardDescription>
                tools to help you get better on the court
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="/schedule/strength-conditioning" 
                className="inline-flex items-center text-primary hover:underline font-medium mr-4"
              >
                schedule S&C session →
              </a>
              <a 
                href="/strength-conditioning" 
                className="inline-flex items-center text-muted-foreground hover:text-primary hover:underline"
              >
                view training pillars
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};