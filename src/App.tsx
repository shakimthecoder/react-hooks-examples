import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CountExample from './assets/hooks/useState/1-use-state'
import EffectExample from './assets/hooks/useeffect/2-use-effect'
import { ReducerExample, SecondRefExample } from './assets/hooks/4-use-reducer/use-reducer'
import { RefExample } from './assets/hooks/5-use-ref/5-use-ref'
import { LayoutEffectExample } from './assets/hooks/7-layout.tsx/layout'
import './App.css'

function App() {
  return (<>
  <CountExample />
  <EffectExample />
  <ReducerExample />
  <SecondRefExample />
  <LayoutEffectExample />


  </>
  );
  }

export default App
