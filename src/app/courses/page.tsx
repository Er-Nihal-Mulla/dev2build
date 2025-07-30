
"use client";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaCode, FaJava, FaJs, FaPython, FaReact, FaDatabase, FaPlus, FaLaptopCode } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnrollmentForm } from '@/components/enrollment-form';
import { useState } from 'react';

const courses = [
  {
    name: 'C Programming',
    description: 'Master the fundamentals of C, a powerful language for system programming.',
    icon: <FaCode className="h-10 w-10 text-accent" />,
    difficulty: 'Beginner',
  },
  {
    name: 'C++ Development',
    description: 'Explore object-oriented programming and build high-performance applications.',
    icon: <FaPlus className="h-10 w-10 text-accent" />,
    difficulty: 'Intermediate',
  },
  {
    name: 'Java',
    description: 'Learn the versatile, platform-independent language used in enterprise-level apps.',
    icon: <FaJava className="h-10 w-10 text-accent" />,
    difficulty: 'Beginner',
  },
    {
    name: 'JavaScript',
    description: 'The language of the web. Learn the fundamentals of modern web development.',
    icon: <FaJs className="h-10 w-10 text-accent" />,
    difficulty: 'Beginner',
  },
  {
    name: 'Python',
    description: 'Dive into Python for web development, data science, and automation.',
    icon: <FaPython className="h-10 w-10 text-accent" />,
    difficulty: 'Beginner',
  },
  {
    name: 'Web Development',
    description: 'Build modern, responsive websites and web applications from scratch.',
    icon: <FaLaptopCode className="h-10 w-10 text-accent" />,
    difficulty: 'Intermediate',
  },
  {
    name: 'Fullstack Development',
    description: 'Become a full-stack developer by mastering frontend and backend technologies.',
    icon: <FaReact className="h-10 w-10 text-accent" />,
    difficulty: 'Advanced',
  },
  {
    name: 'Data Structures',
    description: 'Understand the core concepts of data structures for efficient problem-solving.',
    icon: <FaDatabase className="h-10 w-10 text-accent" />,
    difficulty: 'Advanced',
  }
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEnrollClick = (courseName: string) => {
    setSelectedCourse(courseName);
    setDialogOpen(true);
  }

  return (
    <div className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-6xl text-accent mb-12">
                Our Courses
            </h1>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {courses.map((course) => (
                      <Card key={course.name} className="flex flex-col bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 transform">
                          <CardHeader className="items-center text-center">
                              {course.icon}
                              <CardTitle className="mt-4">{course.name}</CardTitle>
                              <CardDescription className="text-accent">{course.difficulty}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                              <p className="text-sm text-muted-foreground text-center">
                                  {course.description}
                              </p>
                          </CardContent>
                          <div className="p-6 pt-0">
                            <DialogTrigger asChild>
                              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => handleEnrollClick(course.name)}>Enroll Now</Button>
                            </DialogTrigger>
                          </div>
                      </Card>
                  ))}
              </div>
              <DialogContent className="sm:max-w-[425px] bg-background/90 border-accent/20">
                <DialogHeader>
                  <DialogTitle className="text-accent">Enroll in a Course</DialogTitle>
                  <DialogDescription>
                    Start your coding journey with us. Fill out the form below to enroll.
                  </DialogDescription>
                </DialogHeader>
                <EnrollmentForm courseName={selectedCourse} allCourses={courses.map(c => c.name)} />
              </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}
