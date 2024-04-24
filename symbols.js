const DISPLAY_BOX = "\u25A1";

const symbols_default = [
    /* samwho */
    {
        glyph: "©",
        name: "Copyright",
        searchTerms: ["(C)"]
    },
    {
        glyph: "®",
        name: "Registered Trademark",
        searchTerms: ["(R)"]
    },
    {
        glyph: "™",
        name: "Trademark",
        searchTerms: ["TM"]
    },

    /* punctuation */
    {
        glyph: "“",
        name: "Left Double Quotation Mark",
        searchTerms: ["open", "quote", '"']
    },
    {
        glyph: "”",
        name: "Right Double Quotation Mark",
        searchTerms: ["close", "quote", '"']
    },
    {
        glyph: "‘",
        name: "Left Single Quotation Mark",
        searchTerms: ["open", "quote", "'"]
    },
    {
        glyph: "’",
        name: "Right Single Quotation Mark",
        searchTerms: ["close", "quote", "'"]
    },
    {
        glyph: "—",
        name: "Em-dash"
    },
    {
        glyph: "–",
        name: "En-dash",
        searchTerms: ["en", "dash"]
    },
    {
        glyph: "¡",
        name: "Inverted Exclamation Mark",
        searchTerms: ["!"]
    },
    {
        glyph: "¿",
        name: "Inverted Question Mark",
        searchTerms: ["?"]
    },
    {
        glyph: "‽",
        name: "Interrobang",
        searchTerms: ["?!"]
    },
    {
        glyph: "…",
        name: "Ellipsis",
        searchTerms: ["..."]
    },
    {
        glyph: "−",
        name: "minus",
        searchTerms: ["minus", "dash"],
    },
    {
        glyph: "é",
        name: "E with Acute",
        searchTerms: ["acute", "e"]
    },
    {
        glyph: "•",
        name: "Vertically Centered Dot",
        searchTerms: ["bullet", "."]
    },
    {
        glyph: "§",
        name: "Section",
        searchTerms: ["silcrow", "s"]
    },
    {
        glyph: "¶",
        name: "Paragraph",
        searchTerms: ["pilcrow", "p"]
    },

    /* currency */
    {
        glyph: "¤",
        name: "Currency"
    },
    {
        glyph: "£",
        name: "Pound"
    },
    {
        glyph: "€",
        name: "Euro"
    },
    {
        glyph: "$",
        name: "Dollar Sign"
    },
    {
        glyph: "¥",
        name: "Yen"
    },
    {
        glyph: "₩",
        name: "Won"
    },
    {
        glyph: "₹",
        name: "Rupee"
    },
    {
        glyph: "¢",
        name: "Cent"
    },

    /* math */
    {
        glyph: "±",
        name: "Plus-minus",
        searchTerms: ["+", "-"]
    },
    {
        glyph: "×",
        name: "Times",
        searchTerms: ["multiply", "*", "x"]
    },
    {
        glyph: "÷",
        name: "Divide",
        searchTerms: ["/"]
    },
    {
        glyph: "√",
        name: "Square Root",
        searchTerms: ["sqrt"]
    },
    {
        glyph: "∑",
        name: "Summation",
        searchTerms: ["sum"]
    },
    {
        glyph: "∏",
        name: "Product"
    },
    {
        glyph: "∫",
        name: "Integral"
    },
    {
        glyph: "∂",
        name: "Partial Derivative"
    },
    {
        glyph: "¹",
        name: "Superscript One",
        searchTerms: ["power","exponent","1","^1","**1"]
    },
    {
        glyph: "²",
        name: "Superscript Two",
        searchTerms: ["squared", "power","exponent","2","^2","**2"]
    },
    {
        glyph: "³",
        name: "Superscript Three",
        searchTerms: ["cubed", "power","exponent","3","^3","**3"]
    },
    {
        glyph: "₀",
        name: "Subscript Zero",
        searchTerms: ["not", "0", "_0"]
    },
    {
        glyph: "₁",
        name: "Subscript One",
        searchTerms: ["1", "_1"]
    },
    {
        glyph: "₂",
        name: "Subscript Two",
        searchTerms: ["2", "_2"]
    },
    {
        glyph: "¼",
        name: "One Quarter",
        searchTerms: ["fraction", "1/4"]
    },
    {
        glyph: "½",
        name: "One Half",
        searchTerms: ["fraction", "1/2"]
    },
    {
        glyph: "¾",
        name: "Three Quarters",
        searchTerms: ["fraction", "3/4"]
    },
    {
        glyph: "∞",
        name: "Infinity"
    },
    {
        glyph: "∅",
        name: "Empty Set"
    },
    {
        glyph: "⌀",
        name: "Diameter",
    },
    {
        glyph: "π",
        name: "pi",
        searchTerms: ["pie"]
    },
    {
        glyph: "∆",
        name: "Delta"
    },
    {
        glyph: "ε",
        name: "Epsilon"
    },
    {
        glyph: "µ",
        name: "Micro",
        searchTerms: ["mu"]
    },
    {
        glyph: "°",
        name: "Degree"
    },

    /* accented characters */
    {
        glyph: "á",
        name: "A with Acute"
    },
    {
        glyph: "à",
        name: "A with Grave"
    },
    {
        glyph: "å",
        name: "Latin small letter A with ring above",
    },
    {
        glyph: "Å",
        name: "Latin capital letter A with ring above",
        searchTerms: ["angstrom"]
    },
    {
        glyph: "ä",
        name: "Latin small letter A with diaeresis"
    },
    {
        glyph: "Ä",
        name: "Latin capital letter A with diaeresis"
    },
    {
        glyph: "ç",
        name: "C with Cedilla"
    },
    {
        glyph: "é",
        name: "E with Acute"
    },
    {
        glyph: "ñ",
        name: "Latin Small Letter n with Tilde",
        searchTerms: ["jalapeno"]
    },
    {
        glyph: "Ñ",
        name: "Latin Capital Letter N with Tilde",
        searchTerms: ["jalapeno"]
    },

    /* combined characters */
    {
        glyph: "æ",
        name: "AE"
    },
    {
        glyph: "Æ",
        name: "AE"
    },
    {
        glyph: "œ",
        name: "OE"
    },
    {
        glyph: "Œ",
        name: "OE"
    },

    /* miscellaneous */
    {
        glyph: "✔",
        name: "Check",
        searchTerms: ["tick"]
    },
    {
        glyph: "←",
        name: "Left Arrow"
    },
    {
        glyph: "→",
        name: "Right Arrow"
    },
    {
        glyph: "↑",
        name: "Upwards Arrow"
    },
    {
        glyph: "↓",
        name: "Downwards Arrow"
    },
    {
        glyph: "↔",
        name: "Left Right Arrow"
    },
    {
        glyph: "↕",
        name: "Up Down Arrow"
    },
    {
        glyph: "~",
        name: "Tilde"
    },
    {
        glyph: "ꩰ",
        name: "Khamti Reduplication",
        searchTerms: ["xn--8r9a" /* Punycode */]
    },
    {
        glyph: "ဪ",
        name: "Myanmar Letter Au",
        searchTerms: ["xn--ujd" /* Punycode */]
    },
    {
        glyph: "⌘",
        name: "Command (Looped Square)",
    },
    {
        glyph: "⌥",
        name: "Option"
    },
    {
        glyph: "þ",
        name: "lowercase thorn"
    },
    {
        glyph: "Þ",
        name: "uppercase thorn"
    },
    {
        glyph: "ð",
        name: "lowercase eth"
    },
    {
        glyph: "Ð",
        name: "uppercase eth"
    },
    {
        glyph: "†",
        name: "dagger"
    },
    {
        glyph: "♥",
        name: "heart"
    },
    {
        glyph: "♦",
        name: "diamond"
    },
    {
        glyph: "♣",
        name: "club"
    },
    {
        glyph: "♠",
        name: "spade"
    },
    {
        glyph: "℠",
        name: "Service Mark",
        searchTerms: ["service mark", "SM"]
    },

    /* invisible characters */
    {
        glyph: "\u00A0",
        display: DISPLAY_BOX,
        name: "No-break Space",
        searchTerms: ["&nbsp;", "non-breaking"]
    },
    {
        glyph: "\u200B",
        display: DISPLAY_BOX,
        name: "Zero Width Space",
        searchTerms: ["zwsp"]
    },
    {
        glyph: "\u200E",
        display: DISPLAY_BOX,
        name: "Left-to-Right",
        searchTerms: ["&lrm;", "ltr"]
    },
    {
        glyph: "\u200F",
        display: DISPLAY_BOX,
        name: "Right-to-Left",
        searchTerms: ["&rlm;", "rtl"]
    },

    /* Private Use Area (not official Unicode, may not display) */
    {
        glyph: "\uF8FF",
        name: "Apple Logo"
    }
];

