import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CountExample from './assets/hooks/useState/1-use-state'
import EffectExample from './assets/hooks/useeffect/2-use-effect'
import { ReducerExample } from './assets/hooks/4-use-reducer/use-reducer'
import './App.css'

function App() {
  return (<>
  <CountExample />
  <EffectExample />
  <ReducerExample />

  </>
  );
  }

export default App
