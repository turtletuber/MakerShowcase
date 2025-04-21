export default function Impact() {
  return (
    <section id="impact" className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src="https://maker-portfolio.vercel.app/_next/image?url=%2Fimages%2Fheadshot_mike.png&w=640&q=75" 
              alt="Mike Amato wearing safety gear" 
              className="rounded-xl shadow-md w-full md:max-w-xs"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How I Make an Impact</h2>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Classroom Tech Integration:</span>
                  <span className="text-gray-700"> Helping schools integrate tech in ways that actually work for teachers and students. Not complicating it and ensuring compliance and practicality.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Project & Problem-Based Learning:</span>
                  <span className="text-gray-700"> From electric motor kits for distance learning to school-wide STEM events, I design experiences where students do first, while understanding.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Inclusion by Design:</span>
                  <span className="text-gray-700"> Using Universal Design for Learning (UDL) to create classrooms where every student thrives, not just the "STEM naturals."</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <div>
                  <span className="text-gray-700">Students call me Mr. Mike or Maker Mike!</span>
                </div>
              </li>
            </ul>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">7+ yrs</div>
                <div className="text-sm text-gray-500">Teaching</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">4+ yrs</div>
                <div className="text-sm text-gray-500">Managing</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">$25k+</div>
                <div className="text-sm text-gray-500">Awards & Grants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
