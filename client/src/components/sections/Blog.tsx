import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Calendar, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "../../components/ui/card";
import { blogPosts, getFeaturedPosts, formatDate, BlogPost, getRecentPosts } from '../../data/blog';

type CategoryFilter = BlogPost['category'] | 'all';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);
  
  const filteredPosts = selectedCategory === 'all' 
    ? recentPosts 
    : recentPosts.filter(post => post.category === selectedCategory);

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'All Articles' },
    { value: 'wellness', label: 'Wellness' },
    { value: 'exercise', label: 'Exercise' },
    { value: 'nutrition', label: 'Nutrition' },
    { value: 'therapy', label: 'Therapy' },
    { value: 'lifestyle', label: 'Lifestyle' }
  ];

  const getCategoryColor = (category: BlogPost['category']) => {
    switch(category) {
      case 'wellness': return 'bg-blue-500/10 text-blue-500';
      case 'exercise': return 'bg-green-500/10 text-green-500';
      case 'nutrition': return 'bg-yellow-500/10 text-yellow-500';
      case 'therapy': return 'bg-purple-500/10 text-purple-500';
      case 'lifestyle': return 'bg-pink-500/10 text-pink-500';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-3">Health Insights</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Articles & Tips
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Expert advice, health tips, and wellness information from our specialists to help you live your best life.
          </p>
        </div>

        {/* Featured Post - First Post Only */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6 bg-card rounded-xl overflow-hidden border border-border shadow-md"
            >
              <div className="relative h-64 md:h-full overflow-hidden">
                <img 
                  src={featuredPosts[0].image} 
                  alt={featuredPosts[0].altText}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className={`${getCategoryColor(featuredPosts[0].category)}`}>
                    {categories.find(c => c.value === featuredPosts[0].category)?.label}
                  </Badge>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <Badge variant="outline" className="mb-3 text-foreground/70 border-border">Featured</Badge>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mt-2 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-primary" />
                      <span>{formatDate(featuredPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-primary" />
                      <span>{featuredPosts[0].readTime} min read</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="inline-flex items-center border-primary text-primary hover:bg-primary/10"
                  >
                    Read Article
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Badge 
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className={`cursor-pointer py-2 px-4 text-sm ${
                selectedCategory === category.value 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-transparent hover:bg-muted text-muted-foreground border-border"
              }`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card border-border overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.altText}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`${getCategoryColor(post.category)}`}>
                      {categories.find(c => c.value === post.category)?.label}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-card-foreground">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm flex-grow">
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0 pb-4">
                  <div className="flex items-center text-xs text-muted-foreground space-x-3">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1 text-primary" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1 text-primary" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary p-0 hover:bg-transparent hover:text-primary/80">
                    Read <ArrowRight size={12} className="ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No articles found in this category.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="inline-flex items-center border-primary text-primary hover:bg-primary/10"
          >
            View All Articles
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;