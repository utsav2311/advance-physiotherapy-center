/**
 * Renders a JSON-LD structured data <script> tag.
 * JSON-LD does not need to live in <head> — Google's structured data
 * guidelines allow it anywhere in the document — so this renders inline
 * without relying on React 19's head-hoisting behavior.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