let symbols = []

try {
    // Catching invallid json, not an invalid symbol array
    symbols = sanitise(JSON.parse(window.localStorage.getItem("symbols")));
} catch(err) {
    console.error(err);
}
if (symbols.length === 0) {
    symbols = symbols_default;
}

function sanitise(symbols) {
    if (!Array.isArray(symbols)) {
        return [];
    }
    return symbols.filter((s) => 
        s !== null &&
        typeof s === 'object' &&
        !Array.isArray(s) &&
        s.hasOwnProperty("glyph") &&
        s.hasOwnProperty("name")
    );
}


function search(searchTerm) {
    searchTerm = searchTerm?.toLowerCase() ?? "";

    return symbols.filter((s) => {
        /* Get hex representation of codepoint, e.g. 00A0 for &nbsp; or 20AC for € */
        const codePoint = s.glyph.codePointAt(0)?.toString(16).padStart(4, 0);

        const searchTerms = [
            s.name,
            s.glyph,
            ...s.searchTerms ?? [],
            `U+${codePoint}`,
            `0x${codePoint}`
        ];
        return searchTerm === "" || searchTerms.join(" ").toLowerCase().includes(searchTerm);
    });
}

function addSymbol() {
    symbols.unshift({
        glyph: "",
        name: "",
        // For now: no display and search terms
    });
    // Better to just add the one div for the symbol
    // For now this is fast enough.
    renderSymbols();
    editSymbol(document.getElementsByClassName("symbol")[0], "glyph");
}

