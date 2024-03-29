import { CSSProperties, useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";

import { classNames } from "helpers";

import CopyIcon from "../../assets/icons/copy.svg";

import style from "./Code.module.scss";
import Button, { ButtonVariant } from "../Button/Button";

interface CodeProps {
  className?: string;
  value: string;
}

const Code: React.FC<CodeProps> = ({ className, value }) => {
  const [code, setCode] = useState("");

  const copyClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  useEffect(() => {
    setCode(value);
  }, []);

  const styles: CSSProperties = {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 14,
    fontWeight: 500,
    outline: 0,
    overflowX: "auto",
  };

  return (
    <div className={classNames(style.code, {}, [className])}>
      <div className={style.copy_btn}>
        <Button
          variant={ButtonVariant.GHOST}
          icon={<CopyIcon />}
          onClick={copyClipboard}
        />
      </div>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.markup, "markup")}
        padding={14}
        style={styles}
        preClassName="line-numbers"
      />
    </div>
  );
};
export default Code;
