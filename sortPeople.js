var sortPeople = function (names, heights) {
    // let o = []
    // names.map((a, i) => o.push({ name: a, height: heights[i] }))
    // o.sort((a, b) => b.height - a.height)
    // return o.map(i => i.name)

    return names
        .map((s, i) => [s, heights[i]])
        .sort((a, b) => b[1] - a[1])
        .map(([v]) => v)
};

names = ["Mary", "John", "Emma"]
heights = [180, 165, 170]

console.log(sortPeople(names, heights))