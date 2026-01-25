"use client";

const ProblemSolution = () => {
  const problems = [
    { title: 'Overcharging', desc: 'Unclear pricing and hidden costs' },
    { title: 'Ghosting', desc: 'Professionals not showing up' },
    { title: 'Scams', desc: 'No verification or background checks' },
    { title: 'No Proof of Work', desc: 'Can\'t verify past performance' },
  ];

  const solutions = [
    { title: 'Verified History', desc: 'Complete work history and ratings' },
    { title: 'Community Ratings', desc: 'Real feedback from local customers' },
    { title: 'Dispute Records', desc: 'Transparent issue resolution' },
    { title: 'Digital Identity', desc: 'Verified profile with trust badges' },
  ];

  return (
    <section className="section-padding bg-gray-10">
      <div className="max-container padding-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="bold-40 lg:bold-52 text-gray-900 mb-4">
            The Problem <span className="text-primary-600">We Solve</span>
          </h2>
          <p className="regular-20 text-gray-600">
            Traditional local services rely on unreliable word-of-mouth. 
            KaryaLINK brings trust and transparency to Delhi&apos;s service ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems Column */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-red-100">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
                <div>
                  <h3 className="bold-24 text-gray-900">Common Problems</h3>
                  <p className="regular-14 text-gray-500 mt-1">Without KaryaLINK</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-red-200 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="bold-18 text-gray-900">{problem.title}</h4>
                        <div className="h-px flex-1 bg-gradient-to-r from-red-100 to-transparent"></div>
                      </div>
                      <p className="regular-14 text-gray-600">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 via-white to-green-50 border border-green-100 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-green-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="bold-24 text-gray-900">KaryaLINK Solutions</h3>
                  <p className="regular-14 text-gray-500 mt-1">With our platform</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-green-200 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="bold-18 text-gray-900">{solution.title}</h4>
                        <div className="h-px flex-1 bg-gradient-to-r from-green-100 to-transparent"></div>
                      </div>
                      <p className="regular-14 text-gray-600">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual separator between problems and solutions */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
          <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution;