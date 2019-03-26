import {fromJS} from 'immutable'


const AUTH = 'AUTH'

const SET_ADMIN_ACCESS = 'SET_ADMIN_ACCESS'
const CLEAR_ADMIN_ACCESS = 'CLEAR_ADMIN_ACCESS'

const SET_READ_ONLY = 'SET_READ_ONLY'
const CLEAR_READ_ONLY = 'CLEAR_READ_ONLY'

const SET_SHOW_ASSETS = 'SET_SHOW_ASSETS'
const CLEAR_SHOW_ASSETS = 'CLEAR_SHOW_ASSETS'

const SET_USER = 'SET_USER'
const CLEAR_USER = 'CLEAR_USER'

const SET_USERTOKEN = 'SET_USERTOKEN'
const CLEAR_USERTOKEN = 'CLEAR_USERTOKEN'


const REQUESTING = 'REQUESTING'
const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
const REQUEST_ERROR = 'REQUEST_ERROR'

const CLEAR_ERROR = 'CLEAR_ERROR'

const SET_ISFETCHING = 'SET_ISFETCHING'

const SET_SELECTED_ORGANIZATION = 'SET_SELECTED_ORGANIZATION'

export function setIsFetching(isFetching){
  return{
    namespace:AUTH,
    type:SET_ISFETCHING,
    isFetching,
  }
}

export function clearError(){
  return{
    namespace:AUTH,
    type:CLEAR_ERROR
  }
}

export function setUser(data){
  return{
    type:SET_USER,
    namespace:AUTH,
    data
  }
}

export function clearUser(){
  return{
    type:CLEAR_USER,
    namespace:AUTH
  }
}

export function setUserToken(data){
  return{
    type:SET_USERTOKEN,
    namespace:AUTH,
    data
  }
}

export function clearUserToken(){
  return{
    type:CLEAR_USERTOKEN,
    namespace:AUTH
  }
}

export function setAdminAccess(data){
  return{
    type:SET_ADMIN_ACCESS,
    namespace:AUTH,
    data
  }
}

export function clearAdminAccess(){
  return{
    type:CLEAR_ADMIN_ACCESS,
    namespace:AUTH
  }
}

export function setReadOnly(data){
  return{
    type:SET_READ_ONLY,
    namespace:AUTH,
    data
  }
}

export function clearReadOnly(){
  return{
    type:CLEAR_READ_ONLY,
    namespace:AUTH
  }
}

export function setShowAssets(data){
  return{
    type:SET_SHOW_ASSETS,
    namespace:AUTH,
    data
  }
}

export function clearShowAssets(){
  return{
    type:CLEAR_SHOW_ASSETS,
    namespace:AUTH
  }
}

export function fetching(){
  return{
    type:REQUESTING,
    namespace:AUTH
  }
}
export function fetchingError(error){

  return{
    type:REQUEST_ERROR,
    namespace:AUTH,
    error:error
  }
}
export function fetchingSuccess(){
  return{
    namespace:AUTH,
    type:REQUEST_SUCCESS,
  }
}


const initialState = fromJS({
  user:null,
  usertoken:null,
  isFetching:false,
  error:null,
  selectedOrganization:null,
  isReadOnly: true,
  showAssets: false,
  adminAccess: false
})

export function setSelectedOrganization(data){
  return{
    type:SET_SELECTED_ORGANIZATION,
    namespace:AUTH,
    data
  }
}

export function state(state = initialState, action){



  // if(action.namespace !== AUTH){
  //   return state
  // }

  switch(action.type){

    case CLEAR_ERROR:
      return state.setIn(
        ['error'], null
      )

    case SET_ISFETCHING:

        return state.setIn(
          ['isFetching'], action.isFetching
        )
    case SET_ADMIN_ACCESS:
        return state.merge(
          {adminAccess:action.data}
        )
    case CLEAR_ADMIN_ACCESS:
        return state.merge(
          {adminAccess:false}
        )
    case SET_SHOW_ASSETS:
        return state.merge(
          {showAssets:action.data}
        )
    case CLEAR_SHOW_ASSETS:
        return state.merge(
          {showAssets:false}
        )
    case SET_READ_ONLY:
        return state.merge(
          {isReadOnly:action.data}
        )
    case CLEAR_READ_ONLY:
        return state.merge(
          {isReadOnly:true}
        )
    case SET_USER:
      return state.merge(
        {user:action.data}
      )
    case CLEAR_USER:
      return state.merge(
        {user:null}
      )
      case SET_USERTOKEN:
      return state.setIn(
        ['usertoken'], action.data
      )
  case CLEAR_USERTOKEN:
      return state.setIn(
        ['usertoken'], null
      )  
    case REQUESTING:
    return state.merge(
      {isFetching:true}
    )
    case REQUEST_SUCCESS:
    return state.merge(
      {isFetching:false, error:null}
    )
    case REQUEST_ERROR:
    return state.merge(
      {isFetching:false, error:action.error}
    )
    case SET_SELECTED_ORGANIZATION:
      return state.merge(
        {selectedOrganization:action.data}
      )
    default:
      return state
  }

}
