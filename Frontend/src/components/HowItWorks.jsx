const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Sign up",
      description:
        "Sign up as a Student and unlock endless opportunities for growth and success.",
    },
    {
      id: 2,
      title: "Apply Jobs",
      description:
        "Browse and apply for jobs that match your skills and career goals.",
    },
    {
      id: 3,
      title: "Actions",
      description:
        "Sit back and wait for recruiters to review and respond to your application.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-10 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4 sm:text-3xl lg:text-4xl">
          How it works
        </h2>
        <p className="text-gray-600 mb-10 sm:text-lg lg:text-xl">
          Connecting talent with opportunity, empowering careers through
          innovative job solutions and seamless recruitment.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="step-card flex flex-col items-center text-center bg-white shadow-md p-6 rounded-lg border hover:shadow-orange-300 transition"
              data-aos="fade-up"
              data-aos-delay={`${step.id * 100}`}
            >
              {/* Step ID */}
              <div className="step-id bg-orange-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold mb-4 text-xl">
                {step.id}
              </div>
              {/* Title */}
              <h4 className="text-lg font-semibold mb-2 sm:text-xl">
                {step.title}
              </h4>
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
