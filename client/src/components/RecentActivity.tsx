import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentActivities } from "@/lib/data";

export default function RecentActivity() {
  return (
    <section id="activity" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Activity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentActivities.map((activity, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <Badge variant={activity.badgeVariant}>{activity.category}</Badge>
                  <span className="text-xs text-gray-500">{activity.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                <a href="#" className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                  View Details →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
