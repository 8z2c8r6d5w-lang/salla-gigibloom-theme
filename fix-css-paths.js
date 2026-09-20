const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/assets/styles/imported-theme.css');
if (!fs.existsSync(cssPath)) {
    console.log("تنبيه: لم يتم العثور على imported-theme.css داخل src/assets/styles/");
    process.exit(1);
}

let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/url\(['"]?https:\/\/cdn\.shopify\.com\/[^'"]*\/([^'"]+\.(png|jpg|jpeg|svg|gif|webp|woff2?))['"]?\)/gi, "url('../images/$1')");

fs.writeFileSync(cssPath, cssContent);
console.log("تم إصلاح كافة مسارات التنسيق بنجاح!");
