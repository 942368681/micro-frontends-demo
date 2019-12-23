export default {
    namespace: 'global',
    state: {
        text: 'Hello World'
    },
    reducers: {
        setText (state: any, payload: any) {
            const { text } = payload;
            state.text = text;
        }
    },
    effects: {
        
    },
};
