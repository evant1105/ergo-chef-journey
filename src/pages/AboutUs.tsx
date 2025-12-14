import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { User, Heart } from "lucide-react";

const STORAGE_URL = "https://nhhrvyjpscpiamdkujre.supabase.co/storage/v1/object/public/aboutusimages";

const teamMembers = [
  { name: "Evan Teong Jian King", image: "" },
  { name: "Nik Ahmad", image: `${STORAGE_URL}/Nik Ahmad.jpg` },
  { name: "Malcolm Jeremiah Richard", image: `${STORAGE_URL}/Malcolm Richard.jpg` },
  { name: "Lee Wen Zheh", image: `${STORAGE_URL}/Lee Wen Zheh.jpg` },
  { name: "Dina Kamelia Husaini", image: `${STORAGE_URL}/Dina.jpg` },
  { name: "Adam Tan", image: "" },
];

export default function AboutUs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">The Team</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the team behind ErgoChef+ — a group of passionate designers 
              dedicated to improving the cooking experience through ergonomic innovation.
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Heart className="h-4 w-4" /> Built with passion
            </span>
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden ring-4 ring-background shadow-lg group-hover:ring-primary/20 transition-all duration-300">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="h-14 w-14 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">{member.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that cooking should be a joyful experience, not a source of physical strain. 
              Through thoughtful design and innovative technology, we're working to make kitchens 
              more ergonomic and accessible for everyone.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
