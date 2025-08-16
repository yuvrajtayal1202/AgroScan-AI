import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Search, 
  FileCheck, 
  Zap, 
  Target, 
  Wifi, 
  Crop,
  Star,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Award,
  Sparkles,
  Brain,
  Eye,
  Leaf,
  TrendingUp,
  Globe
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 border-b border-green-600/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <Crop className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-green-400">AgroScan</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {['Features', 'About', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700 px-6 py-2">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
            url('https://images.pexels.com/photos/2281073/pexels-photo-2281073.jpeg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-green-600/20 text-green-300 border-green-600 px-6 py-2">
              🌱 AI-Powered Plant Protection
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Revolutionize
              <span className="block text-green-400 mt-2">Agriculture</span>
              <span className="block text-blue-400 mt-2">With AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Detect plant diseases instantly with 99.9% accuracy. 
              Protect your crops, maximize yields, secure the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-12 py-4">
                <Upload className="mr-2 h-5 w-5" />
                Scan Your Plant Now
              </Button>
              <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400/10 text-lg px-12 py-4">
                <Eye className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10M+</div>
                <div className="text-gray-400">Plants Scanned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100K+</div>
                <div className="text-gray-400">Happy Farmers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Upload & Analyze</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Simply take a photo of your plant and let our AI provide instant diagnosis 
            with treatment recommendations in seconds.
          </p>
          
          <div className="bg-gray-700 border-2 border-dashed border-green-500 rounded-2xl p-16 hover:border-green-400 transition-colors">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Upload className="h-12 w-12 text-white" />
              </div>
              
              <div className="text-2xl font-bold text-white mb-4">
                {selectedFile ? (
                  <span className="text-green-400">✓ {selectedFile.name}</span>
                ) : (
                  "Drop your plant image here"
                )}
              </div>
              
              <p className="text-gray-400 mb-8">
                Supports JPG, PNG, HEIC up to 10MB
              </p>
              
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              
              <label htmlFor="file-upload">
                <Button className="cursor-pointer bg-green-600 hover:bg-green-700 px-8 py-4" asChild>
                  <span>Choose File</span>
                </Button>
              </label>
              
              {selectedFile && (
                <div className="mt-8">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 py-4">
                    <Search className="mr-2 h-5 w-5" />
                    Analyze Plant
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-green-200 max-w-2xl mx-auto">
              Get instant plant health insights in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "1. Upload Image",
                description: "Take a clear photo of your plant showing any concerning areas or symptoms"
              },
              {
                icon: Search,
                title: "2. AI Analysis",
                description: "Our advanced AI analyzes your image against thousands of plant disease patterns"
              },
              {
                icon: FileCheck,
                title: "3. Get Report",
                description: "Receive detailed diagnosis with treatment recommendations and prevention tips"
              }
            ].map((step, index) => (
              <Card key={index} className="bg-green-800 border-green-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-green-200">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose AgroScan?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced features designed for modern farmers and plant enthusiasts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Get results in under 3 seconds", stat: "< 3s" },
              { icon: Target, title: "99% Accurate", description: "Industry-leading accuracy", stat: "99%" },
              { icon: Wifi, title: "Works Offline", description: "No internet required", stat: "100%" },
              { icon: Crop, title: "All Crops", description: "500+ plant species supported", stat: "500+" }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">{feature.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl text-green-200 leading-relaxed mb-8">
            At AgroScan, we believe that technology can revolutionize agriculture. Our mission is to empower farmers 
            and gardeners worldwide with accessible, accurate plant disease detection tools that help protect crops, 
            reduce pesticide use, and ensure food security for future generations.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "100K+", label: "Active Users" },
              { value: "10M+", label: "Plants Analyzed" },
              { value: "99.9%", label: "Accuracy Rate" },
              { value: "180+", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-green-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What Our Users Say</h2>
            <p className="text-xl text-gray-300">Trusted by farmers worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Martinez",
                role: "Organic Farmer, California",
                content: "AgroScan saved my tomato crop! Detected early blight before I even noticed symptoms. The treatment recommendations were spot-on.",
                rating: 5
              },
              {
                name: "Sarah Chen",
                role: "Home Gardener, New York",
                content: "As a beginner gardener, AgroScan has been invaluable. It's like having a plant expert in my pocket!",
                rating: 5
              },
              {
                name: "Robert Patel",
                role: "Agricultural Consultant, Texas",
                content: "Incredible accuracy and speed. AgroScan has become an essential tool for our commercial operations.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-green-200">Have questions? We'd love to hear from you.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-green-200">contact@agroscan.ai</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-green-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-green-200">123 AgTech Drive, San Francisco, CA 94105</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-green-400 text-green-400 hover:bg-green-400/10">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-green-400 text-green-400 hover:bg-green-400/10">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-green-400 text-green-400 hover:bg-green-400/10">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="bg-green-800 border-green-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                <CardDescription className="text-lg text-green-200">
                  We'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-green-200">First Name</Label>
                      <Input id="firstName" placeholder="John" className="bg-green-700 border-green-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-green-200">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="bg-green-700 border-green-600 text-white" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-green-200">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-green-700 border-green-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-green-200">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="bg-green-700 border-green-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-green-200">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your needs..." className="min-h-[120px] bg-green-700 border-green-600 text-white" />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-500 py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Crop className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AgroScan</span>
              </div>
              <p className="text-gray-400">
                AI-powered plant disease detection for modern agriculture.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgroScan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
