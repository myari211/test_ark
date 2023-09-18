export const addUser = data => {
    return({
        type: "ADD",
        payload: data,
    });
}