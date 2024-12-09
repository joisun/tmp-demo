import * as React from 'react';
import { marked } from 'marked';

const markdownContent = ` **Word Or Phrase**: Render and Commit\n\n**Format requirements**:\n1. |🔨📜🤝| - Noun, Verb |\n2. Definition: To produce or create something, especially a visual representation of an image or design on a computer screen, or to pledge or promise to do something.\n3. Example sentences:\n   - The graphic designer will render the logo before sending it to the client. 🖥️🎨👨‍💻\n   - I can't commit to attending the meeting tomorrow because of my prior engagements. 📅🗓️🙅‍♂️`;

export default function App() {
  const [htmlContent, setHtmlContent] = React.useState(
    marked.parse(markdownContent)
  );

  return (
    <>
      <h1 className="text-red-600">hello</h1>
      <div className="html-wrapper rounded-md border p-2 prose dark:prose-invert prose-strong:text-indigo-500">
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: htmlContent }} // 动态渲染的 HTML
        />
      </div>
    </>
  );
}
