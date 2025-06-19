import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generatePageMetadata } from "@/lib/seo";
import { allBlogPosts, getFeaturedPosts, blogCategories } from "@/lib/blog-data";
import Link from "next/link";

export const metadata = generatePageMetadata(
  "Google Ads & PPC Strategy Blog - Expert Insights from Performance Marketing Specialist",
  "Stay ahead with the latest Google Ads strategies, PPC optimization techniques, and performance marketing insights. In-depth guides, case studies, and actionable tips from a certified Google Ads Manager.",
  "/blog"
);
  export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-secondary to-background">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Google Ads & PPC
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                {" "}Strategy Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert insights, advanced strategies, and actionable tips from a certified Google Ads Manager. 
              Stay ahead with the latest performance marketing techniques and campaign optimization strategies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="#categories" variant="primary" size="lg">
                Browse Categories
              </Button>
              <Button href="#featured" variant="outline" size="lg">
                Featured Posts
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore specialized content organized by topic to find exactly what you need for your campaigns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category) => (
              <Card key={category.slug} className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl font-semibold ${category.color}`}>
                      {category.name}
                    </h3>
                    <span className="text-sm bg-accent px-2 py-1 rounded-full">
                      {category.postCount} posts
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  {category.postCount > 0 ? (
                    <Button variant="ghost" size="sm" className="w-full" href="#all-posts">
                      View Posts →
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="w-full" disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="py-16 bg-secondary/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep-dive articles covering the latest strategies and optimization techniques.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
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
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    <Link href={post.href} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
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

      {/* All Posts Section */}
      <section id="all-posts" className="py-16">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Posts</h2>
              <p className="text-lg text-muted-foreground">
                Complete collection of Google Ads and PPC optimization guides.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogPosts.map((post) => (
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
                    <span className="text-sm bg-accent px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                    <Link href={post.href} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Performance Marketing Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get weekly insights on Google Ads optimization, PPC strategies, and performance marketing trends 
              delivered straight to your inbox.
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