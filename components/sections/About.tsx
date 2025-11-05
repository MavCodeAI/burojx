const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-light text-white mb-6">
          About
        </h2>
        
        <p className="text-white mb-8">
          We create digital experiences that matter.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-white text-2xl font-light mb-1">
                {stat.value}
              </div>
              <div className="text-white text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
