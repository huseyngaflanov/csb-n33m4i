class Element {
  constructor(tagname = "p") {
    this.tagname = tagname;
    this.element = document.createElement(tagname);
    this.class = "";
    this.a = () => {
      document.body.appendChild(this.element);
    };
    this.b = this.a();
    this.setAttribute = (attr, val) => {
      this.element.setAttribute(attr, val);
    };
    this.setStyles = (styles = { none: "none" }) => {
      const styleString = Object.entries(styles)
        .map(([k, v]) => `${k}:${v}`)
        .join("; ");
      let sp = styleString.split("");
      let uppercase = [];
      let newString;

      if (this.element.style.display === "none") {
        newString = "display: block; display: none;";
      } else if (this.element.style.display === "block") {
        newString = "display: none; display: block;";
      } else {
        newString = "display: none; display: block;";
      }

      for (let sps in sp) {
        if (sp[sps] !== sp[sps].toLowerCase()) {
          uppercase.push(sps);
        }
      }

      for (let spi in sp) {
        let isUc = uppercase.find((element) => element === spi);
        if (isUc === undefined) {
          newString += sp[spi];
        } else {
          newString += "-" + sp[spi].toLowerCase();
        }
      }
      this.element.style += newString + ";";
    };
    this.setClass = (className = "class") => {
      this.class = className;
      this.element.class = className;
    };
    this.deleteElement = () => {
      this.element.remove();
    };
    this.addChild = (el) => {
      this.element.appendChild(el.element);
    };
    this.addChildren = (elements = {}) => {
      for (let thisel in elements) {
        console.log(elements[thisel].element);
        this.element.appendChild(elements[thisel].element);
      }
    };
    this.setInner = (inner = "") => {
      this.element.innerHTML = inner;
    };
    this.addLink = (link) => {
      this.element.href = link;
    };
    this.getValue = () => {
      return this.element.value;
    };
    this.setClassStyles = (className = "class", styles = { none: "none" }) => {
      const els = document.getElementsByClassName(className);
      const styleString = Object.entries(styles)
        .map(([k, v]) => `${k}:${v}`)
        .join("; ");
      let sp = styleString.split("");
      let uppercase = [];
      let newString = "display: block;";
      for (let sps in sp) {
        if (sp[sps] !== sp[sps].toLowerCase()) {
          uppercase.push(sps);
        }
      }

      for (let spi in sp) {
        let isUc = uppercase.find((element) => element === spi);
        if (isUc === undefined) {
          newString += sp[spi];
        } else {
          newString += "-" + sp[spi].toLowerCase();
        }
      }

      for (let thisel in els) {
        els[thisel].style += newString + ";";
      }
    };
  }
}

/*document.body.style = "height: 100%; width: 100%; overflow: hidden;";

const box = new Element("div");
const searchInput = new Element("input");
searchInput.setAttribute("type", "search");
box.addChild(searchInput);

box.setStyles({
  width: "100%",
  height: "30px",
  backgroundColor: "red"
});

searchInput.setStyles({
  color: "red",
  backgroundColor: "blue"
});
*/
