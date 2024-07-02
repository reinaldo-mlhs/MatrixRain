class Matrix {
    constructor(rez) {
        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        this.cells = [];
        this.trails = [];
        this.trailLength = 15;

        this.buildCharacterCells(rez);
    }

    buildCharacterCells(rez) {
        const cells = [];
        for (let x = 0; x < rez; x++) {
            cells.push([]);
            for (let y = 0; y < rez; y++) {
                const randomChar = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
                cells[x].push(randomChar);
            }
        }
        this.cells = cells;
    }

    draw(rez, imgThresholdPixels) {
        background(0);

        for (let t of this.trails) {
            for (let i = 0; i < this.trailLength; i++) {
                const x = clamp(Math.floor(t.column * (w / rez)), 0, w - 1);
                const y = clamp(Math.floor((t.row - i) * (h / rez)), 0, h - 1);

                const thresholdPixel = imgThresholdPixels[y][x];
                const opacity = thresholdScale(thresholdPixel);

                push();
                fill(`rgba(0,255,0, ${opacity})`);
                text(this.cells[t.column][t.row - i], x, y);
                pop();
            }
            t.row += 1;
            if (t.row > (rez + this.trailLength)) {
                this.trails.shift();
            }
        }
        this.trails.push(this.createTrail(rez))
        this.trails.push(this.createTrail(rez))
        this.trails.push(this.createTrail(rez))
        this.trails.push(this.createTrail(rez))
        this.trails.push(this.createTrail(rez))
        this.trails.push(this.createTrail(rez))
    }

    createTrail(rez) {
        return {
            column: Math.floor(Math.random() * rez),
            row: 0
        }
    }
}


