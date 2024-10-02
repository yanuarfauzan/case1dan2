import { IComment } from "./types/commentTypes";

export const countComments = (comments: IComment[]): number => {
    let total = 0;

    for (const comment of comments) {
        // Setiap komentar dihitung sebagai 1
        total += 1;

        // Jika komentar memiliki balasan (replies), hitung juga balasannya
        if (comment.replies) {
            total += countComments(comment.replies);
        }
    }

    return total;
};