function editSymbol(elem, classname) {
    const handleAction = (target) => {
        symbols[target.dataset.index][target.dataset.classname] = target.value;
        if (!symbols[target.dataset.index].name) {
            symbols[target.dataset.index].name = symbols[target.dataset.index].glyph;
            target.parentElement.parentElement.getElementsByClassName("name")[0].textContent = symbols[target.dataset.index].name;
        }
        target.parentElement.parentElement.title = symbols[target.dataset.index].name;
        target.parentElement.textContent = target.value;
        window.localStorage.setItem("symbols", JSON.stringify(symbols));
        return true;
    }
    
    elem.classList.remove("clicked");
    elemClass = elem.getElementsByClassName(classname)[0];
    input = document.createElement("input");    
    input.dataset.classname = classname;
    input.dataset.index = Array.from(elem.parentElement.children).indexOf(elem);
    input.value = symbols[input.dataset.index][classname];
    input.addEventListener("blur", (e) => handleAction(e.target))
    input.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "Enter":
                handleAction(e.target);
                break;
            case "Escape":
                e.target.parentElement.textContent = 
                    symbols[e.target.dataset.index][e.target.dataset.classname];
                break;
        }
    });
    elemClass.innerHTML = '';
    elemClass.appendChild(input);
    input.focus();
}

function isNotEditingSymbol() {
    return document
        .getElementsByClassName("symbols")[0]
        .getElementsByTagName("INPUT")
        .length === 0;
}

