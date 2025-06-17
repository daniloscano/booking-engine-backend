const generateLayout = (king, single, crib) => {
    const newLayout = []

    if (king > 0) {
        newLayout.push(king === 1
            ? 'M'
            : `${king}M`)
    }

    if (single > 0) {
        newLayout.push(single === 1
            ? 'L'
            : `${single}L`)
    }

    if (crib > 0) {
        newLayout.push(crib === 1
            ? 'C'
            : `${crib}C`)
    }

    return newLayout.join('')
}

module.exports = {
    generateLayout
}