import { 
  BarChart3, 
  Disc, 
  Globe, 
  Megaphone, 
  Mic2, 
  Radio, 
  Share2 
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'promotion',
    title: "Music Promotion & Distribution Strategy",
    description: "We plan and position your releases so they reach the right listeners at the right time.",
    features: [
      "Smart release rollouts",
      "Platform targeting (Spotify, Apple, Audiomack)",
      "Timing and positioning for visibility"
    ],
    outcome: "Strong launches with real listener traction.",
    icon: Disc
  },
  {
    id: 'marketing',
    title: "Digital Marketing & Paid Ads",
    description: "We convert attention into real fans through targeted campaigns.",
    features: [
      "Targeted ads (IG, TikTok, FB, YouTube)",
      "Audience building and retargeting",
      "Ongoing campaign optimization"
    ],
    outcome: "Measurable growth, not empty impressions.",
    icon: Megaphone
  },
  {
    id: 'playlists',
    title: "Playlist Pitching & Streaming Growth",
    description: "We place your music where discovery happens.",
    features: [
      "Curated playlist pitching",
      "Organic streaming growth strategies",
      "Listener behavior analysis"
    ],
    outcome: "Consistent streams and long-term discovery.",
    icon: Radio
  },
  {
    id: 'branding',
    title: "Artist Branding & Positioning",
    description: "We shape how audiences see and remember you.",
    features: [
      "Artist brand identity",
      "Visual direction for covers & assets",
      "Clear messaging and positioning"
    ],
    outcome: "A strong, recognizable artist brand.",
    icon: Mic2
  },
  {
    id: 'social',
    title: "Social Media Growth & Content Strategy",
    description: "We turn social platforms into fan engines.",
    features: [
      "Content planning & posting direction",
      "Short-form video strategy (Reels, TikTok)",
      "Engagement-focused growth tactics"
    ],
    outcome: "Consistent visibility and loyal fans.",
    icon: Share2
  },
  {
    id: 'pr',
    title: "PR, Media & Influencer Promotion",
    description: "We connect your music to culture.",
    features: [
      "Influencer outreach",
      "Blog and media placements",
      "Creator-led campaign coordination"
    ],
    outcome: "Expanded reach beyond your current audience.",
    icon: Globe
  },
  {
    id: 'analytics',
    title: "Analytics, Insights & Reporting",
    description: "We guide decisions with data.",
    features: [
      "Campaign and streaming reports",
      "Audience insights",
      "Growth recommendations"
    ],
    outcome: "Clear direction backed by real numbers.",
    icon: BarChart3
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#' },
  { name: 'TikTok', url: '#' },
  { name: 'X', url: '#' },
  { name: 'YouTube', url: '#' },
  { name: 'Spotify', url: '#' },
];