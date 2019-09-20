export const normalize = (store, dict) => {
    store[dict.id] = dict
    return store
}
