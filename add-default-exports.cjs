const fs = require('fs');
const path = require('path');
const glob = require('glob');

const blocksDir = path.join(__dirname, 'src/components/blocks');

glob.sync(blocksDir + '/**/*.tsx').forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if already has default export
  if (content.includes('export default')) {
    return;
  }

  // Try to find the component name from different export patterns
  let componentName = null;

  // Pattern 1: export { ComponentName }
  const namedExportMatch = content.match(/export\s*\{\s*(\w+)/);
  if (namedExportMatch) {
    componentName = namedExportMatch[1];
  }

  // Pattern 2: export const ComponentName =
  if (!componentName) {
    const constExportMatch = content.match(/export\s+const\s+(\w+)\s*=/);
    if (constExportMatch) {
      componentName = constExportMatch[1];
    }
  }

  // Pattern 3: export function ComponentName
  if (!componentName) {
    const funcExportMatch = content.match(/export\s+function\s+(\w+)/);
    if (funcExportMatch) {
      componentName = funcExportMatch[1];
    }
  }

  if (componentName) {
    content = content.trimEnd() + '\n\nexport default ' + componentName + ';\n';
    fs.writeFileSync(file, content);
    console.log('Added default export to:', path.basename(file), '->', componentName);
  } else {
    console.log('WARNING: No export found in:', path.basename(file));
  }
});

console.log('Done!');
