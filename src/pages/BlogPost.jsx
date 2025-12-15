import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';

function BlogPost() {
    const { slug } = useParams();
    const post = getPostBySlug(slug);
    const relatedPosts = getRelatedPosts(slug);

    if (!post) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h1>Post Not Found</h1>
                <p>The article you're looking for doesn't exist.</p>
                <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
            </div>
        );
    }

    return (
        <article className="blog-post-page">
            {/* Hero */}
            <header className="post-hero" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="post-hero-overlay">
                    <div className="container">
                        <span className="post-category">{post.category}</span>
                        <h1>{post.title}</h1>
                        <div className="post-meta">
                            <span>By {post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="post-layout">
                    {/* Main Content */}
                    <div className="post-content">
                        <div
                            className="post-body"
                            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                        />

                        {/* CTA Box */}
                        <div className="post-cta">
                            <h3>Ready to Book Your Trip?</h3>
                            <p>Compare prices from 500+ airlines and find the best deals.</p>
                            <Link to="/" className="btn btn-primary btn-lg">Search Flights Now →</Link>
                        </div>

                        {/* Keywords for SEO */}
                        <div className="post-tags">
                            {post.keywords.map(keyword => (
                                <span key={keyword} className="tag">{keyword}</span>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="post-sidebar">
                        <div className="sidebar-widget">
                            <h3>🔍 Quick Search</h3>
                            <p>Find cheap flights to any destination.</p>
                            <Link to="/" className="btn btn-accent">Search Now</Link>
                        </div>

                        {relatedPosts.length > 0 && (
                            <div className="sidebar-widget">
                                <h3>📚 Related Articles</h3>
                                <ul className="related-posts">
                                    {relatedPosts.map(related => (
                                        <li key={related.id}>
                                            <Link to={`/blog/${related.slug}`}>
                                                {related.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="sidebar-widget">
                            <h3>✈️ Popular Destinations</h3>
                            <ul className="dest-links">
                                <li><Link to="/destinations/dubai">Flights to Dubai</Link></li>
                                <li><Link to="/destinations/london">Flights to London</Link></li>
                                <li><Link to="/destinations/paris">Flights to Paris</Link></li>
                                <li><Link to="/destinations/tokyo">Flights to Tokyo</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}

// Simple markdown-like formatting
function formatContent(content) {
    return content
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\- (.*$)/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^\| (.*) \|$/gm, (match, content) => {
            const cells = content.split(' | ').map(cell => `<td>${cell.trim()}</td>`).join('');
            return `<tr>${cells}</tr>`;
        });
}

export default BlogPost;
