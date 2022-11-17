let data = [
  {
    name: `Colors text`,
    comment: `//Colors for use in text.`,
    example: (
      <div>
        <span>className=</span>
        <span style={{ color: "#3B71CA" }}> {".text-primary"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "#9FA6B2" }}> {".text-secondary"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "#14A44D" }}> {".text-success"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "#DC4C64" }}> {".text-danger"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "#E4A11B" }}> {".text-warning"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "#54B4D3" }}> {".text-info"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "#FBFBFB" }}> {".text-light"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "#332D2D" }}> {".text-dark"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "lightgrey" }}> {".text-muted"}</span>
        <br />
        <span>className=</span>
        <span style={{ color: "white" }}> {".text-white"}</span>
        <br />
      </div>
    ),
  },
  {
    name: `Colors backgrounds`,
    comment: `//Colors for use in text.`,
    example: (
      <div>
        <span>className=</span>
        <span style={{ background: "#3B71CA" }}> {".bg-primary"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "#9FA6B2" }}> {".bg-secondary"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "#14A44D" }}> {".bg-success"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "#DC4C64" }}> {".bg-danger"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "#E4A11B" }}> {".bg-warning"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "#54B4D3" }}> {".bg-info"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "#FBFBFB" }}> {".bg-light"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "#332D2D" }}> {".bg-dark"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "lightgrey" }}> {".bg-muted"}</span>
        <br />
        <span>className=</span>
        <span style={{ background: "white" }}> {".bg-white"}</span>
        <br />
      </div>
    ),
  },
  {
    name: `Extra color`,
    comment: `//Colors were expanded in v5 with ranges going from 100 to 900 in 100 unit increments.Example gray-100`,
    example: (
      <div>
        <span>className=</span>
        <span className="gray-100"> gray-100</span>
        <span className="gray-200"> gray-200</span>
        <span className="gray-300"> gray-300</span>
        <span className="gray-400"> gray-400</span>
        <span className="gray-500"> gray-500</span>
        <span className="gray-600"> gray-600</span>
        <span className="gray-700"> gray-700</span>
        <span className="gray-800"> gray-800</span>
        <span className="gray-900"> gray-900</span>
      </div>
    ),
  },
  {
    name: `Display classes`,
    comment: `//Used for headings. 1 larges, 6 smallest. None are bold, but all are large.`,
    example: (
      <div>
        <span className="display-1">Display 1 </span>
        <span className="display-2">Display 2 </span>
        <span className="display-3">Display 3 </span>
        <span className="display-4">Display 4 </span>
        <span className="display-5">Display 5 </span>
        <span className="display-6">Display 6 </span>
      </div>
    ),
  },
  {
    name: `Lead text`,
    comment: `//Lead text is simply slightly larger than normal.`,
    example: (
      <div>
        <span className="lead">Lead text </span>
        <br />
        <span>Normal text </span>
      </div>
    ),
  },
  {
    name: `Alignment`,
    comment: `//Aligns text to end, start or center.`,
    example: (
      <div>
        <p className="text-center">text-center</p>
        <p className="text-end">text-end</p>
        <p className="text-start">text-start (feault)</p>
      </div>
    ),
  },
  {
    name: `Decorations`,
    comment: `//Text-decoration classes and font weight (fw) class..`,
    example: (
      <div>
        <p className="text-decoration-underline">
          text-decoration-underline text
        </p>
        <p className="text-decoration-line-through">
          text-decoration-line-through text
        </p>
        <p className="fw-bold">fw-bold text</p>
      </div>
    ),
  },
  {
    name: `Button component`,
    comment: `//Bootstrap basic component always has a "btn" class.`,
    example: (
      <div>
        <button className="btn btn-primary">btn btn-primary</button>
        <button className="btn btn-secondary">btn btn-secondary</button>
        <button className="btn btn-success">btn btn-success</button>
        <br />
        <a href="#" className="btn btn-info">
          anchor as a "btn btn-info"
        </a>
        <button className="btn btn-lg btn-danger">btn btn-lg btn-danger</button>
        <button className="btn btn-sm btn-warning">
          btn btn-sm btn-warning
        </button>{" "}
        <br />
        <button className="btn btn-outline-primary">
          btn btn-outline-primary
        </button>
        <button className="btn btn-sm btn-outline-warning">
          btn btn-sm btn-outline-warning
        </button>
      </div>
    ),
  },
  {
    name: `Button groups`,
    comment: `//Group together buttons using btn-group. When they are inside a group, buttons are styled differently, with only the outer ones having rounded corners.`,
    example: (
      <div className="btn-group">
        <button className="btn btn-primary">btn btn-primary 1</button>
        <button className="btn btn-success">btn btn-success</button>
        <button className="btn btn-primary">btn btn-primary 2</button>
      </div>
    ),
  },
  {
    name: `Margin and padding classes`,
    comment: `//Margins m-1 to m-5, with 5 being the largest. Same with padding, p-1 to p-5. Margin or padding in the up and down = my or py. Left and right = mx and px. So my-1 or px-2. Additionally mt = margin top, mb = margin bottom, ms = margin left (start), me = margin right (end). Same way pt, pb, ps, pe exist.`,
    example: (
      <div>
        <div className="bg-success m-4 p-4">bg-success m-4 p-4</div>
      </div>
    ),
  },
  {
    name: `Borders`,
    comment: `//Use class border to add one. Light grey by default. Colorize with usual key words after hyphon, like border-warning. Indicate individual directions with -bottom, -top, -start, -end keywords after the word border. Thickness goes from border-1 to border-5. Rounded makes the element rounded. Rounded pill will make the roundness full 50%.`,
    example: (
      <div>
        <div className="bg-success m-2 p-1 border">
          bg-success m-2 p-1 border
        </div>
        <div className="m-2 p-1 border-bottom border-end border-start">
          m-4 p-1 border-bottom border-end border-start
        </div>
        <div className="m-2 p-1 border-bottom border-top border-warning">
          m-2 p-1 border-bottom border-top border-warning
        </div>
        <div className="m-2 p-1 border-start border-5">
          m-2 p-1 border-start border-5
        </div>
        <div className="m-2 p-1 border rounded">m-2 p-1 border rounded</div>
        <div className="m-2 p-1 border rounded-pill">
          m-2 p-1 border rounded
        </div>
      </div>
    ),
  },
  {
    name: `Box shadow`,
    comment: `//Using the keyword shadow with sizes lg or sm or none we create shadows.`,
    example: (
      <div>
        <div className="m-4 p-4 shadow-sm">m-4 p-4 shadow-sm</div>
        <div className="m-4 p-4 shadow">m-4 p-4 shadow</div>
        <div className="m-4 p-4 shadow-lg">m-4 p-4 shadow-lg</div>
      </div>
    ),
  },
  {
    name: `Font weight`,
    comment: `//Boldness of text fw- : bold, bolder. Fst = font style.`,
    example: (
      <div>
        <span className="fw-light">fw-light </span>
        <span>normal </span>
        <span className="fw-bold">fw-bold </span>
        <span className="fst-italic">fst-italic </span>
        <span className="fst-italic fw-light">fst-italic fw-light </span>
      </div>
    ),
  },
  {
    name: `Containers`,
    comment: `//Each container progressivly fills out 100% of the screen at ever larger breakpoint sizes.  So while .container-md fills 100% of both extra small and small screens, but none of the rest, .container-xl fills out 100% of all screens up to x-large, where upon it only fills 1140px worth of width. Fluid fills out ALL sizes to 100%`,
    example: (
      <div>
        <div>
          <span className="mx-5"> </span>
          <span className="mx-5">{"<576px"}</span>
          <span className="mx-2">{">=576px"}</span>
          <span className="mx-5">{">=768px"}</span>
          <span className="mx-4">{">=992px"}</span>
          <span className="mx-5">{">=1200px"}</span>
          <span className="mx-5">{">=1400px"}</span>
        </div>
        <div>
          <span className="mx-4">{".container"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-4">{"540px"}</span>
          <span className="mx-5">{"720px"}</span>
          <span className="mx-5">{"960px"}</span>
          <span className="mx-5">{"1140px"}</span>
          <span className="mx-5">{"1320px"}</span>
        </div>
        <div>
          <span className="mx-4">{".container-sm"}</span>
          <span className="mx-3 green2">{"100%"}</span>
          <span className="mx-5">{"540px"}</span>
          <span className="mx-5">{"720px"}</span>
          <span className="mx-5">{"960px"}</span>
          <span className="mx-5">{"1140px"}</span>
          <span className="mx-5">{"1320px"}</span>
        </div>
        <div>
          <span className="mx-4">{".container-md"}</span>
          <span className="mx-3 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5">{"720px"}</span>
          <span className="mx-5">{"960px"}</span>
          <span className="mx-5">{"1140px"}</span>
          <span className="mx-5">{"1320px"}</span>
        </div>
        <div>
          <span className="mx-4">{".container-lg"}</span>
          <span className="mx-4 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5">{"960px"}</span>
          <span className="mx-5">{"1140px"}</span>
          <span className="mx-5">{"1320px"}</span>
        </div>
        <div>
          <span className="mx-4">{".container-xl"}</span>
          <span className="mx-4 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5">{"1140px"}</span>
          <span className="mx-5">{"1320px"}</span>
        </div>
        <div>
          <span className="mx-4">{".container-xxl"}</span>
          <span className="mx-4 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5 green2">{"100%"}</span>
          <span className="mx-5">{"1320px"}</span>
        </div>
      </div>
    ),
  },
  {
    name: `Grid`,
    comment: `//Incase the columns into rows, then add col-2 or col-3 or col-4 and so on to form 12 alltogether. If used as simply col with no number, it'll expand the width according to how many col's are in one row altogether. If 3, then each will be 4 columns wide. col-sm-4 indicates that one column will take up 4 column widths on a small screen, but col-lg-6 means it'll take 6 columns on a large one.`,
    example: (
      <div>
        normal
        <div className="row">
          <div className="col-2 bg-primary">col-2 bg-primary</div>
          <div className="col-2 bg-success">col-2 bg-success</div>
          <div className="col-4 bg-primary">col-4 bg-primary</div>
          <div className="col-4 bg-success">col-4 bg-success</div>
        </div>
        normal
        <div className="row">
          <div className="col-4 bg-info">col-4 bg-info</div>
          <div className="col-8 bg-warning">col-8 bg-warning</div>
        </div>
        responsive
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xs-12 bg-info">
            col-sm-6 col-lg-4 col-xs-12 bg-info
          </div>
          <div className="col-sm-6 col-lg-4 col-xs-12 bg-success">
            col-sm-6 col-lg-4 col-xs-12 bg-success
          </div>
          <div className="col-sm-12 col-lg-4 col-xs-12 bg-warning">
            col-sm-6 col-lg-4 col-xs-12 bg-success
          </div>
        </div>
      </div>
    ),
  },
  {
    name: `Display`,
    comment: `//Display properties use the D key letter. d-none would dipslay:none the elment, while d-md-block would display it as a block on a middle sized screen.`,
    example: (
      <div>
        <div className="row d-none d-md-block">
          this element hides on any screen below mid size (row d-none
          d-md-block)
        </div>
        <div className="row d-block">
          change the sreen size to midium or larger to see another element above
          this one (this element is : row d-blocky)
        </div>
      </div>
    ),
  },
];
//https://mdbootstrap.com/docs/standard/content-styles/colors/
export default data;
