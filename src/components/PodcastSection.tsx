import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/projects";

export const PodcastSection = () => {
  return (
    <section id="blog-posts" className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <FileText className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-foreground">blog posts</h2>
        </div>
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group matrix-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors lowercase">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed lowercase">
                  {post.description}
                </p>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  read on nostr <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};