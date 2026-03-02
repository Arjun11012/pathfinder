import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ArrowRight, MessageSquare, PenTool, Headphones, BarChart3, Globe, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a1a]">
      {/* Navigation */}
      <header className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-black flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">PathFinder</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">How it Works</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/assessment">
              <Button className="bg-black hover:bg-black/90 text-white rounded-md px-6 h-11 text-sm font-semibold">
                Start Free Trial →
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-8 bg-white shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Reduce career uncertainty by 85%
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            Discover engaging careers <br/>instantly ready to explore
          </h1>
          
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Find key strengths, analyze traits, and discover your path effortlessly. 
            A workflow with enterprise-grade psychometrics that understands context and delivers.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/assessment">
              <Button className="bg-black hover:bg-black/90 text-white rounded-md px-8 h-12 text-sm font-semibold">
                Start Free Trial →
              </Button>
            </Link>
            <Button variant="ghost" className="text-gray-600 hover:text-black font-semibold h-12">
              Book A Demo →
            </Button>
          </div>
        </section>

        {/* Product UI Mockup Grid */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Conversations Card */}
            <Card className="bg-[#F9FAFB] border-none shadow-sm rounded-2xl overflow-hidden p-8">
              <p className="text-sm font-medium text-gray-600 mb-12">Always with our live support</p>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-40 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mb-4"></div>
                  <span className="text-4xl font-bold mb-1">300K</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Daily Conversations</span>
                </div>
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F9FAFB] bg-gray-200"></div>
                   ))}
                   <div className="w-8 h-8 rounded-full border-2 border-[#F9FAFB] bg-white flex items-center justify-center text-[10px] font-bold text-gray-400">+2</div>
                </div>
              </div>
            </Card>

            {/* AI Assistant Card */}
            <Card className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 lg:scale-105 z-10">
              <div className="flex items-center gap-2 mb-8">
                <Brain className="w-5 h-5" />
                <span className="text-sm font-bold">AI Path Assistant</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase">AI Generated:</p>
                  <p className="text-xs font-medium mb-4">Transform your career in 30 days! Join thousands who've already achieved their goals.</p>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <ArrowRight className="w-3 h-3" />
                    Start your free trial today!
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="relative">
                    <input type="text" placeholder="Explore careers for creative..." className="w-full bg-gray-50 border-none rounded-lg py-3 px-4 text-xs pr-12" />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 rounded p-1.5">
                       <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Support Card */}
            <Card className="bg-[#F9FAFB] border-none shadow-sm rounded-2xl p-8">
              <p className="text-sm font-medium text-gray-600 mb-8">Chat with us in Support</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-gray-200 shrink-0"></div>
                   <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-[10px]">Hello! How are you?</div>
                </div>
                <div className="flex items-start flex-row-reverse gap-3">
                   <div className="w-6 h-6 rounded-full bg-black shrink-0"></div>
                   <div className="bg-black text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-[10px]">I'm fine! Can I help you?</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Logos Section */}
        <section className="container mx-auto px-6 mb-32 text-center">
          <p className="text-sm font-medium text-gray-400 mb-12">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">
            <span className="font-bold text-xl">blend</span>
            <span className="font-bold text-xl">bitpanda</span>
            <span className="font-bold text-xl italic">hippo</span>
            <span className="font-bold text-xl">Cerebral</span>
            <span className="font-bold text-xl">cameo</span>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-6 mb-32">
          <h2 className="text-3xl font-bold mb-4">Powerful features for modern guidance</h2>
          <p className="text-gray-500 mb-16 max-w-xl">From setup to deployment in minutes, our platform handles customer conversations delivers exceptional results.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-2">Trait Control</h3>
              <p className="text-sm text-gray-500 mb-8">Choose from friendly, professional</p>
              <div className="space-y-3">
                 {['friendly', 'empathetic', 'confident'].map((trait, i) => (
                   <div key={trait} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-6 h-6 rounded bg-orange-${100 * (i+1)}`}></div>
                      <span className="text-[10px] font-bold text-gray-600">{trait}</span>
                   </div>
                 ))}
              </div>
            </Card>
            
            <Card className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-2">SEO Optimization</h3>
              <p className="text-sm text-gray-500 mb-8">Built-in keyword suggestions to help</p>
              <div className="space-y-4">
                 <div className="p-3 bg-gray-50 rounded-lg text-[10px] text-gray-400">Q Search transaction</div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold">
                       <span>content optimization</span>
                       <span>94%</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-orange-400 w-[94%]"></div>
                    </div>
                 </div>
              </div>
            </Card>

            <Card className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-2">Multi-Language</h3>
              <p className="text-sm text-gray-500 mb-8">Break Language Barriers</p>
              <div className="space-y-3">
                 {[
                   { lang: 'Australian english', flag: '🇦🇺' },
                   { lang: 'ACanadian English', flag: '🇨🇦' },
                   { lang: 'American English', flag: '🇺🇸' }
                 ].map(item => (
                   <div key={item.lang} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-lg">{item.flag}</span>
                      <span className="text-[10px] font-bold text-gray-600">{item.lang}</span>
                   </div>
                 ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Pricing/Results Section */}
        <section className="container mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple transparent pricing</h2>
            <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade at any time.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <Card className="p-10 rounded-3xl border border-gray-100 bg-white">
                <p className="text-gray-500 mb-8 font-medium">"Our CTR improved by 32% using AI. The AI understands our brand perfectly and generates copy that actually converts."</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                   <div>
                      <p className="font-bold text-sm">Sarah Chen</p>
                      <p className="text-xs text-gray-400">Marketing Director at TechFlow</p>
                   </div>
                </div>
             </Card>
             <Card className="p-10 rounded-3xl border border-gray-100 bg-white">
                <p className="text-gray-500 mb-8 font-medium">"We've cut our content creation time in half while doubling our output quality. PathFinder is a game-changer for our agency."</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                   <div>
                      <p className="font-bold text-sm">Marcus Rodriguez</p>
                      <p className="text-xs text-gray-400">Creative Director at BrandCraft</p>
                   </div>
                </div>
             </Card>
          </div>
        </section>
      </main>

      <footer className="bg-[#F9FAFB] border-t py-12">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            <span className="font-bold text-lg">PathFinder</span>
          </div>
          <p className="text-sm text-gray-400">© 2026 PathFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}