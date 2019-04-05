export default (length, offset = 0) =>
    Array(length)
        .fill(undefined)
        .map((_, i) => offset + i);
