import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssPath = path.join(__dirname, 'src', 'index.css');

let css = fs.readFileSync(cssPath, 'utf8');

// Update Root Variables
css = css.replace(/:root\s*{[\s\S]*?}/, `:root {
  --Black: #000000;
  --White: #ffffff;
  --Heading: #0f172a;
  --Body-text: #475569;
  --Primary: #4f60fa;
  --Text: #334155;
  --Text-2: #1e293b;
  --Text-3: #0f172a;
  --Text-4: #020617;
  --Text-5: #64748b;
  --Text-6: #94a3b8;
  --Bg: #ffffff;
  --Bg-2: #f8fafc;
  --Bg-3: #f1f5f9;
  --Bg-4: #e2e8f0;
  --Bg-5: #cbd5e1;
  --Bg-6: #5935e9;
  --Bg-7: #fafafa;
  --Bg-8: #f3f4f6;
  --Bg-9: #e5e7eb;
  --Bg-10: #d1d5db;
  --Border: #e2e8f0;
  --Border-2: #cbd5e1;
  --Border-3: #e2e8f0;
  --Border-4: #4f60fa;
  --Border-5: #e2e8f0;
}`);

// Change generic var(--White) to var(--Heading) ONLY inside colors/backgrounds, 
css = css.replace(/color:\s*var\(--White\)/g, 'color: var(--Heading)');

// Fix tf-btn.style-1 text color (must be white because of dark gradient background)
css = css.replace(/\.tf-btn\.style-1\s*{[^}]*}/g, match => match.replace(/color:\s*var\(--Heading\)/g, 'color: var(--White)'));
css = css.replace(/\.tf-btn\.style-1:hover\s*{[^}]*}/g, match => match.replace(/color:\s*var\(--Heading\)/g, 'color: var(--White)'));

// Fix small-card icon colors
css = css.replace(/\.small-card\s*\.icon\s*i\s*{[^}]*}/g, match => match.replace(/color:\s*var\(--Heading\)/g, 'color: var(--White)'));
css = css.replace(/\.feature-icon\s*i\s*{[^}]*}/g, match => match.replace(/color:\s*var\(--Heading\)/g, 'color: var(--White)'));

// Fix some transparent/dark backgrounds
css = css.replace(/background-color:\s*rgba\(0,\s*3,\s*28,\s*0\.95\)/g, 'background-color: rgba(255, 255, 255, 0.95)');
css = css.replace(/background:\s*rgba\(32,\s*37,\s*104,\s*0\.4\)/g, 'background: rgba(240, 244, 248, 0.8)');
css = css.replace(/rgba\(19,\s*19,\s*49,\s*0\.[0-9]+\)/g, match => {
    if (match.includes('0.5')) return 'rgba(255, 255, 255, 0.8)';
    if (match.includes('0.9') || match.includes('0.95')) return 'rgba(255, 255, 255, 0.95)';
    return 'rgba(255, 255, 255, 0.9)';
});
css = css.replace(/rgba\(32,\s*37,\s*104,\s*0\.[0-9]+\)/g, 'rgba(230, 235, 245, 0.8)');

// Adjust banner h1 gradient
css = css.replace(/linear-gradient\(135deg,\s*#fff\s*30%,\s*#a68cf0\s*100%\)/g, 'linear-gradient(135deg, #0f172a 30%, #5935e9 100%)');

fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS transformation to light theme complete.');
