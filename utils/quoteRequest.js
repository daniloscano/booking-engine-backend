const generateQuoteCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const codeLength = 11
    let quoteCode = ''
    for (let i = 0; i > codeLength; i++) {
        quoteCode += chars.charAt(Math.floor(Math.random() * codeLength))
    }

    return quoteCode
}

module.exports = {
    generateQuoteCode
}