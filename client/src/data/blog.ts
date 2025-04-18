export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  category: 'wellness' | 'exercise' | 'nutrition' | 'therapy' | 'lifestyle';
  date: string;
  readTime: number; // in minutes
  featured: boolean;
  image: string;
  altText: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'benefits-of-chiropractic-care',
    title: 'The Long-Term Benefits of Regular Chiropractic Care',
    excerpt: 'Discover how regular chiropractic adjustments can improve your overall health and well-being beyond just relieving back pain.',
    content: `
      <p>Regular chiropractic care goes beyond simply addressing back and neck pain. While many patients initially seek chiropractic treatment for pain relief, the long-term benefits extend to improved nerve function, better posture, enhanced mobility, and overall wellness.</p>
      
      <h2>Improved Nervous System Function</h2>
      <p>Your spine houses the nervous system, which controls every function in your body. When vertebrae are misaligned, they can put pressure on nerves, interfering with the communication between your brain and body. Regular chiropractic adjustments help maintain proper alignment, allowing your nervous system to function optimally.</p>
      
      <h2>Enhanced Mobility and Flexibility</h2>
      <p>As we age, joint mobility naturally decreases. Chiropractic care helps maintain and even improve joint mobility by ensuring proper alignment and function. This can help prevent the progressive stiffening that often comes with aging.</p>
      
      <h2>Better Posture</h2>
      <p>In today's world of desk jobs and smartphone use, poor posture has become increasingly common. Regular chiropractic adjustments, combined with postural exercises and ergonomic advice, can help correct these issues, leading to better posture and reduced strain on your body.</p>
      
      <h2>Preventative Health Care</h2>
      <p>Rather than only seeking care when you're in pain, regular chiropractic visits can help prevent problems before they start. Many patients find that maintaining a regular adjustment schedule helps them avoid the recurrence of previous issues.</p>
      
      <h2>Improved Quality of Life</h2>
      <p>When your body functions better, you feel better. Many patients report improvements in sleep, energy levels, and overall well-being with regular chiropractic care.</p>
      
      <p>While the frequency of chiropractic visits varies depending on individual needs and health goals, many patients benefit from monthly maintenance adjustments. Consult with your chiropractor to develop a care plan that's right for you.</p>
    `,
    author: 'Dr. Sarah Johnson',
    authorTitle: 'Doctor of Chiropractic',
    category: 'wellness',
    date: '2025-03-15',
    readTime: 5,
    featured: true,
    image: 'https://images.unsplash.com/photo-1629476509194-cc5c3f2f0365?auto=format&fit=crop&w=1200&q=80',
    altText: 'Chiropractic adjustment table in a modern wellness center'
  },
  {
    id: 'stretches-for-desk-workers',
    title: '5 Essential Stretches for Desk Workers',
    excerpt: 'Simple yet effective stretches you can do throughout your workday to prevent stiffness and reduce the risk of repetitive strain injuries.',
    content: `
      <p>Spending long hours at a desk can take a toll on your body. These five stretches can be done right at your desk to help prevent stiffness and reduce the risk of repetitive strain injuries.</p>
      
      <h2>1. Neck Rolls</h2>
      <p>Gently roll your head in a circular motion, first clockwise and then counterclockwise. This helps relieve tension in the neck and upper shoulders. Perform 5-10 circles in each direction.</p>
      
      <h2>2. Shoulder Blade Squeezes</h2>
      <p>Sit up straight and pull your shoulder blades together, as if trying to hold a pencil between them. Hold for 5-10 seconds and release. Repeat 10 times. This helps improve posture and counteracts the forward slouch that often happens when sitting at a desk.</p>
      
      <h2>3. Wrist and Forearm Stretch</h2>
      <p>Extend one arm in front of you with the palm facing up. With your other hand, gently pull the fingers down and back toward your body until you feel a stretch in your forearm. Hold for 15-30 seconds and switch sides. This helps prevent carpal tunnel syndrome and other repetitive strain injuries.</p>
      
      <h2>4. Seated Spinal Twist</h2>
      <p>Sitting up straight, place your right hand on your left knee and your left hand behind you on your chair. Gently twist to the left, looking over your left shoulder. Hold for 15-30 seconds and switch sides. This helps relieve tension in the spine and improves mobility.</p>
      
      <h2>5. Hip Flexor Stretch</h2>
      <p>While seated, place your right ankle on your left knee in a figure-four position. Gently press down on your right knee to deepen the stretch. Hold for 15-30 seconds and switch sides. This helps relieve tension in the hips that builds up from prolonged sitting.</p>
      
      <p>For best results, try to do these stretches every 1-2 hours throughout your workday. Remember, movement is medicine! If you're experiencing persistent pain or discomfort, consider consulting with one of our physiotherapists or chiropractors for personalized advice.</p>
    `,
    author: 'Emma Rodriguez',
    authorTitle: 'Senior Physiotherapist',
    category: 'exercise',
    date: '2025-03-02',
    readTime: 4,
    featured: true,
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=80',
    altText: 'Modern ergonomic office workspace setup'
  },
  {
    id: 'massage-therapy-benefits',
    title: 'Beyond Relaxation: The Therapeutic Benefits of Massage',
    excerpt: 'Learn how regular massage therapy can improve your physical health, mental well-being, and overall quality of life.',
    content: `
      <p>While many people think of massage therapy as a luxury or indulgence, it actually offers numerous health benefits beyond just relaxation. Regular massage therapy can be an important part of your health maintenance plan.</p>
      
      <h2>Physical Benefits</h2>
      <p>Massage therapy has been shown to:</p>
      <ul>
        <li>Reduce muscle tension and pain</li>
        <li>Improve circulation</li>
        <li>Enhance immune function</li>
        <li>Reduce inflammation</li>
        <li>Promote better sleep</li>
        <li>Increase range of motion and flexibility</li>
      </ul>
      
      <h2>Mental and Emotional Benefits</h2>
      <p>The benefits of massage therapy extend to mental and emotional well-being as well:</p>
      <ul>
        <li>Reduced stress and anxiety</li>
        <li>Decreased symptoms of depression</li>
        <li>Improved mood</li>
        <li>Enhanced relaxation response</li>
        <li>Greater mind-body awareness</li>
      </ul>
      
      <h2>Types of Massage and Their Benefits</h2>
      <p>Different types of massage offer different benefits:</p>
      <p><strong>Swedish Massage:</strong> Gentle and relaxing, good for first-time massage clients and general relaxation.</p>
      <p><strong>Deep Tissue Massage:</strong> Targets deeper layers of muscle and connective tissue, helpful for chronic tension and pain.</p>
      <p><strong>Sports Massage:</strong> Designed for athletes to prepare for or recover from athletic performance.</p>
      <p><strong>Trigger Point Therapy:</strong> Focuses on specific "trigger points" or tight areas within muscle tissue that cause pain.</p>
      
      <h2>Who Can Benefit from Massage Therapy?</h2>
      <p>Almost everyone can benefit from massage therapy, but it's particularly beneficial for:</p>
      <ul>
        <li>Athletes (professional and recreational)</li>
        <li>People with chronic pain conditions</li>
        <li>Those with high-stress jobs</li>
        <li>Individuals recovering from injuries</li>
        <li>People with postural issues from desk work</li>
      </ul>
      
      <p>At Endorphins Health and Wellness Centre, our registered massage therapists are trained in various massage techniques and can create a personalized treatment plan based on your specific needs and health goals. Contact us today to book your appointment!</p>
    `,
    author: 'James Lee',
    authorTitle: 'Registered Massage Therapist',
    category: 'therapy',
    date: '2025-02-18',
    readTime: 6,
    featured: false,
    image: 'https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=1200&q=80',
    altText: 'Massage therapy room with essential oils and stones'
  },
  {
    id: 'nutrition-for-recovery',
    title: 'Nutrition Tips for Faster Recovery After Injury',
    excerpt: 'What you eat plays a crucial role in how quickly your body heals. Learn which foods can help speed up your recovery process.',
    content: `
      <p>When you're recovering from an injury, proper nutrition can significantly impact how quickly and effectively your body heals. Here are some nutritional strategies to support your recovery process.</p>
      
      <h2>Protein: The Building Block of Repair</h2>
      <p>Protein is essential for repairing damaged tissues and building new ones. After an injury, your protein needs may increase by up to 50%. Good sources include:</p>
      <ul>
        <li>Lean meats (chicken, turkey, lean beef)</li>
        <li>Fish (especially fatty fish like salmon, which also provides anti-inflammatory omega-3s)</li>
        <li>Eggs</li>
        <li>Dairy products (milk, yogurt, cottage cheese)</li>
        <li>Plant-based proteins (legumes, tofu, tempeh)</li>
      </ul>
      <p>Aim to include protein in every meal and consider spreading your intake throughout the day rather than consuming most of it in one meal.</p>
      
      <h2>Anti-Inflammatory Foods</h2>
      <p>Inflammation is a natural part of the healing process, but excessive inflammation can delay recovery. Include these anti-inflammatory foods in your diet:</p>
      <ul>
        <li>Fatty fish (salmon, mackerel, sardines)</li>
        <li>Berries (blueberries, strawberries, raspberries)</li>
        <li>Nuts and seeds (walnuts, flaxseeds, chia seeds)</li>
        <li>Olive oil</li>
        <li>Leafy greens (spinach, kale)</li>
        <li>Turmeric and ginger</li>
      </ul>
      
      <h2>Vitamin C for Collagen Production</h2>
      <p>Vitamin C is crucial for collagen production, which helps form scar tissue, blood vessels, and cartilage. Good sources include:</p>
      <ul>
        <li>Citrus fruits (oranges, grapefruits)</li>
        <li>Berries</li>
        <li>Bell peppers</li>
        <li>Broccoli</li>
        <li>Kiwi</li>
      </ul>
      
      <h2>Calcium and Vitamin D for Bone Health</h2>
      <p>If you've suffered a bone injury, adequate calcium and vitamin D are essential:</p>
      <ul>
        <li>Calcium sources: dairy products, fortified plant milks, leafy greens, canned fish with bones</li>
        <li>Vitamin D sources: fatty fish, egg yolks, fortified foods (limited in food, consider supplements with healthcare provider guidance)</li>
      </ul>
      
      <h2>Zinc for Tissue Repair</h2>
      <p>Zinc plays a role in protein synthesis, cell growth, and immune function, all important for healing. Sources include:</p>
      <ul>
        <li>Oysters</li>
        <li>Red meat</li>
        <li>Poultry</li>
        <li>Beans</li>
        <li>Nuts and seeds</li>
      </ul>
      
      <h2>Hydration Is Key</h2>
      <p>Proper hydration is essential for all bodily functions, including the healing process. Water helps transport nutrients to your tissues and remove waste products. Aim to drink at least 8-10 cups of water daily, and possibly more if you're active or in a hot environment.</p>
      
      <p>Remember, these are general guidelines. For personalized nutrition advice during your recovery, consider consulting with a registered dietitian. At Endorphins Health and Wellness Centre, we take a holistic approach to recovery, addressing not just the physical aspects of rehabilitation but nutritional considerations as well.</p>
    `,
    author: 'Michael Chen',
    authorTitle: 'Doctor of Chiropractic',
    category: 'nutrition',
    date: '2025-02-10',
    readTime: 7,
    featured: false,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    altText: 'Healthy food for recovery and healing'
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRecentPosts(count: number): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}