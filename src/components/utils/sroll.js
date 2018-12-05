import offset from 'document-offset';

class ScrollerClass {
    to = (to, duration = 1000, dyoffset = 0, animation = 'easeInOut', power = 2) => {
        if (!to) return;
        const start = document.scrollingElement.scrollTop;
        const change = offset(to).top - start - dyoffset;
        const interval = 16; //close to 60fps
        const positionIncrement = change * (interval / duration);
        const iterations = duration / interval;
        const animateScroll = i => {
            if (i >= iterations) return;
            const dy = this[animation](power)(i / iterations) * change + start;
            document.scrollingElement.scrollTop = dy;
            setTimeout(() => animateScroll(++i), interval);
        };
        animateScroll(1);
    };

    easeIn = p => t => Math.pow(t, p);
    easeOut = p => t => 1 - Math.abs(Math.pow(t - 1, p));
    easeInOut = p => t => (t < 0.5 ? this.easeIn(p)(t * 2) / 2 : this.easeOut(p)(t * 2 - 1) / 2 + 0.5);
}

const Scroller = new ScrollerClass();
export default Scroller;
