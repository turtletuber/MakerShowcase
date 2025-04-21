import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPublic } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12 relative pattern-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">Reach out to collaborate, connect, or ask a question.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-primary/5 pattern-light"></div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
                
                <div className="rounded-lg overflow-hidden mb-4 shadow-md">
                  <img
                    src="/attached_assets/Ball%20is%20in%20your.gif"
                    alt="The ball is in your court"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-gray-700 mt-4 text-center font-medium">The ball is in your court!</p>
                
                <a href="mailto:mike.inbox.apply@gmail.com">
                  <Button className="w-full mt-4 bg-primary text-white hover:bg-primary/90 rounded-full">
                    Email Me Directly
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="shadow-lg h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5"></div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
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
                  
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
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
                
                <div className="mt-8 bg-white p-3 rounded-lg shadow-sm">
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