function removeSymbol(elem) {
    symbols.splice(Array.from(elem.parentElement.children).indexOf(elem), 1);
    window.localStorage.setItem("symbols", JSON.stringify(symbols));
    elem.remove();
}
function saveSymbols() {
    const link = document.createElement("a");
    const file = new Blob([JSON.stringify(symbols, null, "\t")], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = (document.querySelector('input[type="text"]').value || "symbols") + ".json";
    link.click();
    URL.revokeObjectURL(link.href);
}

function renderSymbols(searchTerm) {
    const parent = document.querySelector(".symbols");
    parent.innerHTML = "";

    const results = search(searchTerm);
    if (results.length === 0) {
        const span = document.createElement("span");

        const p = document.createElement("p");
        p.textContent = "Can't find what you're looking for?";
        span.appendChild(p);

        const a = document.createElement("a");
        a.href = "https://github.com/samwho/symbol.wtf"
        a.target = "_blank";
        a.textContent = "Open a PR!";
        span.appendChild(a);

        parent.appendChild(span);
        return;
    }

    for (const symbol of results) {
        const elem = document.createElement("div");
        const glyphElem = document.createElement("div");
        const nameElem = document.createElement("div");
        const copyElem = document.createElement("div");
        const removeElem = document.createElement("div");

        elem.classList = "symbol";
        elem.tabIndex = 0;
        elem.title = symbol.name;
        elem.setAttribute("draggable", "true");

        glyphElem.classList = "glyph";
        glyphElem.textContent = symbol.display || symbol.glyph;

        nameElem.classList = "name";
        nameElem.textContent = symbol.name;

        copyElem.classList = "copy";
        copyElem.textContent = "Copied!";
        
        removeElem.classList = "remove";
        
        elem.appendChild(glyphElem);
        elem.appendChild(nameElem);
        elem.appendChild(copyElem);
        elem.appendChild(removeElem);

        const handleAction = () => {
            if (elem.classList.contains("clicked") || !isNotEditingSymbol()) {
                return;
            }

            navigator.clipboard.writeText(symbol.glyph);

            console.log(`Copied ${symbol.name} (${symbol.glyph})!`);
            elem.classList.add("clicked");

            setTimeout(() => {
                elem.classList.remove("clicked");
            }, 1000);
        };
        elem.addEventListener("click", handleAction);
        elem.addEventListener("keydown", (event) => {
            if (isNotEditingSymbol()) {
                switch (event.key) {
                    case " ":
                    case "Enter":
                        event.preventDefault();
                        handleAction();
                        break;
                    case "Delete":
                        removeSymbol(event.target);
                        break;
                }
            }
        });
        parent.appendChild(elem);
    }
}

function openElement(elem) {
    elem.classList.add("open");
    elem.dataset.open_counter |= 0;
    elem.dataset.open_counter++;
    window.setTimeout((elem) => {
        elem.dataset.open_counter--;
        console.warn(elem.dataset.open_counter, +elem.dataset.open_counter)
        if (+elem.dataset.open_counter === 0) {
            elem.classList.remove("open");
        }
    }, 5000, elem);
}

function fileHandler(file) {
    if (file.type === "application/json") {
        const dataset = document.getElementById("save_symbols").dataset;
        +dataset.todo++;
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onloadend = () => {
            +dataset.todo--;
            try {
                const content = sanitise(JSON.parse(reader.result));
                if (content.length) {
                    if (
                        !+dataset.uploads && 
                        !document
                            .getElementById("save_symbols")
                            .classList
                            .contains("open")
                    ) {
                        symbols = [];
                    }
                    +dataset.uploads++;
                    symbols.push(...content);
                }
            } catch(err) {
                console.error(err);
            }
            if (!+dataset.todo) {
                console.log("Number of files loaded:", dataset.uploads);
                window.localStorage.setItem("symbols", JSON.stringify(symbols));
                renderSymbols();
            }
        }
    }
}

function dragOverHandler(ev) {
  ev.preventDefault();
  ev.target.classList.add("over");
}

function dragLeaveHandler(ev) {
  ev.preventDefault();
  ev.target.classList.remove("over");
}

function dropHandler(ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    ev.target.classList.remove("over");
    openElement(ev.target);
    document.getElementById("save_symbols").dataset.uploads = 0;
    document.getElementById("save_symbols").dataset.todo = 0;

    if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
        fileHandler(item.getAsFile());
        }
    });
    } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file) => {
        fileHandler(file);
    });
    }    
}

