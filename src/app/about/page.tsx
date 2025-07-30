import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const timeline = [
    {
        year: '2020',
        title: 'Academy Founded',
        description: 'dev2build was founded with the mission to make coding education accessible to everyone.'
    },
    {
        year: '2021',
        title: 'First 100 Students',
        description: 'We celebrated our first milestone of 100 students graduating from our courses.'
    },
    {
        year: '2022',
        title: 'Expanded Course Catalog',
        description: 'We added advanced courses in Fullstack Development and Data Structures.'
    },
    {
        year: '2023',
        title: 'Community Launch',
        description: 'Launched an online community for students to collaborate and support each other.'
    }
]

export default function AboutPage() {
    return (
        <div className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <section id="mission" className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-accent mb-4">Our Mission</h1>
                    <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
                        We are dedicated to providing the best programming education to empower the next generation of builders and innovators. Our goal is to bridge the gap between academic learning and real-world application.
                    </p>
                </section>

                <section id="instructor" className="mt-20 md:mt-32 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                       <Avatar className="h-48 w-48 border-4 border-accent">
                          <AvatarImage src="https://placehold.co/400x400.png" alt="Instructor" />
                          <AvatarFallback>JD</AvatarFallback>
                       </Avatar>
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold text-accent mb-4">Meet the Instructor</h2>
                        <p className="text-muted-foreground mb-4">
                            Hi, I'm Jane Doe, a software engineer with over 10 years of experience at top tech companies. I started dev2build to share my passion for coding and help aspiring developers achieve their dreams. My teaching philosophy focuses on hands-on learning and building practical projects that solve real-world problems.
                        </p>
                        <p className="text-muted-foreground">
                            When I'm not coding or teaching, I enjoy hiking and exploring new technologies.
                        </p>
                    </div>
                </section>

                <section id="timeline" className="mt-20 md:mt-32">
                    <h2 className="text-3xl font-bold text-center text-accent mb-12">Our Journey</h2>
                    <div className="relative">
                       <div className="absolute left-1/2 w-0.5 h-full bg-accent/30 hidden md:block"></div>
                       {timeline.map((item, index) => (
                           <div key={index} className="mb-8 flex justify-between items-center w-full">
                               <div className="order-1 w-5/12 hidden md:block"></div>
                               <div className="z-10 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full">
                                   <h3 className="mx-auto font-semibold text-lg text-accent-foreground">{item.year}</h3>
                               </div>
                               <div className="order-1 bg-card rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                                   <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                   <p className="text-sm text-muted-foreground">{item.description}</p>
                               </div>
                           </div>
                       ))}
                    </div>
                </section>
            </div>
        </div>
    )
}