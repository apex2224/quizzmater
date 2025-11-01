import React from 'react';
import { Trophy, Gift, Star, ChevronDown, Zap, Users, Award, Target } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: Trophy, text: 'Win Amazing Prizes', color: '#FFD700' },
    { icon: Users, text: '10,000+ Players', color: '#4A90E2' },
    { icon: Star, text: 'Weekly Challenges', color: '#FF6B6B' },
    { icon: Zap, text: 'Instant Results', color: '#FFA500' }
  ];

  const prizes = [
    { icon: Gift, label: 'Gift Cards', value: '$500+' },
    { icon: Award, label: 'Certificates', value: 'Free' },
    { icon: Target, label: 'Grand Prize', value: '$2000' }
  ];

  return (
    <div style={styles.container}>
      {/* Animated background elements */}
      <div style={styles.bgElements}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.floatingIcon,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.03
            }}
          >
            {i % 3 === 0 ? '🏆' : i % 3 === 1 ? '⭐' : '🎁'}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Heading at the top in single line with margin */}
        <h1 style={styles.topHeading}>
          {" "}
          ZIION <span style={styles.highlight}>TECHNOLOGY</span>{" "}
        </h1>

        {/* Main Heading */}
        <h1 style={styles.mainHeading}>
          Challenge Your Mind,
          <br />
          <span style={styles.highlightText}>Win Exciting Rewards!</span>
        </h1>

        {/* Description */}
        <p style={styles.description}>
          Join thousands of quiz enthusiasts in the ultimate knowledge showdown. 
          Test your skills across multiple categories, compete with players worldwide, 
          and win amazing prizes every week!
        </p>

        {/* Feature Pills */}
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} style={styles.featurePill}>
                <Icon size={20} style={{ color: feature.color }} />
                <span style={styles.featureText}>{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <button style={styles.ctaButton}>
          <span style={styles.ctaText}>Start Playing Now</span>
          <div style={styles.ctaIcon}>→</div>
        </button>

        {/* Stats Section */}
        <div style={styles.statsSection}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Quiz Categories</div>
          </div>
          <div style={styles.statDivider}></div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>1M+</div>
            <div style={styles.statLabel}>Questions Answered</div>
          </div>
          <div style={styles.statDivider}></div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Play Anytime</div>
          </div>
        </div>

        {/* Prizes Showcase */}
        <div style={styles.prizesSection}>
          <h3 style={styles.prizesHeading}>🎁 This Month's Prizes</h3>
          <div style={styles.prizesGrid}>
            {prizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <div key={index} style={styles.prizeCard}>
                  <Icon size={32} style={styles.prizeIcon} />
                  <div style={styles.prizeValue}>{prize.value}</div>
                  <div style={styles.prizeLabel}>{prize.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div style={styles.scrollSection}>
          <div style={styles.scrollText}>
            <Star size={16} style={styles.scrollStar} />
            Scroll Down To Win Exciting Prizes & More
            <Star size={16} style={styles.scrollStar} />
          </div>
          <div style={styles.scrollIndicator}>
            <ChevronDown size={24} style={styles.chevron} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px'
  },
  bgElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0
  },
  floatingIcon: {
    position: 'absolute',
    fontSize: '60px',
    animation: 'float 8s ease-in-out infinite',
    willChange: 'transform'
  },
  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '900px',
    width: '100%',
    textAlign: 'center'
  },
  topHeading: {
    fontSize: 'clamp(24px, 4vw, 36px)',
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: '1.2',
    marginBottom: '24px',
    textAlign: 'center',
    animation: 'fadeInUp 0.8s ease-out 0.1s both',
    marginTop: '20px',
    display: 'block'
  },
  highlight: {
    background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  brandSection: {
    marginBottom: '40px',
    animation: 'fadeInDown 0.8s ease-out'
  },
  logoWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    marginBottom: '16px',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
  },
  logoIcon: {
    color: '#FFFFFF'
  },
  brandName: {
    fontSize: '32px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '8px',
    letterSpacing: '1px'
  },
  brandTagline: {
    fontSize: '16px',
    color: '#64748b',
    fontWeight: '500'
  },
  mainHeading: {
    fontSize: 'clamp(36px, 6vw, 64px)',
    fontWeight: '900',
    color: '#0f172a',
    lineHeight: '1.2',
    marginBottom: '24px',
    animation: 'fadeInUp 0.8s ease-out 0.2s both'
  },
  highlightText: {
    background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  description: {
    fontSize: 'clamp(16px, 2vw, 20px)',
    color: '#475569',
    lineHeight: '1.8',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
    animation: 'fadeInUp 0.8s ease-out 0.4s both'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '40px',
    animation: 'fadeInUp 0.8s ease-out 0.6s both'
  },
  featurePill: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 24px',
    backgroundColor: '#f8fafc',
    borderRadius: '50px',
    border: '2px solid #e2e8f0',
    transition: 'all 0.3s ease'
  },
  featureText: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#334155'
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '20px 48px',
    fontSize: '18px',
    fontWeight: '700',
    color: '#FFFFFF',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s ease',
    marginBottom: '50px',
    animation: 'fadeInUp 0.8s ease-out 0.8s both, pulse 2s ease-in-out 2s infinite'
  },
  ctaText: {
    letterSpacing: '0.5px'
  },
  ctaIcon: {
    fontSize: '24px',
    transition: 'transform 0.3s ease'
  },
  statsSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0',
    padding: '40px',
    backgroundColor: '#f8fafc',
    borderRadius: '20px',
    marginBottom: '50px',
    animation: 'fadeInUp 0.8s ease-out 1s both',
    flexWrap: 'wrap'
  },
  statItem: {
    textAlign: 'center',
    padding: '0 30px'
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '8px'
  },
  statLabel: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '600'
  },
  statDivider: {
    width: '2px',
    height: '50px',
    backgroundColor: '#e2e8f0'
  },
  prizesSection: {
    marginBottom: '60px',
    animation: 'fadeInUp 0.8s ease-out 1.2s both'
  },
  prizesHeading: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '30px'
  },
  prizesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px'
  },
  prizeCard: {
    padding: '30px',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    border: '2px solid #e2e8f0',
    transition: 'all 0.3s ease'
  },
  prizeIcon: {
    color: '#667eea',
    marginBottom: '16px'
  },
  prizeValue: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '8px'
  },
  prizeLabel: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '600'
  },
  scrollSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    animation: 'fadeInUp 0.8s ease-out 1.4s both'
  },
  scrollText: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '16px',
    fontWeight: '700',
    color: '#f59e0b',
    letterSpacing: '0.5px'
  },
  scrollStar: {
    color: '#f59e0b',
    animation: 'spin 3s linear infinite'
  },
  scrollIndicator: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f8fafc',
    border: '2px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'bounce 2s ease-in-out infinite'
  },
  chevron: {
    color: '#667eea'
  }
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  button:hover .ctaIcon {
    transform: translateX(5px);
  }
  
  .featurePill:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .prizeCard:hover {
    transform: translateY(-5px);
    border-color: #667eea;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
  
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.5);
  }
  
  @media (max-width: 768px) {
    .statDivider {
      display: none;
    }
  }
`;
document.head.appendChild(styleSheet);

export default HeroSection;