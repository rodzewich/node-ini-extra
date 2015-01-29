/// <reference path="./utils.ts" />

import utils = require("utils");

module ini {

    export function encode(text: string): any {
        var lines: string[] = String(text || "").split(/\r?\n/),
            length: number = lines.length,
            section: string,
            result: any,
            index: number,
            line: string;
        for (index = 0; index < length; index++) {
            line = lines[index];
            if (true) {
                // set section
            } else if (true) {
                // set value
            } else if (true) {
                // show error
            }
        }
        return result;
    }

    export function decode(object: any, sections?: string[]): string {
        var index: number,
            length: number,
            section: string;
        if (utils.typeOf(sections) === "array") {
            length = sections.length;
            for (index = 0; index < length; index++) {
                section = String(sections[index] || "");
                // todo: check section name
            }
        } else if (utils.typeOf(sections) !== "undefined") {
            throw new Error("bla bla bla");
        }
        return null;
    }

}

export = ini;