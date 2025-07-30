import { Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
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
              <a href="https://signal.me/#p/+meknazee.63" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline">
                message on signal →
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
          </Card>
        </div>
      </div>
    </section>;
};