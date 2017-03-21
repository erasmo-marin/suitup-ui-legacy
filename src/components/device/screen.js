import findKey from "lodash/fp/findKey";
import { EventEmitter } from "fbemitter";
import Settings from "../settings";
import { between } from "../../utils";
let breakpoints = Settings.getSettings().Device.Breakpoints;

class ScreenClass extends EventEmitter {
    constructor(args) {
        super(args);
        this.screen = this.getScreen();

        window.addEventListener("resize", () => {
            let newScreen = this.getScreen();
            if (newScreen == this.screen) return;

            this.screen = newScreen;
            this.emitChange(this.screen);
        });
    }

    getScreen() {
        return findKey(between(window.innerWidth), breakpoints);
    }

    emitChange(screen) {
        this.emit("screenChange", screen);
    }

    onScreenChange(callback) {
        return this.addListener("screenChange", callback);
    }
}

const Screen = new ScreenClass();
export default Screen;