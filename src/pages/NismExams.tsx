
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";

const NismExams = () => {
  useEffect(() => {
    document.title = "NISM Exams - myturnindia";
  }, []);

  const nismCertifications = [
    {
      id: "va",
      title: "Series V-A: Mutual Fund Distributors",
      description: "Required for individuals engaged in selling and distributing mutual funds",
      chapters: 12,
      difficulty: "Moderate"
    },
    {
      id: "vb",
      title: "Series V-B: Mutual Fund Foundation",
      description: "A foundation course for mutual fund knowledge",
      chapters: 8,
      difficulty: "Beginner"
    },
    {
      id: "viii",
      title: "Series VIII: Equity Derivatives",
      description: "For professionals dealing with equity derivatives",
      chapters: 15,
      difficulty: "Advanced"
    },
    {
      id: "xa",
      title: "Series X-A: Investment Adviser (Level 1)",
      description: "For individuals providing investment advice",
      chapters: 18,
      difficulty: "Advanced"
    },
    {
      id: "xb",
      title: "Series X-B: Investment Adviser (Level 2)",
      description: "Advanced course for investment advisers",
      chapters: 12,
      difficulty: "Expert"
    },
    {
      id: "xii",
      title: "Series XII: Securities Markets Foundation",
      description: "Basic knowledge about securities markets",
      chapters: 10,
      difficulty: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">NISM Certification Exams</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Prepare for your NISM certification with our chapter-wise mock tests designed by industry experts
            </p>
          </div>

          {/* Exam Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5 text-mcq-blue" />
                </div>
                <h3 className="font-semibold text-lg">Chapter-wise Tests</h3>
              </div>
              <p className="text-gray-600">
                Focus on specific chapters with 10 questions per test to master each topic thoroughly
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-mcq-blue" />
                </div>
                <h3 className="font-semibold text-lg">Realistic Format</h3>
              </div>
              <p className="text-gray-600">
                Experience the actual exam environment with 12-minute timed tests matching the official format
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <ArrowRight className="h-5 w-5 text-mcq-blue" />
                </div>
                <h3 className="font-semibold text-lg">Detailed Analysis</h3>
              </div>
              <p className="text-gray-600">
                Get comprehensive performance insights to identify your strengths and areas for improvement
              </p>
            </div>
          </div>

          {/* Available NISM Certifications */}
          <h2 className="text-2xl font-bold mb-6">Available NISM Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {nismCertifications.map((cert) => (
              <div key={cert.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{cert.chapters} Chapters</span>
                  <span>Difficulty: {cert.difficulty}</span>
                </div>
                <Button asChild className="w-full">
                  <Link to="/dashboard">View Mock Tests</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Practicing?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Access our comprehensive library of NISM mock tests and boost your chances of passing your certification exam on the first attempt
            </p>
            <Button asChild size="lg">
              <Link to="/register">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NismExams;
