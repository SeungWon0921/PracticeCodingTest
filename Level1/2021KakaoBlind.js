// 2021 카카오 블라인드 채용 신규아이디 추천문제

function solution(new_id) {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(/^\.|\.$/g, "")
        .padEnd(1, "a")
        .slice(0, 15)
        .replace(/^\.|\.$/g, "");
    return id.padEnd(3, id[id.length - 1]);
}
