import { EventEmitter } from 'fbemitter';

const defaultSettings = {
    Image: {
        aspectRatios: {
            square: {
                width: 600,
                height: 600,
            },
            mediumv: {
                width: 600,
                height: 800,
            },
            mediumh: {
                width: 800,
                height: 600,
            },
            poster: {
                width: 600,
                height: 900,
            },
            backdrop: {
                width: 1600,
                height: 900,
            },
            banner: {
                width: 2000,
                height: 400,
            },
        },
    },
    Device: {
        Breakpoints: {
            mobile: {
                from: 0,
                to: 768,
            },
            tablet: {
                from: 769,
                to: 1007,
            },
            desktop: {
                from: 1008,
                to: 1199,
            },
            widescreen: {
                from: 1200,
                to: 1391,
            },
            fullhd: {
                from: 1392,
                to: Number.MAX_SAFE_INTEGER,
            },
        },
    },
    /*If you don't pass gutter or columns props, Box will use this defaults*/
    Box: {
        gutter: '1rem',
        columns: 12,
    },
};

let settings = defaultSettings;

class S extends EventEmitter {
    emitChange(settings) {
        this.emit('settingsChange', settings);
    }

    onSettingsChange(callback) {
        return this.addListener('settingsChange', callback);
    }

    setSettings(userSettings) {
        settings = { ...defaultSettings, ...userSettings };
        this.emitChange(settings);
    }

    getSettings() {
        return settings;
    }

    getDefaultSettings() {
        return defaultSettings;
    }

    restoreToDefaults() {
        settings = defaultSettings;
        this.emitChange(settings);
    }
}

const s = new S();
export default s;
