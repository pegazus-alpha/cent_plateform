import { getShareUrl } from '../../utils/helpers';

export const ShareSection = ({ title, url }) => {
  const shareButtons = [
    { platform: 'whatsapp', icon: '📱', label: 'WhatsApp', className: 'share-whatsapp' },
    { platform: 'facebook', icon: '👍', label: 'Facebook', className: 'share-facebook' },
    { platform: 'linkedin', icon: '💼', label: 'LinkedIn', className: 'share-linkedin' },
    { platform: 'twitter', icon: '🐦', label: 'X / Twitter', className: 'share-twitter' },
  ];

  const currentUrl = url || window.location.href;

  return (
    <div className="share-section container">
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Partager cet article</h3>
      <div className="share-buttons">
        {shareButtons.map((button) => (
          <a
            key={button.platform}
            href={getShareUrl(button.platform, currentUrl, title)}
            target="_blank"
            rel="noopener noreferrer"
            className={`share-btn ${button.className}`}
          >
            {button.icon} {button.label}
          </a>
        ))}
      </div>
    </div>
  );
};