function handleDragStart(e) {
    e.target.classList.add('drag');
    document.getElementsByClassName("symbols")[0].dataset.dragIndex = 
        Array.from(e.target.parentElement.children).indexOf(e.target);
}

function handleDragEnd(e) {
    e.target.classList.remove('drag');
    Array.from(e.target.parentElement.children).forEach(elem => elem.classList.remove("over"));
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    Array.from(document.getElementsByClassName("over"))
        .forEach(elem => elem.classList.remove("over"));
    let target = e.target;
    while (target) {
        if (target.classList?.contains("symbol")) {
            target.classList.add("over");
            break;
        }
        target = target.parentElement
    }
}

function handleDrop(e) {
    e.preventDefault();
    let target = e.target;
    while (target) {
        if (target.classList?.contains("symbol")) {
            const parentElem = target.parentElement;
            const dragIndex = parseInt(parentElem.dataset.dragIndex);
            const dragTarget = Array.from(parentElem.children).indexOf(target);
            
            if (!(dragIndex >= 0)) {
                return false;
            }                
            
            symbols.splice(dragTarget, 0, symbols.splice(dragIndex, 1)[0]);
            window.localStorage.setItem("symbols", JSON.stringify(symbols));
            
            if (dragIndex < dragTarget) {
                if (target.nextElementSibling) { 
                    target.nextElementSibling.before(
                        parentElem.children[dragIndex]
                    );
                } else {
                    parentElem.appendChild(parentElem.children[dragIndex]);
                }
            } else {
                target.before(parentElem.children[dragIndex]);
            }
            break;
        }
        target = target.parentElement;
    }
    e.stopPropagation();
    return false;
}

document.addEventListener("DOMContentLoaded", () => {
    const search = window.location.hash ? window.location.hash.substring(1) : "";
    renderSymbols(search);

    const searchInput = document.querySelector(".search input");
    searchInput.value = search;
    searchInput.addEventListener("input", (e) => {
        renderSymbols(e.target.value);
    });
    searchInput.addEventListener("blur", (e) => {
        window.location.hash = e.target.value;
        return false;
    });

    window.addEventListener("hashchange", () => {
        const search = window.location.hash ? window.location.hash.substring(1) : "";
        searchInput.value = search;
        renderSymbols(search);
    });
    
    document.getElementById("add_symbol").addEventListener("click", () => addSymbol());
    document.getElementById("save_symbols").addEventListener("click", () => saveSymbols());
    
    window.addEventListener("dblclick", (e) => {
        let target = e.target;
        while(target) {
            if (target.classList?.contains("remove")) {
                return removeSymbol(target.parentElement);
            }
            if (target.classList?.contains("glyph")) {
                return editSymbol(target.parentElement, "glyph");
            }
            if (target.classList?.contains("name")) {
                return editSymbol(target.parentElement, "name");
            }
            if (target.classList?.contains("copy")) {
                return editSymbol(target.parentElement, "name");
            }
            if (target.classList?.contains("symbol")) {
                return editSymbol(target, "glyph");
            }
            target = target.parentElement;
        }
    });
    
    document.getElementById("save_symbols").addEventListener("drop", dropHandler);
    document.getElementById("save_symbols").addEventListener("dragover", dragOverHandler);
    document.getElementById("save_symbols").addEventListener("dragleave", dragLeaveHandler);
    
    document.getElementsByClassName("symbols")[0].addEventListener("dragstart", handleDragStart);
    document.getElementsByClassName("symbols")[0].addEventListener("dragover", handleDragOver);
    document.getElementsByClassName("symbols")[0].addEventListener("dragenter", handleDragEnter);
    document.getElementsByClassName("symbols")[0].addEventListener("dragend", handleDragEnd);
    document.getElementsByClassName("symbols")[0].addEventListener("drop", handleDrop);
});
