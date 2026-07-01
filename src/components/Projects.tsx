interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  client: string;
  imageUrl: string;
  aspect: 'wide' | 'narrow';
  description: string;
}

interface ProjectsProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  filteredProjects: Project[];
}

export default function Projects({
  categories,
  activeCategory,
  setActiveCategory,
  filteredProjects,
}: ProjectsProps) {
  return (
    <section id="work" className="portfolio-section section-padding">
      <div className="container">
        <div className="portfolio-header reveal-on-scroll">
          <div>
            <span className="section-eyebrow">PORTFOLIO</span>
            <h2 className="section-title">SELECTED INITIATIVES</h2>
          </div>

          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`portfolio-card ${project.aspect} reveal-on-scroll`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="portfolio-img-container">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="portfolio-img"
                  loading="lazy"
                />
                <div className="portfolio-card-scrim"></div>
                <div className="portfolio-card-hover-icon" style={{ borderRadius: 'var(--radius-pill)', width: 'auto', height: 'auto', padding: '16px 24px' }}>
                  <span>VIEW SPECS</span>
                </div>
              </div>
              
              <div className="portfolio-card-details">
                <div className="portfolio-card-meta">
                  <span className="portfolio-card-category">{project.category}</span>
                  <span className="portfolio-card-divider">//</span>
                  <span className="portfolio-card-client">{project.client}</span>
                </div>
                <div className="portfolio-card-bottom" style={{ display: 'block', marginTop: '4px' }}>
                  <h3 className="portfolio-card-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{project.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
