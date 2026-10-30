import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const classMap = {
  'tf-container': 'container mx-auto px-4 max-w-[1320px]',
  'tf-btn': 'inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full text-base font-medium font-sans cursor-pointer transition-all duration-300 border-none',
  'style-1': 'bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]',
  'style-2': 'bg-transparent text-heading border border-border hover:bg-primary hover:border-primary hover:text-white',
  'style-3': 'bg-white text-primary font-semibold hover:bg-primary hover:text-white',
  'section-tag': 'inline-flex items-center gap-2 py-1.5 px-4 border border-border rounded-full text-sm font-medium text-slate-500 tracking-wide uppercase mb-6 bg-slate-100',
  'section-header': 'mb-16',
};

const dirs = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'pages'),
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Find all className="..." or className={`...`}
  // This simple regex handles standard strings. For templates, it's harder, but we can do a global token replace.
  for (const [oldClass, newClass] of Object.entries(classMap)) {
    // Replace whole word matches of oldClass within className strings.
    // Since className strings can be anything, we'll just do a global replace of the class tokens
    // Make sure we don't replace parts of other classes
    const regex = new RegExp(`(?<=className=["'\`].*?\\b)${oldClass}(?=\\b.*?["'\`])`, 'g');
    content = content.replace(regex, newClass);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated classes in ${path.basename(filePath)}`);
  }
}

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      if (file.endsWith('.jsx')) {
        processFile(path.join(dir, file));
      }
    });
  }
});

console.log('Tailwind utility class migration completed.');
