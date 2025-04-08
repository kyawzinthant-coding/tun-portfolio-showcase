
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Layout, Server, Monitor } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6" />,
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Next.js", "Redux", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Python", "Django", "PHP", "Laravel"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "SQL", "NoSQL", "ORM"],
    },
    {
      title: "DevOps & Tools",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Cypress", "Webpack", "Linux"],
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP", "Go", "Ruby"],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career. Here's a snapshot of my technical skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
