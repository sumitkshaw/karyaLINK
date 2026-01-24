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
            The Problem We Solve
          </h2>
          <p className="regular-20 text-gray-600">
            Traditional local services rely on unreliable word-of-mouth. 
            KaryaLINK brings trust and transparency to Delhi&apos;s service ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems Column */}
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xl">⚠️</span>
                </div>
                <h3 className="bold-24 text-gray-900">Common Problems</h3>
              </div>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-2xl">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-red-600 text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="bold-18 text-gray-900 mb-1">{problem.title}</h4>
                      <p className="regular-14 text-gray-600">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-100 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">✨</span>
                </div>
                <h3 className="bold-24 text-gray-900">KaryaLINK Solutions</h3>
              </div>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-2xl">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="bold-18 text-gray-900 mb-1">{solution.title}</h4>
                      <p className="regular-14 text-gray-600">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution;