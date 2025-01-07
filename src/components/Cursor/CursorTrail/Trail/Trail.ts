type Point = [number, number];
type Path = {
  svgPath: string;
  color: string;
};
type Strap = {
  inOrder: Point[];
  revOrder: Point[];
  color: string;
};

const TO_FIXED_PRECISION = /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g;

const med = (A: Point, B: Point): Point => {
  return [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
};

export class Trail {
  points: Point[];
  lastX: number;
  lastY: number;

  private MAX_POINT_COUNTER = 30;
  private COLORS = [
    "#fd9090cc",
    "#fff962cc",
    "#9bf993cc",
    "#80daf5cc",
    "#bb90facc",
  ];
  private MAX_RADIUS = 15;
  private MIN_RADIUS = 1;

  constructor() {
    this.points = [];
    this.lastX = -20;
    this.lastY = -20;
  }

  pushPoint = (x: number, y: number) => {
    if (x === this.lastX && y === this.lastY) {
      this.points.pop();
      return;
    }

    this.points.unshift([x, y]);

    this.lastX = x;
    this.lastY = y;

    if (this.points.length > this.MAX_POINT_COUNTER) {
      this.points.pop();
    }
  };

  getStrapOffset = (j: number, angle: number, rad: number) => {
    const pa = angle + Math.PI / 2;
    const pb = angle - Math.PI / 2;
    const cl = this.COLORS.length;

    const halfStrapWidth = rad / cl;

    switch (cl) {
      case 1:
        const xOffsetIn = Math.cos(pa) * rad;
        const yOffsetIn = Math.sin(pa) * rad;
        const xOffsetRev = Math.cos(pb) * rad;
        const yOffsetRev = Math.sin(pb) * rad;

        return { xOffsetIn, yOffsetIn, xOffsetRev, yOffsetRev };
      case 5:
        if (j < 2) {
          const farShift = (1 - j) * 2 * halfStrapWidth + 3 * halfStrapWidth;
          const closeShift = (1 - j) * 2 * halfStrapWidth + halfStrapWidth;

          const xOffsetIn = Math.cos(pa) * farShift;
          const yOffsetIn = Math.sin(pa) * farShift;
          const xOffsetRev = Math.cos(pa) * closeShift;
          const yOffsetRev = Math.sin(pa) * closeShift;

          return { xOffsetIn, yOffsetIn, xOffsetRev, yOffsetRev };
        } else if (j === 2) {
          const xOffsetIn = Math.cos(pa) * halfStrapWidth;
          const yOffsetIn = Math.sin(pa) * halfStrapWidth;
          const xOffsetRev = Math.cos(pb) * halfStrapWidth;
          const yOffsetRev = Math.sin(pb) * halfStrapWidth;

          return { xOffsetIn, yOffsetIn, xOffsetRev, yOffsetRev };
        } else {
          const farShift = (j - 3) * 2 * halfStrapWidth + 3 * halfStrapWidth;
          const closeShift = (j - 3) * 2 * halfStrapWidth + halfStrapWidth;

          const xOffsetIn = Math.cos(pb) * farShift;
          const yOffsetIn = Math.sin(pb) * farShift;
          const xOffsetRev = Math.cos(pb) * closeShift;
          const yOffsetRev = Math.sin(pb) * closeShift;

          return { xOffsetIn, yOffsetIn, xOffsetRev, yOffsetRev };
        }
      default:
        throw new Error("Unsupported number of colors");
    }
  };
  getSvgPath = (): Path[] => {
    if (this.points.length < 2) return [];

    const pl = this.points.length;

    // narrowing the radius of the straps
    const ithNarrowing = this.points.map(
      (_, i) =>
        this.MAX_RADIUS - (i / (pl - 1)) * (this.MAX_RADIUS - this.MIN_RADIUS)
    );

    const inOrder: Point[] = this.points.map((point) => [...point]);
    const revOrder: Point[] = this.points.map((point) => [...point]);

    const straps: Strap[] = this.COLORS.map((color) => ({
      inOrder: [...inOrder],
      revOrder: [...revOrder],
      color,
    }));

    for (let i = 0; i < pl; i++) {
      let angle = 0;

      if (i === 0) {
        angle = Math.atan2(
          this.points[i][1] - this.points[i + 1][1],
          this.points[i][0] - this.points[i + 1][0]
        );
      } else if (i === pl - 1) {
        angle = Math.atan2(
          this.points[i - 1][1] - this.points[i][1],
          this.points[i - 1][0] - this.points[i][0]
        );
      } else {
        const prevAngle = Math.atan2(
          this.points[i - 1][1] - this.points[i][1],
          this.points[i - 1][0] - this.points[i][0]
        );
        const nextAngle = Math.atan2(
          this.points[i][1] - this.points[i + 1][1],
          this.points[i][0] - this.points[i + 1][0]
        );

        angle = Math.atan2(
          Math.sin(prevAngle) + Math.sin(nextAngle),
          Math.cos(prevAngle) + Math.cos(nextAngle)
        );
      }

      for (let j = 0; j < straps.length; j++) {
        const strap = straps[j];

        const { xOffsetIn, yOffsetIn, xOffsetRev, yOffsetRev } =
          this.getStrapOffset(j, angle, ithNarrowing[i]);

        strap.inOrder[i] = [
          this.points[i][0] + xOffsetIn,
          this.points[i][1] + yOffsetIn,
        ];
        strap.revOrder[i] = [
          this.points[i][0] + xOffsetRev,
          this.points[i][1] + yOffsetRev,
        ];
      }
    }

    const paths: Path[] = straps.map((strap) => {
      const points = strap.inOrder.concat(strap.revOrder.reverse());
      const max = points.length - 1;

      // shout-out to https://github.com/steveruizok and Excalidraw
      const svgPath = points
        .reduce(
          (acc, point, i, arr) => {
            if (i === max) {
              acc.push(point, med(point, arr[0]), "L", arr[0], "Z");
            } else {
              acc.push(point, med(point, arr[i + 1]));
            }
            return acc;
          },
          ["M", points[0], "Q"]
        )
        .join(" ")
        .replace(TO_FIXED_PRECISION, "$1");

      return {
        svgPath,
        color: strap.color,
      };
    });

    return paths;
  };
}
