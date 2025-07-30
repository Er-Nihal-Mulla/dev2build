import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaJava, FaPython, FaCode } from 'react-icons/fa';
import Link from 'next/link';

const testimonials = [
    {
        quote: "This academy transformed my coding skills. The hands-on projects were incredibly valuable.",
        name: "Alex Johnson",
        title: "Fullstack Developer",
    },
    {
        quote: "The instructors are amazing! They are patient, knowledgeable, and always willing to help.",
        name: "Maria Garcia",
        title: "Software Engineer at Google",
    },
    {
        quote: "I landed my dream job after completing the Fullstack course. I can't recommend dev2build enough!",
        name: "James Lee",
        title: "Frontend Developer at Amazon",
    }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full h-[90vh] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background to-blue-900/50 z-0"></div>
            <div className="absolute inset-0 z-10 bg-grid-white/[0.05]"></div>

            {/* Floating Icons */}
            <FaJava className="absolute top-[20%] left-[10%] text-5xl text-accent/20 animate-bounce" />
            <FaPython className="absolute top-[50%] right-[15%] text-6xl text-accent/20 animate-pulse" />
            <FaCode className="absolute bottom-[25%] left-[20%] text-4xl text-accent/20 animate-spin-slow" />
            <FaCode className="absolute bottom-[20%] right-[10%] text-5xl text-accent/20 animate-bounce" />


            <div className="container mx-auto px-4 md:px-6 text-center z-20">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Learn. Code. Build.
                        </h1>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                            Join dev2build to master in-demand programming skills and launch your tech career.
                        </p>
                    </div>
                    <div className="w-full max-w-sm mx-auto space-x-4">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                           <Link href="/courses">Join Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl text-accent mb-12">
              Why Choose Us?
            </h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 text-center p-4 rounded-lg hover:bg-card transition-all">
                <h3 className="text-lg font-bold">Expert-Led Courses</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from industry professionals with years of real-world experience.
                </p>
              </div>
              <div className="grid gap-1 text-center p-4 rounded-lg hover:bg-card transition-all">
                <h3 className="text-lg font-bold">Hands-On Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Build a portfolio of projects that showcase your skills to potential employers.
                </p>
              </div>
              <div className="grid gap-1 text-center p-4 rounded-lg hover:bg-card transition-all">
                <h3 className="text-lg font-bold">Career Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get help with your resume, portfolio, and interview preparation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl text-accent mb-12">
                    Success Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="bg-background/30 backdrop-blur-sm border-accent/20">
                            <CardContent className="pt-6">
                                <p className="text-lg italic">"{testimonial.quote}"</p>
                                <div className="mt-4">
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-sm text-accent">{testimonial.title}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}