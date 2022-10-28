import path from "path";

let data = [
  {
    name: `Head tags`,
    tags: (
      <div>
        <div>
          {"<title>"} <span className="g">shows up uptop in the browser</span>
        </div>
        <div>{"<meta>"}</div>
        <div>
          {"<script"} <span className="g"> src="./path/to/file" defer</span>
          {">"} <span className="g"> insert js</span>
        </div>
        <div>
          {"<no-script>"}
          <span className="g">content to display if scripts are disabled</span>
        </div>
        <div>{"<style>"}</div>
        <div>
          {"<link"}{" "}
          <span className="g">rel="stylesheet" href="styles.css"</span>
          {">"} <span className="g"> insert css from an external file</span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
  {
    name: `Content container tags`,
    tags: (
      <div>
        <div>
          {"<h1> to <h6>"} <span className="g">heading tag</span>
        </div>
        <div>
          {"<div>"} <span className="g">block container</span>
        </div>
        <div>
          {"<div>"} <span className="g">paragraph, block</span>
        </div>
        <div>
          {"<span>"} <span className="g">inline container</span>
        </div>
        <div>
          {"<strong>"}{" "}
          <span className="g">indicated importants of content</span>
        </div>
        <div>
          {"<em>"}{" "}
          <span className="g">
            used to change meaning of text same way emphasis sometimes changes
            it in spoken speach
          </span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
  {
    name: `List tags`,
    tags: (
      <div>
        <div>
          {"<ol>"} <span className="g">Ordered list incasor tag</span>
        </div>
        <div>
          {"<ul>"} <span className="g">Un-ordered list incasor tag</span>
        </div>
        <div>
          {"<li>"} <span className="g">Individual list item indicator tag</span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
  {
    name: `Semantic tags`,
    tags: (
      <div>
        <div>
          {"<article>"}{" "}
          <span className="g">
            Specifies independent, self-contained content.
          </span>
        </div>
        <div>
          {"<aside>"}{" "}
          <span className="g">
            Some content aside from the content it is placed in
          </span>
        </div>
        <div>
          {"<details>"}{" "}
          <span className="g">
            Specifies additional details that the user can open and close on
            demand
          </span>
        </div>
        <div>
          {"<figcaption>"}{" "}
          <span className="g">
            {"Defines a caption for a <figure> element"}
          </span>
        </div>
        <div>
          {"<figure>"}{" "}
          <span className="g">
            Specifies self-contained content, like illustrations, diagrams,
            photos, code listings, etc.
          </span>
        </div>
        <div>
          {"<footer>"}{" "}
          <span className="g">Defines a footer for a document or section.</span>
        </div>
        <div>
          {"<header>"}{" "}
          <span className="g">
            Represents a container for introductory content or a set of
            navigational links.
          </span>
        </div>
        <div>
          {"<main>"}{" "}
          <span className="g">Specifies the main content of a document.</span>
        </div>
        <div>
          {"<mark>"}{" "}
          <span className="g">
            Defines text that should be marked or highlighted.
          </span>
        </div>
        <div>
          {"<nav>"}{" "}
          <span className="g">Defines a set of navigation links.</span>
        </div>
        <div>
          {"<section>"}{" "}
          <span className="g">Defines a section in a document.</span>
        </div>
        <div>
          {"<summary>"}{" "}
          <span className="g">
            {
              "Defines a visible heading for the <details> element. The heading can be clicked to view/hide the details."
            }
          </span>
        </div>
        <div>
          {"<time>"}{" "}
          <span className="g">Defines a specific time (or datetime).</span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
];

export default data;
