import { Github, Globe, Mail, Film, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page fade-in">
            <section className="about-hero glass-panel">
                <div className="hero-content">
                    <div className="brand-badge">
                        <Film className="icon-accent" size={40} />
                    </div>
                    <h1 className="hero-title">CinemaHub</h1>
                    <p className="hero-tagline text-secondary">A cinematic gateway to the world's most captivating stories.</p>
                </div>
            </section>

            <div className="about-grid section-spacing">
                <div className="about-card glass-panel">
                    <h3 className="card-title">Our Vision</h3>
                    <p className="text-secondary">We believe cinema is more than entertainment—it's an experience. CinemaHub is designed for those who appreciate the aesthetic of film as much as the plot.</p>
                </div>

                <div className="about-card glass-panel">
                    <h3 className="card-title">Technology</h3>
                    <p className="text-secondary">Built with the modern web in mind. React for reactivity, OMDb for the vast data, and purely semantic CSS for a handcrafted, human feel.</p>
                </div>
            </div>

            <footer className="about-footer">
                <div className="social-links">
                    <a href="https://github.com/Jivan-Patel/MovieExplorer.git" className="nav-link"><Github size={20} /></a>
                    <a href="#" className="nav-link"><Globe size={20} /></a>
                    <a href="#" className="nav-link"><Mail size={20} /></a>
                </div>
                <p className="copyright text-muted">&copy; 2026 CinemaHub. Crafted for cinephiles.</p>
            </footer>
        </div>
    );
};

export default About;
