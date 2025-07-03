import { useState, useEffect } from 'react'
import { Moon, Sun, Code, MapPin, DollarSign, Users, ExternalLink, Search, BookOpen, Target, CheckCircle, Star, Globe, Building, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const jobPlatforms = [
    {
      name: "LinkedIn Nigeria",
      url: "https://www.linkedin.com/jobs/search/?keywords=frontend%20developer&location=Nigeria",
      description: "Professional networking platform with extensive internship listings",
      type: "Professional Network",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      name: "Indeed Nigeria",
      url: "https://ng.indeed.com/jobs?q=frontend+developer&l=Nigeria",
      description: "Leading job search engine with local and remote opportunities",
      type: "Job Board",
      icon: <Search className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      name: "Jobberman",
      url: "https://www.jobberman.com/jobs?q=frontend+developer&location=nigeria",
      description: "Nigeria's largest job portal with tech-focused listings",
      type: "Job Board",
      icon: <Building className="w-6 h-6" />,
      color: "bg-orange-500"
    },
    {
      name: "NgCareers",
      url: "https://www.jobberman.com/jobs?q=software+developer&location=nigeria",
      description: "Nigerian career platform with graduate programs",
      type: "Career Platform",
      icon: <Target className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      name: "Glassdoor Nigeria",
      url: "https://www.glassdoor.com/Job/nigeria-frontend-developer-jobs-SRCH_IL.0,7_IN177_KO8,26.htm",
      description: "Salary insights and company reviews for informed decisions",
      type: "Career Intelligence",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-teal-500"
    },
    {
      name: "Wellfound (AngelList)",
      url: "https://wellfound.com/role/r/frontend-engineer",
      description: "Startup-focused platform with remote opportunities",
      type: "Startup Jobs",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-red-500"
    }
  ]

  const topCompanies = [
    {
      name: "Flutterwave",
      description: "Leading fintech company offering paid internships",
      salary: "₦150,000 - ₦300,000",
      type: "Fintech",
      remote: true
    },
    {
      name: "Andela",
      description: "Global technology talent accelerator",
      salary: "$1,000 - $3,000",
      type: "Tech Training",
      remote: true
    },
    {
      name: "Google STEP",
      description: "Student Training in Engineering Program",
      salary: "Competitive + Benefits",
      type: "Tech Giant",
      remote: false
    },
    {
      name: "MTN Nigeria",
      description: "Telecommunications leader with tech internships",
      salary: "₦100,000 - ₦250,000",
      type: "Telecommunications",
      remote: false
    },
    {
      name: "Shell Nigeria",
      description: "Energy company with digital transformation roles",
      salary: "₦200,000 - ₦400,000",
      type: "Energy/Tech",
      remote: false
    },
    {
      name: "Bincom ICT Solutions",
      description: "Software development company with mentorship programs",
      salary: "₦80,000 - ₦150,000",
      type: "Software Development",
      remote: true
    }
  ]

  const skillsRequired = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js or Vue.js",
    "Responsive Design",
    "Git & Version Control",
    "REST APIs",
    "Tailwind CSS or Bootstrap",
    "TypeScript (Bonus)",
    "Node.js (Basic)",
    "Problem Solving"
  ]

  const applicationTips = [
    {
      title: "Build a Strong Portfolio",
      description: "Create 3-5 projects showcasing different skills. Include live demos and GitHub links.",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Optimize Your LinkedIn Profile",
      description: "Use professional headshot, write compelling summary, and showcase your projects.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Tailor Your Applications",
      description: "Customize your resume and cover letter for each application. Research the company.",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Network Actively",
      description: "Join tech communities, attend virtual events, and connect with professionals.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Practice Technical Interviews",
      description: "Prepare for coding challenges and be ready to explain your projects in detail.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Follow Up Professionally",
      description: "Send thank-you emails after interviews and follow up on applications appropriately.",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b backdrop-blur-sm bg-opacity-90`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Frontend Internship Guide Nigeria
              </h1>
            </div>
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{darkMode ? 'Light' : 'Dark'}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Land Your Dream
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Frontend Internship</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your comprehensive guide to finding paid frontend development internships in Nigeria.
              From top platforms to salary insights, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
              <MapPin className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Nigeria-Focused</h3>
              <p className="text-blue-100">Tailored specifically for the Nigerian job market</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
              <DollarSign className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Paid Opportunities</h3>
              <p className="text-green-100">Focus on internships that offer compensation</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
              <Star className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
              <p className="text-purple-100">Proven strategies and insider tips</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Platforms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Job Platforms</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These platforms are your gateway to finding frontend development internships in Nigeria.
              Each offers unique advantages for job seekers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPlatforms.map((platform, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`${platform.color} p-2 rounded-lg text-white`}>
                      {platform.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{platform.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {platform.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-gray-600 dark:text-gray-300">
                    {platform.description}
                  </CardDescription>
                  <Button asChild className="w-full">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                      <span>Visit Platform</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Companies Hiring Interns</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These companies regularly offer paid frontend development internships to Nigerian students and graduates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topCompanies.map((company, index) => (
              <Card key={index} className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{company.name}</CardTitle>
                      <Badge variant="outline" className="mt-2">
                        {company.type}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                        {company.salary}
                      </div>
                      {company.remote && (
                        <Badge className="mt-1 bg-blue-500">Remote Available</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{company.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Essential Skills</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Master these skills to increase your chances of landing a frontend development internship.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillsRequired.map((skill, index) => (
              <div key={index} className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} hover:shadow-md transition-shadow duration-300`}>
                <div className="text-sm font-medium">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Application Success Tips</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Follow these proven strategies to stand out from other candidates and secure your internship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationTips.map((tip, index) => (
              <Card key={index} className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg text-white">
                      {tip.icon}
                    </div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Insights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Salary Expectations</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Understanding salary ranges helps you negotiate better and set realistic expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} text-center`}>
              <CardHeader>
                <CardTitle className="text-lg">Entry Level (Local)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  ₦80K - ₦150K
                </div>
                <p className="text-gray-600 dark:text-gray-300">Per month for local internships in Lagos/Abuja</p>
              </CardContent>
            </Card>

            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} text-center`}>
              <CardHeader>
                <CardTitle className="text-lg">Mid-Level (Local)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  ₦150K - ₦300K
                </div>
                <p className="text-gray-600 dark:text-gray-300">Per month for established companies</p>
              </CardContent>
            </Card>

            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} text-center`}>
              <CardHeader>
                <CardTitle className="text-lg">Remote (Global)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  $1K - $3K
                </div>
                <p className="text-gray-600 dark:text-gray-300">Per month for international remote positions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 sm:p-8">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Connect with Raimon</h3>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 icons social-grid">
            <li>
              <a href="https://x.com/raimonvibe/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-x-twitter text-base sm:text-lg"></i>
                <span className="sr-only">X</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-youtube text-base sm:text-lg"></i>
                <span className="sr-only">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 hover:scale-110">
                <i className="fab fa-tiktok text-base sm:text-lg"></i>
                <span className="sr-only">TikTok</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-instagram text-base sm:text-lg"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-medium text-base sm:text-lg"></i>
                <span className="sr-only">Medium</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-white hover:from-gray-500 hover:to-gray-600 transition-all duration-300 hover:scale-110">
                <i className="fab fa-github text-base sm:text-lg"></i>
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raimonvibe/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin-in text-base sm:text-lg"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61563450007849" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110">
                <i className="fab fa-facebook-f text-base sm:text-lg"></i>
                <span className="sr-only">Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
