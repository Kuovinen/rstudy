import path from "path";
import HTML from "../../html.svg";
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
          {"<br/>"} <span className="g">line break</span>
        </div>
        <div>
          {"<hr/>"} <span className="g">horizontal rule</span>
        </div>
        <div>
          {"<span>"} <span className="g">inline container</span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
  {
    name: `Text markup tags`,
    tags: (
      <div>
        <div>
          {"<strong>"}{" "}
          <span className="g">Indicates importance of content.</span>
        </div>
        <div>
          {"<em>"}{" "}
          <span className="g">
            Used to change meaning of text same way emphasis sometimes changes
            it in spoken speach
          </span>
        </div>
        <div>
          {"<blockquote>"}{" "}
          <span className="g">
            Specifies a section that is quoted from another source.
          </span>
        </div>
        <div>
          {"<q>"} <span className="g">Defines a short quotation.</span>
        </div>
        <div>
          {"<abbr>"}{" "}
          <span className="g">
            Defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.",
            "Dr.", "ASAP", "ATM".
          </span>
        </div>
        <div>
          {"<address>"}{" "}
          <span className="g">
            Defines the contact information for the author/owner of a document
            or an article.
          </span>
        </div>
        <div>
          {"<pre>"}{" "}
          <span className="g">
            Еру element is displayed in a fixed-width font, and the text
            preserves both spaces and line breaks. The text will be displayed
            exactly as written in the HTML source code.
          </span>
        </div>
        <div>
          {"<dfn>"}{" "}
          <span className="g">
            Used to indicate the TERM being defined, not the definition itself.
          </span>
        </div>
        <div>
          {"<code>"}{" "}
          <span className="g">
            Defines code, whose content inside is displayed in the browser's
            default monospace font.
          </span>
        </div>
        <div>
          {"<cite>"} <span className="g">Defines a citation.</span>
        </div>
        <div>
          {"<del>"}{" "}
          <span className="g">
            Defines text that has been deleted from a document.
          </span>
        </div>
        <div>
          {"<ins>"}{" "}
          <span className="g">
            Defines a text that has been inserted into a document.
          </span>
        </div>
        <div>
          {"<sub>"}{" "}
          <span className="g">
            Subscript text that appears half a character below the normal line,
            and is sometimes rendered in a smaller font.
          </span>
        </div>
        <div>
          {"<sup>"}{" "}
          <span className="g">
            Superscript text that appears half a character above the normal
            line, and is sometimes rendered in a smaller font.
          </span>
        </div>
        <div>
          {"<bdo>"}{" "}
          <span className="g">
            text direction override, overrides the current directionality of
            text, so that the text within is rendered in a different direction
            (mirrorered placement of letters)
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
        <div>
          {"<dl>"}{" "}
          <span className="g">Definition list, a general container.</span>
        </div>
        <div>
          {"<dt>"} <span className="g">Definition term, the actual item</span>
        </div>
        <div>
          {"<dt>"} <span className="g">Term description.</span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
  {
    name: `Multimedia tags`,
    tags: (
      <div>
        <div>
          {"<audio>"} <span className="g">Ordered list incasor tag</span>
        </div>
        <div>
          {"<video>"} <span className="g">Ordered list incasor tag</span>
        </div>
        <div>
          {"<source>"} <span className="g">Ordered list incasor tag</span>
        </div>
        <div>
          {"<embed>"} <span className="g">Ordered list incasor tag</span>
        </div>
        <div>
          {"<track>"} <span className="g">Ordered list incasor tag</span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
  {
    name: `Empty tags`,
    tags: (
      <div>
        <div>
          {"<img>"} <span className="g">Ordered list incasor tag</span>
        </div>
        <div>
          {"<br>"} <span className="g">Ordered list incasor tag</span>
        </div>
        <div>
          {"<hr>"} <span className="g">Ordered list incasor tag</span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
  {
    name: `Graphics tags`,
    tags: (
      <div>
        <div>
          {"<canvas>"} <span className="g">Ordered list incasor tag</span>
        </div>
        <div>
          {"<svg>"} <span className="g">Ordered list incasor tag</span>
        </div>
      </div>
    ),
    example: <div></div>,
  },
  {
    name: `Iput tags`,
    tags: (
      <div className="inputs">
        <div>
          {'<input type="button">'}
          <br />{" "}
          <span className="g">
            Older approach to making a button. Doesn't implicitly use SUBMIT
            inside a form.
          </span>
        </div>
        <div>
          {'<input type="checkbox">'}
          <br />{" "}
          <span className="g">
            This tag uses it's NAME and VALUE attributes to generate a
            name=value data pair.If no value is provided, it defauls to ON,
            nama=on. For multiple checkboxes of the same name, a
            name=value1&name=value2 result is submitted.
          </span>
        </div>
        <div>
          {'<input type="color">'}
          <br />{" "}
          <span className="g">
            Interface element that lets a user specify a color.
          </span>
        </div>
        <div>
          {'<input type="date">'}
          <br />
          <span className="g">
            Create input fields that let the user enter a date.
          </span>
        </div>
        <div>
          {'<input type="datetime-local">'}
          <br />
          <span className="g">
            Create input controls that let the user easily enter both a date and
            a time.
          </span>
        </div>
        <div>
          {'<input type="email">'}
          <br />
          <span className="g">
            Used to let the user enter and edit an e-mail address.
          </span>
        </div>
        <div>
          {'<input type="file">'}
          <br />
          <span className="g">
            Allows one to choose one or more files from their device storage.
          </span>
        </div>
        <div>
          {'<input type="hidden">'}
          <br />
          <span className="g">
            Defines a hidden input field.A hidden field lets web developers
            include data that cannot be seen or modified by users when a form is
            submitted. CAN be edited through developer tools so not secure.
          </span>
        </div>
        <div>
          {'<input type="image">'}
          <br />
          <span className="g">
            Used to create graphical submit buttons, i.e. submit buttons that
            take the form of an image rather than text.
          </span>
        </div>
        <div>
          {'<input type="month">'}
          <br />
          <span className="g">
            Allows for the creation of input fields that let the user enter a
            month and year.
          </span>
        </div>
        <div>
          {'<input type="number">'}
          <br />
          <span className="g">
            Includes built-in validation to reject non-numerical entries.
          </span>
        </div>
        <div>
          {'<input type="password">'}
          <br />
          <span className="g">
            Provide a way for the user to securely enter a password.This
            character obscuring the actual input will vary depending on the user
            agent and operating system.
          </span>
        </div>
        <div>
          {'<input type="radio">'}
          <br />
          <span className="g">
            Are generally used in radio groups—collections of radio buttons
            describing a set of related options.the VALUE attribute is a string
            containing the radio button's value.Once a radio group is
            established, selecting any radio button in that group automatically
            deselects any currently-selected radio button in the same group.Each
            group needs to have a unique name.
          </span>
        </div>
        <div>
          {'<input type="range">'}
          <br />
          <span className="g">
            These let the user specify a numeric value which must be no less
            than a given value, and no more than another given value. Has max,
            min and step attributes.
          </span>
        </div>
        <div>
          {'<input type="reset">'}
          <br />
          <span className="g">
            A button, with a default click event handler that resets all of the
            inputs in the form to their initial values.
          </span>
        </div>
        <div>
          {'<input type="search">'}
          <br />
          <span className="g">
            Text fields designed for the user to enter search queries into.
            These are functionally identical to text inputs, but may be styled
            differently by the user agent.
          </span>
        </div>
        <div>
          {'<input type="submit">'}
          <br />
          <span className="g">
            A button, with a default click event handler set to submit the form
            to the server.submit the form to the server submit the form to the
            server.
          </span>
        </div>
        <div>
          {'<input type="tel">'}
          <br />
          <span className="g">
            Used to let the user enter and edit a telephone number.
          </span>
        </div>
        <div>
          {'<input type="text">'}
          <br />
          <span className="g">
            The default of INPUT tags if no type is given. Used to enter text.
          </span>
        </div>
        <div>
          {'<input type="time">'}
          <br />
          <span className="g">
            Input fields designed to let the user easily enter a time (hours and
            minutes, and optionally seconds).
          </span>
        </div>
        <div>
          {'<input type="url">'}
          <br />
          <span className="g">Used to let the user enter and edit a URL.</span>
        </div>
        <div>
          {'<input type="week">'}
          <br />
          <span className="g">
            Input fields allowing easy entry of a year plus the ISO 8601 week
            number during that year (i.e., week 1 to 52 or 53).
          </span>
        </div>
      </div>
    ),
    example: (
      <div>
        <span>1: </span>
        <input type="button" /> <br />
        <span>2: </span>
        <input type="checkbox" /> <br />
        <span>3: </span>
        <input type="color" /> <br />
        <span>4: </span>
        <input type="date" />
        <br />
        <span>5: </span>
        <input type="datetime-local" />
        <br />
        <span>6: </span>
        <input type="email" />
        <br />
        <span>7: </span>
        <input type="file" />
        <br />
        <span>8: </span>
        <input type="hidden" />
        <br />
        <span>9: </span>
        <input type="image" src={HTML} style={{ height: "1rem" }} />
        <br />
        <span>10: </span>
        <input type="month" />
        <br />
        <span>11: </span>
        <input type="number" />
        <br />
        <span>12: </span>
        <input type="password" />
        <br />
        <span>13: </span>
        <input type="radio" />
        <br />
        <span>14: </span>
        <input type="range" />
        <br />
        <span>15: </span>
        <input type="reset" />
        <br />
        <span>16: </span>
        <input type="search" />
        <br />
        <span>17: </span>
        <input type="submit" />
        <br />
        <span>18: </span>
        <input type="tel" />
        <br />
        <span>19: </span>
        <input type="text" />
        <br />
        <span>20: </span>
        <input type="time" />
        <br />
        <span>21: </span>
        <input type="url" />
        <br />
        <span>22: </span>
        <input type="week" />
        <br />
      </div>
    ),
  },
];

export default data;

//Scroll-snap-align: y mandatory;
