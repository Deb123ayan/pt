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
              className={`portfolio-card process-step ${project.aspect} reveal-on-scroll`}
              style={{ animationDelay: `${index * 100}ms`, padding: 'var(--space-4)', gap: 0 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 className="process-step-title">{project.title}</h3>
                
                <div className="capabilities-tags">
                  <span className="capability-tag">{project.category}</span>
                  <span className="capability-tag">{project.client}</span>
                  <span className="capability-tag">{project.year}</span>
                </div>

                <div className="portfolio-img-container" style={{ margin: 'var(--space-3) 0', border: '2px solid var(--text-primary)', borderRadius: '12px', flexGrow: 1, minHeight: '200px' }}>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="portfolio-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>

                <p className="process-step-desc">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
