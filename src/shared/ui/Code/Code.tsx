import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";

import { classNames } from "helpers";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";

import style from "./Code.module.scss";

interface CodeProps {
  className?: string;
  value: string;
}

const Code: React.FC<CodeProps> = ({ className, value }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(value);
  }, []);
  console.log(code);

  return (
    <div className={classNames(style.code, {}, [className])}>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.jsx!, "jsx")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </div>
  );
};
export default Code;
