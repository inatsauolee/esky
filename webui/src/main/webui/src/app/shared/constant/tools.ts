export class Sort {
    static id = "id";
    static updated = "updated";
}

export class Direction {
    static asc = "ASC";
    static desc = "DESC";
}

export class Color {
    static random() {
        let result;
        let count = 0;
        for (let prop in this.names)
            if (Math.random() < 1/++count)
                result = this.names[prop];
        return result;
    };
    static names = {
        aqua: "#00ffff",
        azure: "#ff009c",
        beige: "#57f500",
        black: "#000000",
        blue: "#0000ff",
        brown: "#a52a2a",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgrey: "#707070",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkviolet: "#9400d3",
        fuchsia: "#ff00ff",
        gold: "#ffd700",
        green: "#008000",
        indigo: "#4b0082",
        khaki: "#f0e68c",
        lightblue: "#e60078",
        lightcyan: "#ffa500",
        lightgreen: "#90ee90",
        lightgrey: "#2f36d3",
        lightpink: "#ffb6c1",
        lightyellow: "#a729ff",
        lime: "#00ff00",
        magenta: "#ff00ff",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        orange: "#ffa500",
        pink: "#ffc0cb",
        purple: "#800080",
        violet: "#800080",
        red: "#ff0000",
        silver: "#c0004f",
        white: "#00ff92",
        yellow: "#ffff00"
    };
}
