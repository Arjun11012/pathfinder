import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/images/hero.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">PathFinder</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Methodology</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it Works</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
            <Link href="/assessment">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 rounded-full px-6">
                Take Assessment
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-in fade-in duration-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-in fade-in duration-1000 delay-300"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 animate-in slide-in-from-bottom-8 duration-700">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider">Scientifically Backed</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                  Discover Your Ideal <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Career Path</span>
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Stop guessing. Use our validated psychometric assessment to uncover your true strengths, personality traits, and the careers where you will naturally thrive.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/assessment">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 rounded-full h-14 px-8 text-base">
                      Start Assessment <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-base bg-white/50 backdrop-blur hover:bg-white/80">
                    View Sample Report
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                        {String.fromCharCode(64+i)}
                      </div>
                    ))}
                  </div>
                  <p>Trusted by <span className="font-semibold text-foreground">10,000+</span> students</p>
                </div>
              </div>
              
              <div className="relative lg:h-[600px] flex items-center justify-center animate-in fade-in duration-1000 delay-300">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl rotate-6 scale-105 transition-transform duration-500"></div>
                  <img 
                    src={heroImage} 
                    alt="Abstract Career Assessment Illustration" 
                    className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl shadow-primary/10 border border-white/50"
                  />
                  
                  {/* Floating Elements */}
                  <Card className="absolute -bottom-6 -left-6 z-20 shadow-xl border-white/50 bg-white/90 backdrop-blur animate-in slide-in-from-bottom-4 duration-700 delay-500">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">Top Match</p>
                        <p className="text-sm font-bold">Product Manager</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Analysis</h2>
              <p className="text-lg text-muted-foreground">Our methodology goes beyond simple interests, examining the core pillars of professional success.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8 text-primary" />,
                  title: "Interest Profiling",
                  desc: "Map your natural inclinations against the RIASEC model to find work you genuinely enjoy.",
                  color: "bg-primary/10"
                },
                {
                  icon: <Brain className="w-8 h-8 text-accent" />,
                  title: "Personality Analysis",
                  desc: "Evaluate your Big Five traits to understand your ideal work environment and culture fit.",
                  color: "bg-accent/10"
                },
                {
                  icon: <LineChart className="w-8 h-8 text-blue-500" />,
                  title: "Career Matching",
                  desc: "Our algorithm cross-references your profile with hundreds of careers to find your perfect fit.",
                  color: "bg-blue-500/10"
                }
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Your journey to career clarity in three simple steps.</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 -translate-y-1/2 z-0"></div>
                
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  {[
                    { step: "01", title: "Answer Questions", desc: "Take our 15-minute scientific assessment." },
                    { step: "02", title: "Get Analyzed", desc: "Our system processes your unique profile." },
                    { step: "03", title: "Explore Careers", desc: "Discover tailored matches and insights." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-primary/30">
                        {item.step}
                      </div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/assessment">
                <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-full h-14 px-8 text-base">
                  Begin Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold text-lg">PathFinder</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Career Guide</a>
              <a href="#" className="hover:text-foreground transition-colors">Methodology</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 PathFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}