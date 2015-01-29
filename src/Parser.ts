module ini {

    export class Parser {

        private _content: string;

        constructor(content: string, options?: any) {
            this._content = String(content || "");
        }

        public getContent(): string {
            if (typeof this._content !== "string") {
                this._content = String(this._content || "");
            }
            return this._content;
        }

        public parse(): any {

        }

    }

}