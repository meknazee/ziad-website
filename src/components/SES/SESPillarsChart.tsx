import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  {
    pillar: "Strength",
    value: 85,
  },
  {
    pillar: "Endurance", 
    value: 90,
  },
  {
    pillar: "Skills",
    value: 80,
  },
];

const chartConfig = {
  value: {
    label: "Performance",
    color: "hsl(var(--primary))",
  },
};

const pillarsInfo = [
  {
    title: "Strength",
    description: "master the bodyweight, move lightweight fast, take care of the body.",
    icon: "💪"
  },
  {
    title: "Endurance", 
    description: "tennis requires the speed of a sprinter and the stamina of a marathoner. the goal is to build an engine and propel it with muscle stamina.",
    icon: "🏃"
  },
  {
    title: "Skills",
    description: "move better on the court. the best athletes move efficiently and are able to play longer and have longer careers.",
    icon: "🎾"
  }
];

export const SESPillarsChart = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">SES Training Pillars</CardTitle>
          <CardDescription>
            The foundation of elite tennis performance: Strength, Endurance, Skills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={chartData}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <PolarGrid />
                <PolarAngleAxis 
                  dataKey="pillar" 
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 14, fontWeight: 500 }}
                />
                <PolarRadiusAxis 
                  domain={[0, 100]} 
                  tick={false} 
                  axisLine={false}
                />
                <Radar
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {pillarsInfo.map((pillar, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="text-3xl mb-2">{pillar.icon}</div>
              <CardTitle className="text-xl">{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};