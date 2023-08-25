export default function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let distance = Number.MAX_VALUE
    let index = -1;
    const valid = (x: number, y: number, points: number[]): boolean => {
        return points[0] === x || points[1] === y;
    }

    const dist = (x: number, y: number, points: number[]): number => {
        return Math.abs(x - points[0]) + Math.abs(y - points[1]);
    }
    points.forEach((point, i) => {
        if (valid(x, y, point)) {
            const currentDistance = dist(x, y, point);
            if (currentDistance < distance) {
                distance = currentDistance;
                index = i;
            }
        }
    })
    return index;


};

