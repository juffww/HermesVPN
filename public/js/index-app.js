import React from 'react';
import { createRoot } from 'react-dom/client';
import { Shield, Zap, Globe, Lock, Eye, ChevronDown, Users, Server, Award, Star, ArrowRight } from 'lucide-react';
import { features, faqs, stats } from './data.js';

const { useState } = React;

const iconMap = {
  Shield: React.createElement(Shield, { className: "w-8 h-8" }),
  Zap: React.createElement(Zap, { className: "w-8 h-8" }),
  Globe: React.createElement(Globe, { className: "w-8 h-8" }),
  Eye: React.createElement(Eye, { className: "w-8 h-8" }),
  Lock: React.createElement(Lock, { className: "w-8 h-8" }),
  Server: React.createElement(Server, { className: "w-8 h-8" }),
  Users: React.createElement(Users, { className: "w-8 h-8" }),
  Award: React.createElement(Award, { className: "w-8 h-8" }),
  Star: React.createElement(Star, { className: "w-8 h-8" })
};

function Index() {
  const [openFaq, setOpenFaq] = useState(null);

  return React.createElement('div', { className: "min-h-screen bg-gradient-to-b from-slate-50 to-white" },
    // Header
    React.createElement('header', { className: "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "flex justify-between items-center h-20" },
          React.createElement('div', { className: "flex items-center gap-3" },
            React.createElement('img', {src: './logo.png',alt: 'Logo',className: 'w-20 h-20 object-contain'},
            ),
            React.createElement('span', { className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent" },
              'HermesVPN'
            )
          ),
          React.createElement('nav', { className: "hidden md:flex items-center gap-8" },
            React.createElement('a', { href: "#features", className: "text-slate-600 hover:text-blue-600 font-medium transition" }, 'Features'),
            React.createElement('a', { href: "#about", className: "text-slate-600 hover:text-blue-600 font-medium transition" }, 'About'),
            React.createElement('a', { href: "#faq", className: "text-slate-600 hover:text-blue-600 font-medium transition" }, 'FAQ'),
            React.createElement('a', { href: "/download.html", className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105" },
              'Download'
            )
          )
        )
      )
    ),

    // Hero Section
    React.createElement('section', { className: "relative pt-20 pb-32 overflow-hidden" },
      React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" }),
      React.createElement('div', { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "grid lg:grid-cols-2 gap-12 items-center" },
          React.createElement('div', null,
            React.createElement('div', { className: "inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-6" },
              React.createElement('span', { className: "w-2 h-2 bg-blue-600 rounded-full animate-pulse" }),
              '100% Free'
            ),
            React.createElement('h1', { className: "text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight" },
              'Your ',
              React.createElement('span', { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" }, 'Privacy'),
              ', Our ',
              React.createElement('span', { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" }, 'Priority')
            ),

            React.createElement('p', { className: "text-xl text-slate-600 mb-8 leading-relaxed" },
              'Strong encryption, very fast connection, and servers around the world. Free to use for learning and research.'
            ),
            React.createElement('div', { className: "flex flex-col sm:flex-row gap-4" },
              React.createElement('a', { href: "/download.html", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2" },
                'Download for Free',
                React.createElement(ArrowRight, { className: "w-5 h-5" })
              ),
              React.createElement('a', { href: "#features", className: "bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg border-2 border-slate-200 transition-all flex items-center justify-center gap-2" },
                'Learn More'
              )
            )
          ),
          
          // SVG Illustration
          React.createElement('div', { className: "relative" },
            React.createElement('svg', { viewBox: "0 0 600 600", className: "w-full h-auto drop-shadow-2xl" },
              React.createElement('circle', { cx: "300", cy: "300", r: "280", fill: "url(#blueGradient)", opacity: "0.1" }),
              React.createElement('circle', { cx: "300", cy: "300", r: "200", fill: "url(#globeGradient)", stroke: "#3b82f6", strokeWidth: "3" }),
              
              React.createElement('ellipse', { cx: "300", cy: "300", rx: "200", ry: "60", fill: "none", stroke: "#60a5fa", strokeWidth: "1", opacity: "0.4" }),
              React.createElement('ellipse', { cx: "300", cy: "300", rx: "200", ry: "120", fill: "none", stroke: "#60a5fa", strokeWidth: "1", opacity: "0.4" }),
              React.createElement('line', { x1: "100", y1: "300", x2: "500", y2: "300", stroke: "#60a5fa", strokeWidth: "1", opacity: "0.4" }),
              
              React.createElement('ellipse', { cx: "300", cy: "300", rx: "60", ry: "200", fill: "none", stroke: "#60a5fa", strokeWidth: "1", opacity: "0.4" }),
              React.createElement('ellipse', { cx: "300", cy: "300", rx: "120", ry: "200", fill: "none", stroke: "#60a5fa", strokeWidth: "1", opacity: "0.4" }),
              React.createElement('line', { x1: "300", y1: "100", x2: "300", y2: "500", stroke: "#60a5fa", strokeWidth: "1", opacity: "0.4" }),
              
              [
                { cx: 300, cy: 150, delay: "0s" },
                { cx: 180, cy: 250, delay: "0.5s" },
                { cx: 420, cy: 250, delay: "1s" },
                { cx: 250, cy: 400, delay: "1.5s" },
                { cx: 350, cy: 400, delay: "1.8s" }
              ].map((node, i) =>
                React.createElement('circle', { key: i, cx: node.cx, cy: node.cy, r: "15", fill: "#3b82f6" },
                  React.createElement('animate', { attributeName: "r", values: "15;18;15", dur: "2s", begin: node.delay, repeatCount: "indefinite" })
                )
              ),
              
              [
                { x1: 300, y1: 150, x2: 180, y2: 250 },
                { x1: 300, y1: 150, x2: 420, y2: 250 },
                { x1: 180, y1: 250, x2: 250, y2: 400 },
                { x1: 420, y1: 250, x2: 350, y2: 400 }
              ].map((line, i) =>
                React.createElement('line', { key: i, x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2, stroke: "#3b82f6", strokeWidth: "2", opacity: "0.6", strokeDasharray: "5,5" },
                  React.createElement('animate', { attributeName: "stroke-dashoffset", from: "0", to: "10", dur: "1s", repeatCount: "indefinite" })
                )
              ),
              
              React.createElement('g', { transform: "translate(300, 300)" },
                React.createElement('path', { d: "M0,-60 L-40,-40 L-40,0 C-40,30 -20,50 0,60 C20,50 40,30 40,0 L40,-40 Z", fill: "url(#shieldGradient)", stroke: "#1e40af", strokeWidth: "2" },
                  React.createElement('animateTransform', { attributeName: "transform", type: "scale", values: "1;1.05;1", dur: "3s", repeatCount: "indefinite" })
                ),
                React.createElement('path', { d: "M-10,0 L-5,10 L10,-10", stroke: "white", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
              ),
              
              React.createElement('defs', null,
                React.createElement('linearGradient', { id: "blueGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
                  React.createElement('stop', { offset: "0%", stopColor: "#3b82f6" }),
                  React.createElement('stop', { offset: "100%", stopColor: "#8b5cf6" })
                ),
                React.createElement('linearGradient', { id: "globeGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
                  React.createElement('stop', { offset: "0%", stopColor: "#dbeafe" }),
                  React.createElement('stop', { offset: "100%", stopColor: "#bfdbfe" })
                ),
                React.createElement('linearGradient', { id: "shieldGradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                  React.createElement('stop', { offset: "0%", stopColor: "#3b82f6" }),
                  React.createElement('stop', { offset: "100%", stopColor: "#1e40af" })
                )
              )
            )
          )
        )
      )
    ),

    // Stats Section
    React.createElement('section', { className: "py-16 bg-white border-y border-slate-200" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-8" },
          stats.map((stat, idx) =>
            React.createElement('div', { key: idx, className: "text-center" },
              React.createElement('div', { className: "inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4" },
                // SỬ DỤNG MAP: Lấy icon element từ map
                iconMap[stat.icon] || null
              ),
              React.createElement('div', { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-2" }, stat.value),
              React.createElement('div', { className: "text-slate-600 font-medium" }, stat.label)
            )
          )
        )
      )
    ),

    // Features Section
    React.createElement('section', { id: "features", className: "py-24 bg-slate-50" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "text-center mb-16" },
          React.createElement('h2', { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4" },
            'Strong features'
          ),
          React.createElement('p', { className: "text-xl text-slate-600 max-w-2xl mx-auto" },
             'Explore the key technologies that keep your online connection private and secure.'
          )
        ),
        React.createElement('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" },
          features.map((feature, idx) =>
            React.createElement('div', { key: idx, className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200 hover:border-blue-300" },
              React.createElement('div', { className: "w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30" },
                iconMap[feature.icon] || null
              ),
              React.createElement('h3', { className: "text-xl font-bold text-slate-900 mb-3" }, feature.title),
              React.createElement('p', { className: "text-slate-600 leading-relaxed" }, feature.description)
            )
          )
        )
      )
    ),

    // Security Section
    React.createElement('section', { className: "py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden" },
      React.createElement('div', { className: "absolute inset-0 opacity-10" },
        React.createElement('svg', { className: "w-full h-full", viewBox: "0 0 100 100", preserveAspectRatio: "none" },
          React.createElement('pattern', { id: "pattern", x: "0", y: "0", width: "20", height: "20", patternUnits: "userSpaceOnUse" },
            React.createElement('circle', { cx: "10", cy: "10", r: "1", fill: "white" })
          ),
          React.createElement('rect', { x: "0", y: "0", width: "100", height: "100", fill: "url(#pattern)" })
        )
      ),
      
      React.createElement('div', { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "grid lg:grid-cols-2 gap-12 items-center" },
          React.createElement('div', null,
            React.createElement('h2', { className: "text-4xl md:text-5xl font-bold mb-6" },
              'Strong Security for Your Data'
            ),
            React.createElement('p', { className: "text-xl text-blue-100 mb-8 leading-relaxed" },
              'HermesVPN uses advanced encryption technology to keep your data safe at all times. From browsing the web to online banking, everything is securely protected.'
            ),
            React.createElement('div', { className: "space-y-4" },
              [
                { title: 'AES-256 Encryption', desc: 'A very strong encryption standard used by governments and banks.' },
                { title: 'WireGuard Protocol', desc: 'The latest VPN technology — fast, modern, and secure.'  },
                { title: 'No Logs Policy', desc: 'We never track or store your data or online activity.' }
              ].map((item, i) =>
                React.createElement('div', { key: i, className: "flex items-start gap-3" },
                  React.createElement('div', { className: "w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1" },
                    React.createElement('div', { className: "w-2 h-2 bg-white rounded-full" })
                  ),
                  React.createElement('div', null,
                    React.createElement('div', { className: "font-semibold mb-1" }, item.title),
                    React.createElement('div', { className: "text-blue-100" }, item.desc)
                  )
                )
              )
            )
          ),
          
          React.createElement('div', { className: "relative" },
            React.createElement('svg', { viewBox: "0 0 500 500", className: "w-full h-auto" },
              React.createElement('rect', { x: "150", y: "250", width: "200", height: "180", rx: "20", fill: "url(#lockGradient)", stroke: "#1e40af", strokeWidth: "3" }),
              React.createElement('path', { d: "M 200 250 L 200 180 Q 200 120 250 120 Q 300 120 300 180 L 300 250", fill: "none", stroke: "url(#lockGradient)", strokeWidth: "20", strokeLinecap: "round" }),
              React.createElement('circle', { cx: "250", cy: "320", r: "20", fill: "#1e40af" }),
              React.createElement('rect', { x: "240", y: "320", width: "20", height: "40", rx: "3", fill: "#1e40af" }),
              
              React.createElement('g', { opacity: "0.8" },
                [
                  { cx: 120, cy: 200, delay: "0s" },
                  { cx: 380, cy: 220, delay: "0.5s" },
                  { cx: 140, cy: 360, delay: "1s" },
                  { cx: 360, cy: 380, delay: "1.5s" }
                ].map((sparkle, i) =>
                  React.createElement('circle', { key: i, cx: sparkle.cx, cy: sparkle.cy, r: "3", fill: "white" },
                    React.createElement('animate', { attributeName: "opacity", values: "0;1;0", dur: "2s", begin: sparkle.delay, repeatCount: "indefinite" })
                  )
                )
              ),
              
              React.createElement('defs', null,
                React.createElement('linearGradient', { id: "lockGradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                  React.createElement('stop', { offset: "0%", stopColor: "#60a5fa" }),
                  React.createElement('stop', { offset: "100%", stopColor: "#3b82f6" })
                )
              )
            )
          )
        )
      )
    ),

    // About Section
    React.createElement('section', { id: "about", className: "py-24 bg-white" },
      React.createElement('div', { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" },
        React.createElement('h2', { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-6" },
          'Non-Commercial Learning Project'
        ),
        React.createElement('p', { className: "text-xl text-slate-600 leading-relaxed mb-8" },
          'HermesVPN is a learning project developed for study and research purposes. We provide a completely free VPN service to help people better understand online security and privacy technologies.'
        ),
        React.createElement('div', { className: "inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold" },
          React.createElement('span', { className: "text-2xl" }, '🎓'),
          '100% Free'
        )
      )
    ),

    // FAQ Section
    React.createElement('section', { id: "faq", className: "py-24 bg-slate-50" },
      React.createElement('div', { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "text-center mb-16" },
          React.createElement('h2', { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4" },
            'Frequently Asked Questions'
          ),
          React.createElement('p', { className: "text-xl text-slate-600" },
            'Everything you need to know about HermesVPN'
          )
        ),
        React.createElement('div', { className: "space-y-4" },
          faqs.map((faq, idx) =>
            React.createElement('div', { key: idx, className: "bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm" },
              React.createElement('button', {
                onClick: () => setOpenFaq(openFaq === idx ? null : idx),
                className: "w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition"
              },
                React.createElement('span', { className: "font-semibold text-slate-900 text-lg" }, faq.q),
                React.createElement(ChevronDown, { className: `w-5 h-5 text-slate-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}` })
              ),
              openFaq === idx && React.createElement('div', { className: "px-6 pb-5" },
                React.createElement('p', { className: "text-slate-600 leading-relaxed" }, faq.a)
              )
            )
          )
        )
      )
    ),

    // CTA Section
    React.createElement('section', { className: "py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden" },
      React.createElement('div', { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20" }),
      React.createElement('div', { className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" },
        React.createElement('h2', { className: "text-4xl md:text-5xl font-bold mb-6" },
          'Ready to protect your Privacy?'
        ),
        React.createElement('p', { className: "text-xl text-blue-100 mb-10 leading-relaxed" },
          'Download HermesVPN today and enjoy a safe, private internet experience — completely free.'
        ),
        React.createElement('a', { href: "/download.html", className: "bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 inline-flex items-center gap-3" },
          React.createElement(ArrowRight, { className: "w-6 h-6" }),
          'Download Now'
        ),
        React.createElement('p', { className: "mt-6 text-blue-200" }, 'Completely free • No credit card required')
      )
    ),

    // Footer
    React.createElement('footer', { className: "bg-slate-900 text-slate-300 py-16" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "grid md:grid-cols-4 gap-8 mb-12" },
          React.createElement('div', null,
            React.createElement('div', { className: "flex items-center gap-3 mb-4" },
              React.createElement('div', { className: "w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center" },
                React.createElement(Shield, { className: "w-6 h-6 text-white" })
              ),
              React.createElement('span', { className: "text-xl font-bold text-white" }, 'HermesVPN')
            ),
            React.createElement('p', { className: "text-slate-400 text-sm" },
              'A non-commercial learning project about VPN and cybersecurity.'
            )
          ),
          React.createElement('div', null,
            React.createElement('h4', { className: "font-bold text-white mb-4" }, 'Product'),
            React.createElement('ul', { className: "space-y-2 text-sm" },
              React.createElement('li', null, React.createElement('a', { href: "#features", className: "hover:text-white transition" }, 'Features')),
              React.createElement('li', null, React.createElement('a', { href: "#about", className: "hover:text-white transition" }, 'About')),
              React.createElement('li', null, React.createElement('a', { href: "/download.html", className: "hover:text-white transition" }, 'Download')),
              React.createElement('li', null, React.createElement('a', { href: "#faq", className: "hover:text-white transition" }, 'FAQ'))
            )
          ),
          React.createElement('div', null,
            React.createElement('h4', { className: "font-bold text-white mb-4" }, 'Information'),
            React.createElement('ul', { className: "space-y-2 text-sm" },
              React.createElement('li', null, React.createElement('a', { href: "#", className: "hover:text-white transition" }, 'Learning Project')),
              React.createElement('li', null, React.createElement('a', { href: "#", className: "hover:text-white transition" }, '100% Free')),
              React.createElement('li', null, React.createElement('a', { href: "#", className: "hover:text-white transition" }, 'Non-Commercial'))
            )
          ),
          React.createElement('div', null,
            React.createElement('h4', { className: "font-bold text-white mb-4" }, 'Contact'),
            React.createElement('ul', { className: "space-y-2 text-sm" },
              React.createElement('li', null, React.createElement('a', { href: "#", className: "hover:text-white transition" }, 'GitHub')),
              React.createElement('li', null, React.createElement('a', { href: "#", className: "hover:text-white transition" }, 'Email')),
              React.createElement('li', null, React.createElement('a', { href: "#", className: "hover:text-white transition" }, 'Report an Issue'))
            )
          )
        ),
        React.createElement('div', { className: "border-t border-slate-800 pt-8 text-center text-sm text-slate-400" },
          React.createElement('p', null, '© 2025 HermesVPN - Educational non-commercial project - Completely free.')
        )
      )
    )
  );
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(Index));