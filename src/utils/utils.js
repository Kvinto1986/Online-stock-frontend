export const normalize = key => (store, dict) => {
    store[dict[key]] = dict
    return store
}
