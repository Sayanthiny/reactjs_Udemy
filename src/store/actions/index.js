export const INCREMENT ='INCREMENT';
export const DECREMENT ='DECREMENT';
export const ADD_NEW_DATA ='ADD_NEW_DATA';
export const SELECT_DATA ='SELECT_DATA';

export function increment(){
    const action={
        type: INCREMENT 
    }
    return action;
}

export function decrement(){
    const action={
        type: DECREMENT
    }

    return action;
}

export function AddNewData(item){
    const action={
        type: AddNewData,
        payload: item
        
    }
    return action;
}

export function SelectData(){
    const action={
        type: SELECT_DATA 
    }
 return action;
      
}