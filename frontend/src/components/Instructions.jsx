import Sidebar from './Sidebar';
import "./Instructions.css"
import { Link } from "react-router-dom"; // Make sure to import Link

export default function Instructions() {
  const steps = [
    {
      number: "01",
      title: "Add Calendar Event",
      description: "Add an event to your Google Calendar with the keyword \"Shift\".",
      example: "Example: Shift Library",
    },
    {
      number: "02",
      title: "Sign In",
      description: "Sign in or create an account to UrShiftMate using your Google account.",
      example: null,
    },
    {
      number: "03",
      title: "Configure Workplace",
      description: "Inside urshiftmate.com go to Jobs & Calendar, add your workplace name and hourly wage.",
      example: "Example: Library & 11",
    },
    {
      number: "04",
      title: "View Dashboard",
      description: "Go to your Dashboard to view your expected paycheck, paydate, and details.",
      example: null,
    }
  ];

  return (
    <div className="flex-row">
      <Sidebar></Sidebar>
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light mb-3" style={{ color: '#00122c' }}>
              Getting Started
            </h1>
            <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#00122c' }}></div>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ borderColor: '#00122c' }}>
                  </div>

                  <div className="flex-1 pt-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm font-light opacity-40" style={{ color: '#00122c' }}>
                        {step.number}
                      </span>
                      <h3 className="text-xl font-normal" style={{ color: '#00122c' }}>
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-base opacity-70 leading-relaxed mb-1" style={{ color: '#00122c' }}>
                      {step.description}
                    </p>

                    {step.example && (
                      <p className="text-sm font-light opacity-50 italic" style={{ color: '#00122c' }}>
                        {step.example}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="youtube-tutorial">
            <iframe width='1080' height='760' src="https://www.youtube.com/embed/UgK1yIgp5Rc" frameborder="0" allowfullscreen></iframe>
          </div>

          <div className="mt-16 text-center">
            <Link to="/dashboard">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:shadow-lg cursor-pointer"
                style={{ borderColor: '#00122c' }}>
                <span className="text-sm font-light" style={{ color: '#00122c' }}>
                  Ready to begin
                </span>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>

  );
}