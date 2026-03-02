import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Download, Share2, DollarSign, GraduationCap, TrendingUp } from "lucide-react";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  ResponsiveContainer, Tooltip as RechartsTooltip 
} from "recharts";
import { useAssessment } from "../context/AssessmentContext";
import { getCareerMatches } from "../utils/careerEngine";
import { useMemo } from "react";

export default function Dashboard() {
  const { getResults } = useAssessment();
  
  const results = useMemo(() => getResults(), [getResults]);
  const careerMatches = useMemo(() => getCareerMatches(results), [results]);

  const riasecData = [
    { subject: 'Realistic', A: results.interest.Realistic || 0, fullMark: 100 },
    { subject: 'Investigative', A: results.interest.Investigative || 0, fullMark: 100 },
    { subject: 'Artistic', A: results.interest.Artistic || 0, fullMark: 100 },
    { subject: 'Social', A: results.interest.Social || 0, fullMark: 100 },
    { subject: 'Enterprising', A: results.interest.Enterprising || 0, fullMark: 100 },
    { subject: 'Conventional', A: results.interest.Conventional || 0, fullMark: 100 },
  ];

  const personalityTraits = [
    { name: 'Openness', score: results.personality.Openness || 0, color: 'bg-blue-500' },
    { name: 'Conscientiousness', score: results.personality.Conscientiousness || 0, color: 'bg-emerald-500' },
    { name: 'Extraversion', score: results.personality.Extraversion || 0, color: 'bg-amber-500' },
    { name: 'Agreeableness', score: results.personality.Agreeableness || 0, color: 'bg-rose-500' },
    { name: 'Stability', score: results.personality.Stability || 0, color: 'bg-purple-500' },
  ];

  const topStrengths = Object.entries(results.strength)
    .sort(([, a]: any, [, b]: any) => b - a)
    .slice(0, 3)
    .map(([name]) => name);

  const coreValues = Object.entries(results.value)
    .sort(([, a]: any, [, b]: any) => b - a)
    .slice(0, 3)
    .map(([name]) => name);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold text-lg">PathFinder</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button size="sm" className="bg-primary">
              <Download className="w-4 h-4 mr-2" /> Export PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-6xl mt-8">
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-2">
            Your Career Blueprint
          </h1>
          <p className="text-lg text-muted-foreground">
            Based on your responses, we've identified your core traits and optimal career paths.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-md border-none overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <CardHeader className="bg-white pb-0">
                <CardTitle className="text-lg">Interest Profile</CardTitle>
                <CardDescription>RIASEC Model Assessment</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 bg-white flex justify-center">
                <div className="w-full aspect-square max-w-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={riasecData}>
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
                      <Radar
                        name="Score"
                        dataKey="A"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.4}
                      />
                      <RechartsTooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-none animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
              <CardHeader>
                <CardTitle className="text-lg">Personality Traits</CardTitle>
                <CardDescription>Big Five Dimensions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {personalityTraits.map((trait) => (
                  <div key={trait.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-700">{trait.name}</span>
                      <span className="font-bold text-slate-900">{trait.score}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${trait.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${trait.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              <Card className="shadow-md border-none bg-gradient-to-br from-indigo-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-900">Top Strengths</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {topStrengths.map(strength => (
                      <Badge key={strength} variant="secondary" className="px-3 py-1.5 bg-white text-indigo-700 border-indigo-100 font-medium">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md border-none bg-gradient-to-br from-emerald-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-900">Core Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {coreValues.map(value => (
                      <Badge key={value} variant="outline" className="px-3 py-1.5 bg-white text-emerald-700 border-emerald-200 font-medium rounded-full">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <h3 className="text-xl font-bold text-foreground mb-4">Top Career Matches</h3>
              {careerMatches.slice(0, 5).map((career, index) => (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow border-slate-200 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-2xl font-bold text-slate-900">{career.name}</h4>
                          <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">{career.category}</Badge>
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-100">
                          <p className="text-sm font-medium text-slate-900 mb-3">Key Strengths Needed:</p>
                          <div className="flex flex-wrap gap-2">
                            {career.requiredStrengths.map(tag => (
                              <span key={tag} className="text-xs inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-6 min-w-[140px] shrink-0 border border-slate-100">
                        <div className="relative">
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-200" />
                            <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="226.2" strokeDashoffset={226.2 - (226.2 * career.matchPercentage) / 100} className="text-primary transition-all duration-1000 ease-out" />
                          </svg>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-black text-slate-900">
                            {career.matchPercentage}<span className="text-sm">%</span>
                          </div>
                        </div>
                        <p className="text-xs font-medium text-slate-500 mt-2 uppercase tracking-wide">Match Score</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}