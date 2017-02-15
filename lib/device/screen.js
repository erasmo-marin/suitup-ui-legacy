import _map from "lodash/map";

import { EventEmitter } from "events";
import Settings from "../settings";

let breakpoints = Settings.getSettings().Device.Breakpoints;

class ScreenClass extends EventEmitter {
    constructor(args) {
        super(args);
        this.screen = this.getScreen();
        this.setMaxListeners(100);

        window.addEventListener("resize", () => {
            let newScreen = this.getScreen();
            if (newScreen == this.screen) return;

            this.screen = newScreen;
            this.emitChange(this.screen);
        });
    }

    getScreen() {
        let width = window.innerWidth;
        let screen = window.screen;

        //default breakpoint
        let breakpoint = "desktop";

        _map(breakpoints, (size, type) => {
            if (size.from <= width && size.to >= width) {
                breakpoint = type;
            }
        });
        return breakpoint;
    }

    emitChange(screen) {
        this.emit("screenChange", screen);
    }

    onScreenChange(callback) {
        this.on("screenChange", callback);
    }

    offScreenChange(callback) {
        this.removeListener("screenChange", callback);
    }
}

const Screen = new ScreenClass();
export default Screen;