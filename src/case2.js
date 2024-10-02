"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countComments = void 0;
const countComments = (comments) => {
    let total = 0;
    for (const comment of comments) {
        // Setiap komentar dihitung sebagai 1
        total += 1;
        // Jika komentar memiliki balasan (replies), hitung juga balasannya
        if (comment.replies) {
            total += (0, exports.countComments)(comment.replies);
        }
    }
    return total;
};
exports.countComments = countComments;
