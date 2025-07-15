import { Bitcoin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const BitcoinResourcesSection = () => {
  return (
    <section id="bitcoin-resources" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Bitcoin className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-foreground">bitcoin resources</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                custody strategies
              </CardTitle>
              <CardDescription>
                comprehensive guide to bitcoin self-custody strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://bitcoin-custody-strategies.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                explore strategies →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};