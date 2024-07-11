const fs = require("fs");
const path = require("path");

const components = [
  "Section2",
  "Section3",
  "Section4",
  "Section5",
  "Section6",
  "Section7",
];

const pagesPath = path.join(__dirname, "src/components/Landing");

components.forEach((component) => {
  const componentPath = path.join(pagesPath, component);
  const containersPath = path.join(componentPath, "containers");
  const cssPath = path.join(componentPath, `css`);
  const containerFile = path.join(containersPath, `${component}Container.tsx`);
  const cssFile = path.join(cssPath, `index.scss`);
  const componentFile = path.join(componentPath, `${component}.tsx`);

  // 컴포넌트 폴더 생성
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath, { recursive: true });
  }

  // containers 폴더 생성
  // if (!fs.existsSync(containersPath)) {
  //   fs.mkdirSync(containersPath, { recursive: true });
  // }

  // css 폴더 생성
  if (!fs.existsSync(cssPath)) {
    fs.mkdirSync(cssPath, { recursive: true });
  }

  // css 폴더 생성
  if (!fs.existsSync(cssFile)) {
    const cssContent = `#root{}
`;
    fs.writeFileSync(cssFile, cssContent);
  }

  // 페이지 컴포넌트 파일 생성
  if (!fs.existsSync(componentFile)) {
    const pageContent = `import React from 'react';
import "./css/index.css";
type Props ={}

const ${component} = (props:Props) =>{
  return (
    <div>
      <h1>${component} Page</h1>
    </div>
  );
}

export default ${component};
`;
    fs.writeFileSync(componentFile, pageContent);
  }

  // 컨테이너 파일 생성
  //   if (!fs.existsSync(containerFile)) {
  //     const containerContent = `import React from 'react';
  // import ${component} from '../${component}';

  // type Props ={}

  // const ${component}Container= (props:Props) => {
  //   return <${component} />;
  // }

  // export default ${component}Container;
  // `;
  //     fs.writeFileSync(containerFile, containerContent);
  //   }
});

console.log("컴포넌트 폴더와 파일이 생성되었습니다.");
