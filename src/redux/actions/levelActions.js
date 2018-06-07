export const LEVEL_ACTIONS = {
    FETCH_LEVEL: 'FETCH_LEVEL',
    SET_LEVEL: 'SET_LEVEL'
};

export function getLevels() {
    return { type: LEVEL_ACTIONS.FETCH_LEVEL };
}