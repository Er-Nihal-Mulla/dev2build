
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  course: z.string({
    required_error: "Please select a course.",
  }),
});

interface EnrollmentFormProps {
  courseName?: string;
  allCourses: string[];
}

export function EnrollmentForm({ courseName, allCourses }: EnrollmentFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      course: courseName || "",
    },
  });

  useEffect(() => {
    if (courseName) {
      form.setValue("course", courseName);
    }
  }, [courseName, form]);


  // TODO: Implement Firestore submission for enrollments
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Enrollment Submitted!",
      description: "Thank you for enrolling. We will be in touch shortly.",
      variant: 'default',
      className: 'bg-green-500 text-white'
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} className="bg-background/80" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} className="bg-background/80" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                      <SelectTrigger className="bg-background/80">
                          <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border-accent/20">
                      {allCourses.map(course => (
                          <SelectItem key={course} value={course}>{course}</SelectItem>
                      ))}
                  </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Enroll Now
        </Button>
      </form>
    </Form>
  );
}
