import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPublic } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">Reach out to collaborate, connect, or ask a question.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <MdEmail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-700">Email</h4>
                      <a href="mailto:mike.inbox.apply@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                        mike.inbox.apply@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <MdPublic className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-700">Social Media</h4>
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center">
                          <FaTiktok className="h-4 w-4" />
                          <span className="ml-1">TikTok</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center">
                          <FaYoutube className="h-4 w-4" />
                          <span className="ml-1">YouTube</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm MST</p>
                  <p className="text-gray-600">Response within 48 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
