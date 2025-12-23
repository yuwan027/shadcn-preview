const fs = require('fs');
const path = require('path');
const glob = require('glob');

const blocksDir = path.join(__dirname, 'src/components/blocks');

// Collect all imports from all block components
const imports = {};

glob.sync(blocksDir + '/**/*.tsx').forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Find all import statements
  const importRegex = /import\s+(?:{([^}]+)}|(\w+))\s+from\s+['"](@\/components\/[^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const namedImports = match[1];
    const defaultImport = match[2];
    const modulePath = match[3];

    if (!imports[modulePath]) {
      imports[modulePath] = { named: new Set(), default: false };
    }

    if (defaultImport) {
      imports[modulePath].default = true;
    }

    if (namedImports) {
      namedImports.split(',').forEach(name => {
        const cleaned = name.trim().split(' as ')[0].trim();
        if (cleaned) {
          imports[modulePath].named.add(cleaned);
        }
      });
    }
  }
});

// Also check for multi-line imports
glob.sync(blocksDir + '/**/*.tsx').forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Match multi-line imports
  const multiLineRegex = /import\s*\{([^}]+)\}\s*from\s*['"](@\/components\/[^'"]+)['"]/gs;
  let match;

  while ((match = multiLineRegex.exec(content)) !== null) {
    const namedImports = match[1];
    const modulePath = match[2];

    if (!imports[modulePath]) {
      imports[modulePath] = { named: new Set(), default: false };
    }

    namedImports.split(',').forEach(name => {
      const cleaned = name.trim().split(' as ')[0].trim();
      if (cleaned && !cleaned.includes('\n')) {
        imports[modulePath].named.add(cleaned);
      }
    });
  }
});

// Print all unique imports needed
console.log('=== All imports needed from components ===\n');

const sortedPaths = Object.keys(imports).sort();
for (const modulePath of sortedPaths) {
  const info = imports[modulePath];
  console.log(`${modulePath}:`);
  if (info.default) {
    console.log('  - default export needed');
  }
  if (info.named.size > 0) {
    console.log('  Named exports:', [...info.named].sort().join(', '));
  }
  console.log('');
}

// Now create/update stub files as needed
const srcDir = path.join(__dirname, 'src');

for (const modulePath of sortedPaths) {
  const info = imports[modulePath];
  const filePath = path.join(srcDir, modulePath.replace('@/', '') + '.tsx');

  // Skip if not a custom component path (ui, shadcnblocks, etc.)
  if (!modulePath.includes('/ui/') &&
      !modulePath.includes('/shadcnblocks/') &&
      !modulePath.includes('/aceternity/') &&
      !modulePath.includes('/magicui/') &&
      !modulePath.includes('/kibo-ui/') &&
      !modulePath.includes('/fancy/')) {
    continue;
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.log(`Creating stub: ${filePath}`);
    const exports = [...info.named].map(name =>
      `export const ${name} = (props: any) => <div {...props} />;`
    ).join('\n');

    let content = `import * as React from "react";\nimport { cn } from "@/lib/utils";\n\n${exports}\n`;
    if (info.default) {
      const defaultName = path.basename(modulePath);
      const pascalName = defaultName.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
      content += `\nconst ${pascalName} = (props: any) => <div {...props} />;\nexport default ${pascalName};\n`;
    }

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
  } else {
    // File exists, check if all exports are present
    const existingContent = fs.readFileSync(filePath, 'utf8');
    const missingExports = [];

    for (const name of info.named) {
      // Check if export exists
      const exportRegex = new RegExp(`export\\s+(const|function|class)\\s+${name}\\b`);
      if (!exportRegex.test(existingContent)) {
        missingExports.push(name);
      }
    }

    if (missingExports.length > 0) {
      console.log(`Updating ${filePath} - adding: ${missingExports.join(', ')}`);
      let newExports = missingExports.map(name =>
        `export const ${name} = (props: any) => <div {...props} />;`
      ).join('\n');

      const updatedContent = existingContent.trimEnd() + '\n\n' + newExports + '\n';
      fs.writeFileSync(filePath, updatedContent);
    }

    // Check for default export if needed
    if (info.default && !existingContent.includes('export default')) {
      console.log(`Adding default export to ${filePath}`);
      // Find the first exported component
      const firstExport = existingContent.match(/export\s+const\s+(\w+)/);
      if (firstExport) {
        const updatedContent = existingContent.trimEnd() + `\n\nexport default ${firstExport[1]};\n`;
        fs.writeFileSync(filePath, updatedContent);
      }
    }
  }
}

console.log('\nDone!');
