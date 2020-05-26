import { combineReducers } from 'redux';

const initialStateRegister = {
    form: {
        fullName: '',
        email: '',
        noHp: '',
        password: '',
        error: '',
        loading: false
    },
};

const initialStateLogin = {
    form: {
        email: '',
        password: '',
    },
    info: 'tolong masukan password anda',
    isLogin: true,
};

const RegisterReducer = ( state = initialStateRegister, action ) => {
    if(action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            }, 
        };
    }
    return state;    
};

const LoginReducer = ( state = initialStateLogin, action ) => {
    if(action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        };
    }
    return state;
}

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;