import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
   <>
  <div className="min-h-screen bg-neutral-50">
    <header className="flex justify-between items-center px-8 py-6">
      <h1 className="text-2xl font-bold text-violet-700">Kavoru</h1>
      <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
        <a href="#features" className="hover:text-violet-600 transition-colors">Features</a>
        <a href="#about" className="hover:text-violet-600 transition-colors">About</a>
        <a href="#early" className="hover:text-violet-600 transition-colors">Get Early Access</a>
      </nav>
    </header>

    <section className="flex flex-col items-center text-center px-6 pt-16 pb-20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-32 left-0 w-72 h-72 bg-indigo-50 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/4"></div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Understand Your Feelings. <br />
        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 inline-block text-transparent bg-clip-text">Feel Tomorrow.</span>
      </h2>
      <p className="text-gray-600 max-w-xl mt-6 mb-10 text-lg">
        Kavoru helps you track emotions and predict your future moods with kindness and insight.
      </p>
      <Button 
        asChild 
        size="lg" 
        className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-sm"
      >
        <a href="#early">Join the Waitlist</a>
      </Button>
    </section>

    <section id="features" className="px-6 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Kavoru Helps</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border-none bg-white shadow-sm rounded-3xl hover:shadow-md transition-shadow overflow-hidden group">
          <div className="h-1 bg-gradient-to-r from-violet-400 to-purple-400 w-full"></div>
          <CardHeader className="pb-2 pt-6">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="bg-violet-50 p-2 rounded-full">💫</span> Daily Journaling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Log your feelings easily every day with gentle prompts.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none bg-white shadow-sm rounded-3xl hover:shadow-md transition-shadow overflow-hidden group">
          <div className="h-1 bg-gradient-to-r from-indigo-400 to-blue-400 w-full"></div>
          <CardHeader className="pb-2 pt-6">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="bg-indigo-50 p-2 rounded-full">🌿</span> Gentle Predictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Thoughtful forecasts based on your emotional patterns.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none bg-white shadow-sm rounded-3xl hover:shadow-md transition-shadow overflow-hidden group">
          <div className="h-1 bg-gradient-to-r from-purple-400 to-violet-400 w-full"></div>
          <CardHeader className="pb-2 pt-6">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="bg-purple-50 p-2 rounded-full">✨</span> Personal Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Understand how your moods shift and flow over time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    <section id="about" className="px-6 py-20 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-violet-700 mb-6">About Kavoru</h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          We believe emotions aren&apos;t problems to fix — they are journeys to understand.
          Kavoru offers a gentle mirror, helping you reflect, accept, and move forward.
        </p>
        <div className="p-6 bg-white rounded-2xl shadow-sm inline-block">
          <p className="text-violet-600 italic">&quot;Feel tomorrow, today.&quot;</p>
        </div>
      </div>
    </section>

    <section id="early" className="bg-gradient-to-br from-neutral-50 to-indigo-50/30 py-16 px-6 text-center relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-50 rounded-full filter blur-3xl opacity-30 -z-10 transform translate-x-1/4 translate-y-1/4"></div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get Early Access</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">Be among the first to experience Kavoru. A small circle of early users will shape our future together.</p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <Input 
          type="email" 
          placeholder="Your email" 
          className="px-5 py-3 h-12 rounded-full border-2 border-violet-100 focus-visible:ring-violet-200 bg-white"
        />
        <Button 
          type="submit" 
          size="lg"
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-full h-12 shadow-sm"
        >
          Join Now
        </Button>
      </form>
    </section>
    <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-200">
      © 2025 Kavoru. All rights reserved.
    </footer>
  </div>
   </>
  );
}
