import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-accent">
            Get in Touch
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Have questions or want to enroll? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            <div>
                <Card className="bg-card/50 backdrop-blur-sm border-accent/10">
                    <CardContent className="p-6">
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-accent mb-4">Our Location</h3>
                <div className="aspect-video w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61144.97741633541!2d74.20459364973349!3d16.7082607992523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0x20926754d5cf415!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1685373801234!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: 'var(--radius)' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
