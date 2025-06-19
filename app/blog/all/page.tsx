import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/seo";
import { allBlogPosts, blogCategories } from "@/lib/blog-data";
import Link from "next/link";

export const metadata = generatePageMetadata(
  "All Blog Posts - Google Ads & PPC Strategy Guides | OnlyDeb",
  "Complete collection of Google Ads optimization guides, PPC strategies, and performance marketing insights. Expert tips for small businesses and advanced practitioners.",
  "/blog/all"
);

const categories = ["All", "Google Ads", "PPC Strategy", "Performance Marketing"];

export default function AllBlogPostsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-secondary to-background">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary font-medium">All Posts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All Blog Posts
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                {" "}({allBlogPosts.length})
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete collection of Google Ads optimization guides, PPC strategies, and performance marketing insights. 
              Expert tips for small businesses and advanced practitioners.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/blog" variant="outline" size="lg">
                ← Back to Blog
              </Button>
              <Button href="/contact" variant="primary" size="lg">
                Get Expert Help
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Section - Future Enhancement */}
      <section className="py-8 border-b bg-secondary/20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "primary" : "ghost"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              {allBlogPosts.length} articles
            </div>
          </div>
        </Container>
      </section>

      {/* All Posts Grid */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post, index) => (
              <Card key={post.slug} className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 overflow-hidden">
                {post.image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={`${post.title} - Featured image`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm bg-primary px-2 py-1 rounded-full text-primary-foreground">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                    <Link href={post.href} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-accent px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" href={post.href}>
                      Read More →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Navigation */}
      <section className="py-12 bg-secondary/30">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Looking for something specific?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/blog" variant="outline" size="lg">
                Browse by Category
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
              <Button href="/results" variant="outline" size="lg">
                Client Results
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with New Posts
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get notified when we publish new Google Ads and PPC optimization guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button href="/contact" variant="primary" size="lg" className="flex-1">
                Subscribe to Updates
              </Button>
              <Button href="/work-with-me" variant="outline" size="lg">
                Work with Me
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 