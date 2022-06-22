var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for (let i = 0; i < points.length - 1; i++) {
        while (points[i][0] != points[i + 1][0] || points[i][1] != points[i + 1][1]) {
            if (points[i][0] > points[i + 1][0]) {
                if (points[i][1] > points[i + 1][1]) {   // [3, 3] [1, 1]
                    points[i][0]--;
                    points[i][1]--;
                }
                else if (points[i][1] < points[i + 1][1]) { // [3, 0] [ 1, 2]
                    points[i][1]++;
                    points[i][0]--;
                }
                else {
                    points[i][0]--;
                }
            }
            else if (points[i][0] < points[i + 1][0]) {
                if (points[i][1] < points[i + 1][1]) {   // [1, 1] [3, 4]
                    points[i][0]++;
                    points[i][1]++;
                }
                else if (points[i][1] > points[i + 1][1]) {
                    points[i][1]--;
                    points[i][0]++;
                }
                else {
                    points[i][0]++;
                }
            }
            else {
                if (points[i][1] < points[i + 1][1]) {
                    points[i][1]++;
                }
                else {
                    points[i][1]--;
                }
            }
            count++;

        }
    }
    return count;
};







var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for (let i = 0; i < points.length - 1; i++) {
        let diffX = Math.abs(points[i][0] - points[i + 1][0]);
        let diffY = Math.abs(points[i][1] - points[i + 1][1]);
        if (diffX > diffY) {
            count += diffX;
        }
        else {
            count += diffY;
        }
    }
    return count;
};
