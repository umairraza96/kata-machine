const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];
function walk(
    maze: string[],
    wall: string,
    currentPoint: Point,
    endPoint: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    if (
        currentPoint.x < 0 ||
        currentPoint.x >= maze[0].length ||
        currentPoint.y < 0 ||
        currentPoint.y >= maze.length
    ) {
        return false;
    }

    if (maze[currentPoint.y][currentPoint.x] === wall) {
        return false;
    }

    if (currentPoint.x === endPoint.x && currentPoint.y === endPoint.y) {
        path.push(endPoint);
        return true;
    }

    if (seen[currentPoint.y][currentPoint.x]) {
        return false;
    }

    //pre
    seen[currentPoint.y][currentPoint.x] = true;
    path.push(currentPoint);
    //recurse
    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: currentPoint.x + x,
                    y: currentPoint.y + y,
                },
                endPoint,
                seen,
                path,
            )
        ) {
            return true;
        }
    }
    //post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let seen: boolean[][] = [];
    let path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen[i] = new Array(maze.length).fill(false);
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
