import {useState, useEffect} from 'react'
import SyncStorage from 'sync-storage'

function usePersistedState(key, initialState){
  const [state, setState] = useState(() => {
    const storageValue = SyncStorage.get(key);
    
    if(storageValue){
      return JSON.parse(storageValue);
    }else{
      return initialState;
    }

  });

  useEffect(() =>{
    SyncStorage.set(key, JSON.stringify(state))
  }, [key, state])


  return [state, setState]

}

export default usePersistedState;