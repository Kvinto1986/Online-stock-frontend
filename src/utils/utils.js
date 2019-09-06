export const normalize = key => (store, dict) => {
    store[key] = dict
    return store
}
