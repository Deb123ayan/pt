interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}

interface ServicesProps {
  services: Service[];
  activeService: string;
  setActiveService: (id: string) => void;
}

export default function Services({
  services,
  activeService,
  setActiveService,
}: ServicesProps) {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="services-grid">
          <div className="reveal-on-scroll">
            <span className="section-eyebrow">CAPABILITIES</span>
            <h2 className="section-title">CORE SKILLSETS</h2>
            <p className="services-subtextText">
              Linking standard computing frameworks with market outreach campaigns to deploy and promote products effectively.
            </p>
            <div className="services-badge">
              <span>SALES, MARKETING & ENGINEERING</span>
            </div>
          </div>

          <div className="services-accordion reveal-on-scroll">
            {services.map((service) => {
              const isOpen = activeService === service.id;
              return (
                <div 
                  key={service.id} 
                  className={`accordion-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="accordion-header">
                    <span className="accordion-num">{service.number}</span>
                    <h3 className="accordion-title">{service.title}</h3>
                    <span className="accordion-arrow"></span>
                  </div>
                  
                  <div className="accordion-content">
                    <p className="accordion-desc">{service.description}</p>
                    <div className="capabilities-tags">
                      {service.capabilities.map((cap, i) => (
                        <span key={i} className="capability-tag">{cap}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
