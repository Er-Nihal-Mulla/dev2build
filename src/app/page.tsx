import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Coffee, FileCode2, Globe, Braces } from 'lucide-react';
import { PythonIcon } from '@/components/python-icon';
import { ContactForm } from '@/components/contact-form';

const courses = [
  {
    name: 'C Programming',
    description:
      'Master the fundamentals of C, a powerful language for system programming.',
    icon: <FileCode2 className="h-10 w-10 text-primary" />,
    hint: 'code block',
  },
  {
    name: 'C++ Development',
    description:
      'Explore object-oriented programming and build high-performance applications.',
    icon: <Braces className="h-10 w-10 text-primary" />,
    hint: 'modern office',
  },
  {
    name: 'Java',
    description:
      'Learn the versatile, platform-independent language used in enterprise-level apps.',
    icon: <Coffee className="h-10 w-10 text-primary" />,
    hint: 'coffee code',
  },
  {
    name: 'Python',
    description:
      'Dive into Python for web development, data science, and automation.',
    icon: <PythonIcon className="h-10 w-10 text-primary" />,
    hint: 'python snake',
  },
  {
    name: 'Web Development',
    description: 'Build modern, responsive websites and web applications from scratch.',
    icon: <Globe className="h-10 w-10 text-primary" />,
    hint: 'web design',
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              Welcome to Dev2Build Hub
            </h1>
            <p className="font-body mt-4 text-lg text-muted-foreground md:text-xl">
              Your journey to becoming a skilled developer starts here. We
              provide high-quality courses to help you master programming
              languages and build real-world projects.
            </p>
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="#courses">Explore Courses</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="w-full bg-card py-20 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                Our Courses
              </h2>
              <p className="font-body mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a curated selection of courses designed to take you
                from beginner to pro.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {courses.map((course) => (
              <Card
                key={course.name}
                className="flex transform flex-col items-center p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                data-ai-hint={course.hint}
              >
                <CardHeader className="items-center">
                  {course.icon}
                  <CardTitle className="font-headline mt-4">
                    {course.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-body">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-20 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Get in Touch
            </h2>
            <p className="font-body mt-4 text-muted-foreground md:text-xl">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
