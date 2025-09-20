import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Let's Build
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to discuss your next project or interested in our upcoming extensions? 
                We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <a 
                    href="mailto:michaelallenkuykendall@gmail.com" 
                    className="text-primary hover:text-primary/80 transition-colors underline"
                  >
                    michaelallenkuykendall@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground">Available for project discussions</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">Remote-first company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;