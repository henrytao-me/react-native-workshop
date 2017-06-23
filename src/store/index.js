import React from 'react'
import { AsyncStorage } from 'react-native'
import { PureComponent } from 'react-native-mdcore'

import { connect as reactReduxConnect, Provider } from 'react-redux'
import { applyMiddleware, bindActionCreators as reduxBindActionCreators, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import createMigration from 'redux-persist-migrate'
import { applyModelTransform, PersistModelProvider } from 'redux-persist-model'

import middlewares, { Injector } from '@middlewares'
import * as Models from '@models'
import reducers from '@reducers'

import migration from './migration'

const STORE = createStore(reducers, undefined, composeWithDevTools(
  createMigration(migration, 'settings'),
  applyMiddleware(
    ...middlewares,
    createLogger({
      predicate: (getState, action) => __DEV__, //eslint-disable-line
      collapsed: true,
      duration: true
    })
  ),
  autoRehydrate(),
  next => (reducers, initialState, enhancer) => {
    const nextStore = next(reducers, initialState, enhancer)
    Injector.inject({
      getState: nextStore.getState
    })
    return nextStore
  }
))
persistStore(STORE, {
  storage: AsyncStorage,
  transforms: [applyModelTransform(Models)]
}, () => PersistModelProvider.rehydrated())

export default class Store extends PureComponent {

  render() {
    return (
      <Provider store={STORE}>
        {this.props.children}
      </Provider>
    )
  }
}

export const bindActionCreators = reduxBindActionCreators

/**
 * Connect with default state values
 */
export const connect = (mapStateToProps, mapDispatchToProps, mergeProps) => (WrappedComponent) => {
  mapStateToProps = mapStateToProps || function () { return {} }
  const wrappedMapStateToProps = (state, ownProps) => {
    // apply default state values to re-render PureComponent. Useful for reload the whole app after changing locale
    const { font, language } = state
    return Object.assign({
      __font__: font,
      __language__: language
    }, mapStateToProps(state, ownProps))
  }
  return reactReduxConnect(wrappedMapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent)
}
